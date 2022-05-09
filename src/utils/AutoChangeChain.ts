/* eslint no-underscore-dangle: "off" */

import {ethers, BigNumber} from 'ethers';

const AutoChangeChain = async (provider: ethers.providers.Web3Provider, chains?: Chain[]) => {
  await provider._networkPromise;

  if (Array.isArray(chains) && chains.length > 0) {
    const foundIndex = chains.findIndex((chain) => chain.chainId === provider.network.chainId);

    if (foundIndex === -1) {
      provider.send(
        'wallet_addEthereumChain',
        chains.map((chain) => ({
          ...chain,
          chainId: BigNumber.from(chain.chainId).toHexString(),
        })),
      );
    }
  }
};

export default AutoChangeChain;
