import {EthersContext, RootContextProvider} from '../contexts';

export interface EthooksProviderProps
  extends React.ComponentPropsWithoutRef<typeof RootContextProvider> {
  provider: EthersProvider;
  chains?: Chain[];
}

export const EthooksProvider: React.FC<EthooksProviderProps> = ({
  children,
  chains,
  initialState,
  provider,
  ...props
}) => {
  return (
    <EthersContext.Provider value={provider}>
      <RootContextProvider
        initialState={{
          signer: undefined,
          address: undefined,
          ...initialState,
          chains: chains || initialState.chains || [],
        }}
        {...props}
      >
        {children}
      </RootContextProvider>
    </EthersContext.Provider>
  );
};

export default EthooksProvider;
