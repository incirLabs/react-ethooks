export type EthersProvider = import('ethers').providers.Web3Provider;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ContractResult = {status: false; error: Error} | {status: true; data: any};

export type Args = Array<string | number>;

export interface Chain {
  chainId: number;
  rpcUrls: string[];
  chainName: string;
  nativeCurrency: {
    name: string;
    symbol: string;
    decimals: 0 | 18;
  };
  blockExplorerUrls: string[];
}
