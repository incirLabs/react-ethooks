import {useEffect} from 'react';
import {EthersContext, RootContextProvider} from '../contexts';
import useConenct from '../hooks/useConnect';
import {Chain, EthersProvider} from '../types';

export interface EthooksProviderProps
  extends Partial<React.ComponentPropsWithoutRef<typeof RootContextProvider>> {
  provider: EthersProvider;
  autoConnect?: boolean;
  chains?: Chain[];
}

const AutoConnector: React.FC = () => {
  const {connect} = useConenct();

  useEffect(() => {
    connect();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};

export const EthooksProvider: React.FC<EthooksProviderProps> = ({
  children,
  chains,
  initialState,
  provider,
  autoConnect,
  ...props
}) => {
  return (
    <EthersContext.Provider value={provider}>
      <RootContextProvider
        initialState={{
          signer: undefined,
          address: undefined,
          ...initialState,
          chains: chains || initialState?.chains || [],
        }}
        {...props}
      >
        {children}

        {autoConnect ? <AutoConnector /> : null}
      </RootContextProvider>
    </EthersContext.Provider>
  );
};

export default EthooksProvider;
