export type EthersProvider = import('ethers').providers.Web3Provider;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ContractResult = {status: false; error: Error} | {status: true; data: any};

export type Args = Array<string | number>;

export type ChainObject = {
  chainId: number;
  rpcUrls: string[];
  chainName: string;
  nativeCurrency: {
    name: string;
    symbol: string;
    decimals: 0 | 18;
  };
  blockExplorerUrls: string[];
};

export type DefaultChainNames = 'mainnet' | 'ropsten' | 'rinkeby' | 'goerli' | 'kovan';

export const DefaultChains: Record<DefaultChainNames, number> = {
  mainnet: 1,
  ropsten: 3,
  rinkeby: 4,
  goerli: 5,
  kovan: 42,
};

export type Chain = ChainObject | DefaultChainNames;
