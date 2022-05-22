import {useCallback, useState} from 'react';
import {useEthers, useRootContext, useSetRootContext} from '../contexts';
import AutoChangeChain from '../utils/AutoChangeChain';

const useConnect = () => {
  const provider = useEthers();
  const {chains} = useRootContext();
  const setRoot = useSetRootContext();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();

  const connect = useCallback(async () => {
    AutoChangeChain(provider, chains);

    setLoading(true);
    setError(undefined);

    try {
      await provider.send('eth_requestAccounts', []);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }

    const signer = provider.getSigner();
    const address = await signer.getAddress();

    setRoot({signer, address});
    return address;
  }, [provider, chains, setRoot]);

  return {connect, loading, error};
};

export default useConnect;
