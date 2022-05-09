import {createContext, useContext, useState} from 'react';
import {ethers} from 'ethers';

export interface RootContextType {
  signer?: ethers.providers.JsonRpcSigner;
  address?: string;
  chains: Chain[];
}

export interface RootContextProviderProps {
  initialState: RootContextType;
  children: React.ReactNode;
}

export const RootContext = createContext<
  [RootContextType, React.Dispatch<React.SetStateAction<RootContextType>>] | null
>(null);

export const RootContextProvider: React.FC<RootContextProviderProps> = (props) => {
  const {children, initialState} = props;

  const context = useState(initialState);

  return <RootContext.Provider value={context}>{children}</RootContext.Provider>;
};

export const useRootContext = (): RootContextType => {
  const context = useContext(RootContext);

  if (!context) throw new Error('You must wrap your app content in EthooksProvider component');

  return context[0];
};

export const useSetRootContext = () => {
  const context = useContext(RootContext);

  if (!context) throw new Error('You must wrap your app content in EthooksProvider component');

  return context[1];
};