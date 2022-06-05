import {useCallback} from 'react';
import useContract from './useContract';
import useContractRead from './useContractRead';
import useContractWrite from './useContractWrite';
import ERC20ABI from '../abis/ERC20';

const useERC20 = (tokenAddress: string) => {
  const contract = useContract(tokenAddress, ERC20ABI, true);

  const readBalance = useContractRead(contract, 'balanceOf', []);
  const readAllowance = useContractRead(contract, 'allowance', []);
  const readTotalSupply = useContractRead(contract, 'totalSupply', []);
  const readSymbol = useContractRead(contract, 'symbol', []);

  const writeApprove = useContractWrite(contract, 'approve', []);
  const writeTransfer = useContractWrite(contract, 'transfer', []);

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
