import {useEffect, useState} from 'react';
import {BigNumber, ethers} from 'ethers';
import useAccount from './useAccount';
import useContractRead from './useContractRead';

/**
 * Returns the balance of the currently connected account or the given address for the ERC20 token.
 *
 * @param contract - Contract instance for the ERC20 token.
 * @param address - Address to get the balance of. If not given, currently connected account is used.
 */
const useERC20Balance = (contract: ethers.Contract, address?: string) => {
  const [balance, setBalance] = useState(BigNumber.from(0));

  const {address: connectedAddress} = useAccount();
  const readBalance = useContractRead(contract, 'balanceOf');

  const addressToUse = address || connectedAddress;

  useEffect(() => {
    if (addressToUse) {
      readBalance([addressToUse]).then((response) => {
        if (response.status) {
          setBalance(response.data);
        }
      });
    }
  }, [readBalance, addressToUse]);

  return balance;
};

export default useERC20Balance;
