import {useEffect, useState} from 'react';
import {useProvider} from '../contexts';

/**
 * Returns the ENS name of the given address.
 *
 * NOTE: You can use the `useAccount` hook to get the ens name of the currently connected account.
 * Main purpose of this hook is to get the ens name of an address that is not the currently connected account.
 */
const useEnsName = (address: string) => {
  const [ensName, setEnsName] = useState<string | null>(null);

  const provider = useProvider();

  useEffect(() => {
    provider
      .lookupAddress(address)
      .then((response) => setEnsName(response))
      .catch(() => setEnsName(null));
  }, [address, provider]);

  return ensName;
};

export default useEnsName;
