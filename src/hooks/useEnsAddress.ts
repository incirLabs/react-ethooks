import {useEffect, useState} from 'react';
import {useProvider} from '../contexts';

/**
 * Returns the address of the given ENS name.
 */
const useEnsAddress = (ensName: string) => {
  const [address, setAddress] = useState<string | null>(null);

  const provider = useProvider();

  useEffect(() => {
    provider
      .resolveName(ensName)
      .then((response) => setAddress(response))
      .catch(() => setAddress(null));
  }, [ensName, provider]);

  return address;
};

export default useEnsAddress;
