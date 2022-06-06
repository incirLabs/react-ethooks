import {createContext, useContext} from 'react';
import {EthersProvider} from '../types';

export const EthersContext = createContext<EthersProvider | null>(null);

export const useProvider = () => {
  const context = useContext(EthersContext);

  if (!context)
    throw new Error('You must pass provider prop with a provider to EthooksProvider component');

  return context;
};
