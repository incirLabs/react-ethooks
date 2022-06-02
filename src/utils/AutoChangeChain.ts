/* eslint no-underscore-dangle: "off" */

import {ethers} from 'ethers';
import {hexValue} from 'ethers/lib/utils';

const AutoChangeChain = async (provider: ethers.providers.Web3Provider, chains?: Chain[]) => {
  await provider._networkPromise;

  if (Array.isArray(chains) && chains.length > 0) {
    const foundIndex = chains.findIndex((chain) => chain.chainId === provider.network.chainId);

    if (foundIndex === -1) {
      if (chains.find((chain) => chain.chainId === 1)) {
        provider.send('wallet_switchEthereumChain', [{chainId: '0x1'}]);

        return;
      }

      provider.send(
        'wallet_addEthereumChain',
        chains
          .filter((chain) => chain.chainId !== 1)
          .map((chain) => ({
            ...chain,
            chainId: hexValue(chain.chainId),
          })),
      );
    }
  }
};

export default AutoChangeChain;