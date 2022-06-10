import {useMemo} from 'react';
import {useRootContext} from '../contexts';

/**
 * Returns the address of the currently connected account
 */
const useAccount = () => {
  const root = useRootContext();

  return useMemo(
    () => ({
      address: root.address,
    }),
    [root.address],
  );
};

export default useAccount;
