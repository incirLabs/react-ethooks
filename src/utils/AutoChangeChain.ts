/* eslint no-underscore-dangle: "off" */

import {ethers, utils} from 'ethers';
import {Chain, ChainObject, DefaultChains} from '../types';

const AutoChangeChain = async (provider: ethers.providers.Web3Provider, chains?: Chain[]) => {
  await provider._networkPromise;

  if (!provider.network.chainId || !Array.isArray(chains) || chains.length === 0) return;

  const providerNetwork = utils.hexValue(provider.network.chainId);

  const foundIndex = chains.findIndex(
    (chain) =>
      (typeof chain === 'object' && utils.hexValue(chain.chainId) === providerNetwork) ||
      (typeof chain === 'string' && utils.hexValue(DefaultChains[chain]) === providerNetwork),
  );

  if (foundIndex === -1) {
    try {
      try {
        // Try to switch
        await provider.send(
          'wallet_switchEthereumChain',
          chains.map((chain) => ({
            chainId: utils.hexValue(
              typeof chain === 'string' ? DefaultChains[chain] : chain.chainId,
            ),
          })),
        );
      } catch (_) {
        // Try to add if switch failed
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
    } catch (_) {
      // Don't do anything if switch and add failed
    }
  }
};

export default AutoChangeChain;
