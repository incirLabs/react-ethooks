import {useMemo} from 'react';
import {useRootContext} from '../contexts';

const useSigner = () => {
  const root = useRootContext();

  return useMemo(
    () => ({
      signer: root.signer,
    }),
    [root.signer],
  );
};

export default useSigner;
