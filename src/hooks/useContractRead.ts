import {ethers} from 'ethers';
import {useCallback} from 'react';
import {Args, ContractResult} from '../types';

const useContractRead = (
  /**
   * Contract object returned from useContract or ethers.Contract
   */
  contract: ethers.Contract,

  /**
   * Contract function name
   */
  method: string,

  /**
   * Default Arguments to pass to the contract function
   */
  defaultArgs: Args = [],
): ((
  /**
   * Arguments to pass to the contract function
   */
  args?: Args,
) => Promise<ContractResult>) => {
  const read = useCallback(
    async (args: Args = defaultArgs): Promise<ContractResult> => {
      try {
        return {
          status: true,
          data: await contract[method](...args),
        };
      } catch (err) {
        return {status: false, error: err as Error};
      }
    },
    [contract, method, defaultArgs],
  );

  return read;
};

export default useContractRead;
