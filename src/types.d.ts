type EthersProvider = import('ethers').providers.Web3Provider;

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
