import {useMemo} from 'react';
import {useRootContext} from '../contexts';

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
