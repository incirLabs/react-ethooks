import {useEffect, useState} from 'react';
import {BigNumber, Contract, utils} from 'ethers';
import useAccount from './useAccount';
import useContractRead from './useContractRead';
import {FormatUnitsName} from '../types';

/**
 * Returns the balance of the currently connected account or the given address for the ERC20 token.
 *
 * NOTE: If format is **provided**, this hook will return the balance as a `string`. If not provided, it will return `BigNumber`.
 *
 * @param contract - Contract instance for the ERC20 token.
 * @param address - Address to get the balance of. If not given, currently connected account is used.
 * @param format - Unit name or decimal to format the balance with. If not given, no formatting is applied.
 */
const useERC20Balance = <T extends FormatUnitsName | undefined = undefined>(
  contract: Contract,
  address?: string,
  format?: T,
): T extends undefined ? BigNumber : string => {
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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (format ? utils.formatUnits(balance, format) : balance) as any;
};

export default useERC20Balance;
