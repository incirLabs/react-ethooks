/* eslint no-underscore-dangle: "off" */

import {ethers, utils} from 'ethers';
import {Chain, ChainObject, DefaultChains, DefaultChainNames} from '../types';

const AutoChangeChain = async (provider: ethers.providers.Web3Provider, chains?: Chain[]) => {
  await provider._networkPromise;

  if (Array.isArray(chains) && chains.length > 0) {
    const foundIndex = chains.findIndex(
      (chain) =>
        (typeof chain === 'object' && chain.chainId === provider.network.chainId) ||
        (typeof chain === 'string' && DefaultChains[chain] === provider.network.chainId),
    );

    if (foundIndex === -1) {
      const defaultChains = chains.filter(
        (chain): chain is DefaultChainNames => typeof chain === 'string',
      );

      if (defaultChains.length > 0) {
        await provider.send(
          'wallet_switchEthereumChain',
          defaultChains.map((chain) => ({chainId: utils.hexValue(DefaultChains[chain])})),
        );
        return;
      }

      await provider.send(
        'wallet_addEthereumChain',
        chains
          .filter((chain): chain is ChainObject => typeof chain === 'object')
          .map((chain) => ({
            ...chain,
            chainId: utils.hexValue(chain.chainId),
          })),
      );
    }
  }
};

export default AutoChangeChain;
