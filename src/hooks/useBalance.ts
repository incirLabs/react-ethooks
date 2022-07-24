import {useEffect, useState} from 'react';
import {BigNumber, utils} from 'ethers';
import {useProvider} from '../contexts';
import useAccount from './useAccount';
import {FormatUnitsName} from '../types';

/**
 * Returns the balance of the currently connected account or the given address.
 *
 * NOTE: If format is **provided**, this hook will return the balance as a `string`. If not provided, it will return `BigNumber`.
 *
 * @param address - Address to get the balance of. If not given, currently connected account is used.
 * @param format - Unit name or decimal to format the balance with. If not given, no formatting is applied.
 */
const useBalance = <T extends FormatUnitsName | undefined = undefined>(
  address?: string,
  format?: T,
): T extends undefined ? BigNumber : string => {
  const [balance, setBalance] = useState(BigNumber.from(0));

  const provider = useProvider();
  const {address: connectedAddress} = useAccount();

  const addressToUse = address || connectedAddress;

  useEffect(() => {
    if (addressToUse) {
      provider.getBalance(addressToUse).then(setBalance);
    }
  }, [provider, addressToUse]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (format ? utils.formatUnits(balance, format) : balance) as any;
};

export default useBalance;
