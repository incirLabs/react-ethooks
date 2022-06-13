import {useEffect, useState} from 'react';
import {providers} from 'ethers';
import {useProvider} from '../contexts';

/**
 * Returns the current network.
 * You can also pass a callback to be run when the network changes.
 *
 * NOTE: You should pass any as the chain argument to provider to be able to use this hook.
 * https://github.com/ethers-io/ethers.js/issues/866
 */
const useNetwork = (
  /**
   * The callback to run when the network changes.
   */
  onNetworkChange?: (
    /**
     * The new network.
     */
    newNetwork: providers.Network,

    /**
     * The old network. This will return null when a Provider makes its initial connection.
     */
    oldNetwork: providers.Network | null,
  ) => void,
) => {
  const provider = useProvider();
  const [currentNetwork, setCurrentNetwork] = useState<providers.Network | null>(null);

  useEffect(() => {
    const listener = (newNetwork: providers.Network, oldNetwork: providers.Network) => {
      setCurrentNetwork(newNetwork);
      onNetworkChange?.(newNetwork, oldNetwork);
    };

    provider.on('network', listener);

    return () => {
      provider.off('network', listener);
    };
  });

  return currentNetwork;
};

export default useNetwork;
