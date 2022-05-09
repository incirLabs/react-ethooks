import {RootContextProvider} from '../contexts/RootContext';

export interface EthooksProviderProps
  extends React.ComponentPropsWithoutRef<typeof RootContextProvider> {
  chains?: Chain[];
}

export const EthooksProvider: React.FC<EthooksProviderProps> = ({
  children,
  chains,
  initialState,
  ...props
}) => {
  return (
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
  );
};

export default EthooksProvider;
