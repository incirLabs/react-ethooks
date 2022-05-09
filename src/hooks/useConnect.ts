import {useCallback, useState} from 'react';
import {useEthers, useSetRootContext} from '../contexts';

const useConenct = () => {
  const ethers = useEthers();
  const setRoot = useSetRootContext();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();

  const connect = useCallback(async () => {
    setLoading(true);
    setError(undefined);

    try {
      await ethers.send('eth_requestAccounts', []);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }

    const signer = ethers.getSigner();
    const address = await signer.getAddress();

    setRoot({signer, address});
    return address;
  }, [ethers, setRoot]);

  return {connect, loading, error};
};

export default useConenct;
