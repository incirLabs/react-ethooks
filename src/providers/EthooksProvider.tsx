import {useCallback, useMemo} from 'react';
import {providers} from 'ethers';
import {EthersContext, RootContextProvider, BlockNumberProvider} from '../contexts';
import {useAccountChange} from '../hooks';
import {useMount} from '../hooks/internal';
import useConnect from '../hooks/useConnect';
import {Chain, EthersProvider} from '../types';

export interface EthooksProviderProps
  extends Partial<React.ComponentPropsWithoutRef<typeof RootContextProvider>> {
  /**
   * Ethers.js Provider to be used.
   * Usually this is a Web3Provider with `window.ethereum` or `window.web3` object.
   * You SHOULD pass your own provider, however, we will create a Web3 provider for you if you don't.
   */
  provider?: EthersProvider;

  /**
   * Whether to connect to the provider automatically on mount.
   */
  autoConnect?: boolean;

  /**
   * Array with chain names or objects with chain information to connect and force to switch.
   *
   * You can either pass a string with the name of the chain for default chains (one of: mainnet, ropsten, rinkeby, goerli, kovan) or an object with the chain information.
   */
  chains?: Chain[];
}

const AutoConnector: React.FC = () => {
  const {connect} = useConnect();

  useMount(() => {
    connect();
  });

  return null;
};

const EthooksEventListeners: React.FC = () => {
  const {connect} = useConnect();

  const onAccountChange = useCallback(() => {
    connect();
  }, [connect]);

  useAccountChange(onAccountChange);

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
  if (!provider) {
    console.warn(
      "WARNING: You didn't pass a provider to EthooksProvider. EthooksProvider will create a Web3 Provider for you, but you should pass your own provider.",
    );
  }

  const defaultProvider = useMemo(() => {
    if ('ethereum' in window) return new providers.Web3Provider(window.ethereum, 'any');
    return null;
  }, []);

  return (
    <EthersContext.Provider value={provider || defaultProvider}>
      <RootContextProvider
        initialState={{
          signer: undefined,
          address: undefined,
          ...initialState,
          chains: chains || initialState?.chains || [],
        }}
        {...props}
      >
        <BlockNumberProvider>{children}</BlockNumberProvider>

        <EthooksEventListeners />

        {autoConnect ? <AutoConnector /> : null}
      </RootContextProvider>
    </EthersContext.Provider>
  );
};

export default EthooksProvider;
