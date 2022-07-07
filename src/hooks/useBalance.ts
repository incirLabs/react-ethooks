import {useEffect, useMemo, useState} from 'react';
import {BigNumber} from 'ethers';
import {useProvider} from '../contexts';
import useAccount from './useAccount';

/**
 * Returns the balance of the currently connected account or the given address.
 */
const useBalance = (address?: string) => {
  const [balance, setBalance] = useState(BigNumber.from(0));

  const provider = useProvider();
  const {address: connectedAddress} = useAccount();

  const addressToUse = address || connectedAddress;

  useEffect(() => {
    if (addressToUse) {
      provider.getBalance(addressToUse).then(setBalance);
    }
  }, [provider, addressToUse]);

  return useMemo(() => balance, [balance]);
};

export default useBalance;