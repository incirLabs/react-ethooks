import {ethers} from 'ethers';
import {useCallback} from 'react';
import useConnect from './useConnect';
import {useRootContext} from '../contexts';
import {EMPTY_ARRAY} from '../utils/Constants';
import {Args, ContractResult, JsonRpcError} from '../types';

const useContractWrite = (
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
  defaultArgs: Args = EMPTY_ARRAY,
): ((
  /**
   * Arguments to pass to the contract function
   */
  args?: Args,

  /**
   * Event listeners
   */
  listeners?: Record<string, ethers.providers.Listener>,
) => Promise<ContractResult>) => {
  const root = useRootContext();

  const {connect} = useConnect();

  const write = useCallback(
    async (
      args: Args = defaultArgs,
      listeners: Record<string, ethers.providers.Listener> = {},
    ): Promise<ContractResult> => {
      if (!root.signer) await connect();

      let contractWithSigner = contract;
      if (root.signer) contractWithSigner = contract.connect(root.signer);

      try {
        const result = await contractWithSigner[method](...args);

        if (listeners && typeof listeners === 'object') {
          Object.entries(listeners).forEach(([name, event]) => {
            contractWithSigner.on(name, event);
          });
        }

        return {status: true, data: result};
      } catch (err) {
        return {status: false, error: err as JsonRpcError};
      }
    },
    [contract, method, defaultArgs, connect, root.signer],
  );

  return write;
};

export default useContractWrite;
