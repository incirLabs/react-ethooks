import {useEffect, useState} from 'react';
import {providers} from 'ethers';
import {useProvider} from '../contexts';

/**
 * Returns an EnsResolver instance which can be used to further inquire about specific entries for an ENS name.
 */
const useEnsResolver = (ensName: string) => {
  const [resolver, setResolver] = useState<providers.Resolver | null>(null);

  const provider = useProvider();

  useEffect(() => {
    provider
      .getResolver(ensName)
      .then((response) => setResolver(response))
      .catch(() => setResolver(null));
  }, [ensName, provider]);

  return resolver;
};

export default useEnsResolver;
