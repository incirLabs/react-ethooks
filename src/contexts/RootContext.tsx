import {createContext, useCallback, useContext, useState} from 'react';
import {ethers} from 'ethers';
import {Chain} from '../types';

export interface RootContextType {
  signer?: ethers.providers.JsonRpcSigner;
  address?: string;
  ensName?: string;
  chains: Chain[];
}
export type RootContextDispatch = React.Dispatch<React.SetStateAction<RootContextType>>;

export interface RootContextProviderProps {
  initialState: RootContextType;
  children: React.ReactNode;
}

export const RootContext = createContext<[RootContextType, RootContextDispatch] | null>(null);

export const RootContextProvider: React.FC<RootContextProviderProps> = (props) => {
  const {children, initialState} = props;

  const context = useState(initialState);

  return <RootContext.Provider value={context}>{children}</RootContext.Provider>;
};

export const useRootContext = (): RootContextType => {
  const context = useContext(RootContext);

  if (!context) {
    console.error('You must wrap your app content in EthooksProvider component');
    return {chains: []};
  }

  return context[0];
};

export const useSetRootContext = () => {
  const context = useContext(RootContext);

  if (!context) {
    console.error('You must wrap your app content in EthooksProvider component');
  }

  const setState = context?.[1];

  return useCallback(
    (
      action: Partial<RootContextType> | ((previous: RootContextType) => Partial<RootContextType>),
    ): void => {
      setState?.((prev) => ({...prev, ...(typeof action === 'function' ? action(prev) : action)}));
    },
    [setState],
  );
};
