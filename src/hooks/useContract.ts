import {ethers} from 'ethers';
import {useMemo} from 'react';
import {useProvider, useRootContext} from '../contexts';

const useContract = (
  /**
   * Address of the contract
   */
  contractAddress: string,

  /**
   * Contract ABI
   */
  contractInterface: ethers.ContractInterface,

  /**
   * Whether to use the signer or the provider
   */
  withSigner?: boolean,
): ethers.Contract => {
  const root = useRootContext();
  const provider = useProvider();

  const signerOrProvider = withSigner ? root.signer : provider;

  const contract = useMemo(() => {
    return new ethers.Contract(contractAddress, contractInterface, signerOrProvider);
  }, [contractAddress, contractInterface, signerOrProvider]);

  return contract;
};

export default useContract;
