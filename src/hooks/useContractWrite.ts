import {ethers} from 'ethers';
import {useCallback} from 'react';
import useConnect from './useConnect';
import {useRootContext} from '../contexts';
import {Args, ContractResult} from '../types';

const useContractWrite = (contract: ethers.Contract, method: string, defaultArgs: Args = []) => {
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
        return {status: false, error: err as Error};
      }
    },
    [contract, method, defaultArgs, connect, root.signer],
  );

  return write;
};

export default useContractWrite;
