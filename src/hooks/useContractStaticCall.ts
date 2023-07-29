import {ethers} from 'ethers';
import {useCallback} from 'react';
import {EMPTY_ARRAY} from '../utils/Constants';
import {Args, ContractResult, JsonRpcError} from '../types';

const useContractStaticCall = (
  /**
   * Contract instance returned from useContract or ethers.Contract
   */
  contract: ethers.Contract,

  /**
   * Contract function name
   */
  method: string,

  /**
   * Default Arguments to pass to the contract function
   */
  defaultArgs: Args = EMPTY_ARRAY,
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
          data: await contract.callStatic[method](...args),
        };
      } catch (err) {
        return {status: false, error: err as JsonRpcError};
      }
    },
    [contract, method, defaultArgs],
  );

  return read;
};

export default useContractStaticCall;
