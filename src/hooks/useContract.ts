import {ethers} from 'ethers';
import {useMemo} from 'react';
import {useEthers, useRootContext} from '../contexts';

const useContract = (
  contractAddress: string,
  contractInterface: ethers.ContractInterface,
  withSigner?: boolean,
): ethers.Contract => {
  const root = useRootContext();
  const provider = useEthers();

  const contract = useMemo(() => {
    return new ethers.Contract(
      contractAddress,
      contractInterface,
      withSigner ? root.signer : provider,
    );
  }, [contractAddress, withSigner, provider, contractInterface, root.signer]);

  return contract;
};

export default useContract;
