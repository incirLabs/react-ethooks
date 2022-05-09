type EthersProvider = import('ethers').providers.Web3Provider;

type ContractResult = {status: false; error: Error} | {status: true; data: any};

type Args = Array<string | number>;

interface Chain {
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
