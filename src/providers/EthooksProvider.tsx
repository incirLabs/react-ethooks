import {providers} from 'ethers';
import {EthersContext, RootContextProvider} from '../contexts';
import {useMount} from '../hooks/internal';
import useConenct from '../hooks/useConnect';
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
  const {connect} = useConenct();

  useMount(() => {
    connect();
  });

  return null;
};

export const EthooksProvider: React.FC<EthooksProviderProps> = ({
  children,
  chains,
  initialState,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  provider = new providers.Web3Provider((window as any).ethereum, 'any'),
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
