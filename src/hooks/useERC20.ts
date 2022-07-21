import {useCallback} from 'react';
import {ethers} from 'ethers';
import useContract from './useContract';
import useContractRead from './useContractRead';
import useContractWrite from './useContractWrite';
import ERC20ABI from '../abis/ERC20';
import {ContractResult} from '../types';

const useERC20 = (
  /**
   * Address of the ERC20 token contract
   */
  tokenAddress: string,
): {
  /**
   * Contract object returned from useContract or ethers.Contract
   */
  contract: ethers.Contract;

  /**
   * Get the balance of the given account
   */
  getBalance: (address: string) => Promise<ContractResult>;

  /**
   * Get the allowance of the given owner and spender
   */
  getAllowance: (owner: string, spender: string) => Promise<ContractResult>;

  /**
   * Get the total supply of the token
   */
  getTotalSupply: () => Promise<ContractResult>;

  /**
   * Get the symbol of the token
   */
  getSymbol: () => Promise<ContractResult>;

  /**
   * Approve the given spender to spend the given amount of tokens
   */
  approve: (spender: string, amount: number | string) => Promise<ContractResult>;

  /**
   * Transfer the given amount of tokens to the recipient
   */
  transfer: (recipient: string, amount: number | string) => Promise<ContractResult>;
} => {
  const contract = useContract(tokenAddress, ERC20ABI, true);

  const readBalance = useContractRead(contract, 'balanceOf');
  const readAllowance = useContractRead(contract, 'allowance');
  const readTotalSupply = useContractRead(contract, 'totalSupply');
  const readSymbol = useContractRead(contract, 'symbol');

  const writeApprove = useContractWrite(contract, 'approve');
  const writeTransfer = useContractWrite(contract, 'transfer');

  const getBalance = useCallback(
    (address: string) => {
      return readBalance([address]);
    },
    [readBalance],
  );

  const getAllowance = useCallback(
    (owner: string, spender: string) => {
      return readAllowance([owner, spender]);
    },
    [readAllowance],
  );

  const getTotalSupply = useCallback(() => {
    return readTotalSupply();
  }, [readTotalSupply]);

  const getSymbol = useCallback(() => {
    return readSymbol();
  }, [readSymbol]);

  const approve = useCallback(
    (spender: string, amount: number | string) => {
      return writeApprove([spender, amount]);
    },
    [writeApprove],
  );

  const transfer = useCallback(
    (recipient: string, amount: number | string) => {
      return writeTransfer([recipient, amount]);
    },
    [writeTransfer],
  );

  return {contract, getBalance, getAllowance, getTotalSupply, getSymbol, approve, transfer};
};

export default useERC20;
