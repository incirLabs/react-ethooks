import {useCallback, useState} from 'react';
import {useProvider, useRootContext, useSetRootContext} from '../contexts';
import AutoChangeChain from '../utils/AutoChangeChain';

const useConnect: () => {
  /**
   * Function to call when you want to connect
   */
  connect: (
    /**
     * Callback to call when there were any errors while connecting
     */
    onError?: ((error: Error) => unknown) | undefined,
  ) => Promise<string>;

  /**
   * Whether the connection is in progress
   */
  loading: boolean;

  /**
   * Error object if there were any errors
   */
  error: Error | undefined;
} = () => {
  const provider = useProvider();
  const {chains} = useRootContext();
  const setRoot = useSetRootContext();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();

  const connect = useCallback(
    async (onError?: (error: Error) => unknown) => {
      AutoChangeChain(provider, chains);

      setLoading(true);
      setError(undefined);

      try {
        await provider.send('eth_requestAccounts', []);
      } catch (err) {
        setError(err as Error);
        onError?.(err as Error);
      } finally {
        setLoading(false);
      }

      const signer = provider.getSigner();
      const address = await signer.getAddress();

      setRoot({signer, address});
      return address;
    },
    [provider, chains, setRoot],
  );

  return {connect, loading, error};
};

export default useConnect;
