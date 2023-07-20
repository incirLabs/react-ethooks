import {createContext, useContext, useEffect, useState} from 'react';
import {useProvider} from './EthersContext';

export const BlockNumberContext = createContext<number | null>(null);

export const BlockNumberProvider = ({children}: {children: React.ReactNode}) => {
  const [blockNumber, setBlockNumber] = useState<number>(0);

  const provider = useProvider();

  useEffect(() => {
    const handler = (block: number) => {
      setBlockNumber(block);
    };

    provider.getBlockNumber().then(handler);

    provider.on('block', handler);

    return () => {
      provider.off('block', handler);
    };
  }, [provider]);

  return <BlockNumberContext.Provider value={blockNumber}>{children}</BlockNumberContext.Provider>;
};

export const useBlockNumber = (): number => {
  const context = useContext(BlockNumberContext);

  if (context === null) {
    throw new Error('You must wrap your app content in EthooksProvider component');
  }

  return context;
};
