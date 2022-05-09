import {useRootContext} from '../contexts';

const useAccount = () => {
  const root = useRootContext();

  return {
    address: root.address,
  };
};

export default useAccount;
