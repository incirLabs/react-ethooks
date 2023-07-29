import type {BigNumberish, providers} from 'ethers';

declare global {
  interface Window {
    ethereum: import('ethers').providers.ExternalProvider;
  }
}

export type LooseAutoComplete<T extends string> = T | Omit<string, T>;

export type EthersProvider = import('ethers').providers.Web3Provider;

export type ExternalProviderWithEvents = import('ethers').providers.ExternalProvider & {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  on?: (event: string, callback: (...args: any[]) => void) => void;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  off?: (event: string, callback: (...args: any[]) => void) => void;
};

export interface JsonRpcError extends Error {
  code: number;
  message: string;
  data?: unknown;
  stack?: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ContractResult = {status: false; error: JsonRpcError} | {status: true; data: any};

export type Args = [] | [...Array<BigNumberish>, BigNumberish | providers.TransactionRequest];

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

export type UnitNames = 'wei' | 'kwei' | 'mwei' | 'gwei' | 'szabo' | 'finney' | 'ether';
export type FormatUnitsName = number | UnitNames;

export type EIP634GlobalKeys =
  | 'avatar'
  | 'description'
  | 'display'
  | 'email'
  | 'keywords'
  | 'mail'
  | 'notice'
  | 'location'
  | 'phone'
  | 'url';

export type EIP634ServiceKeys =
  | 'com.github'
  | 'com.peepeth'
  | 'com.linkedin'
  | 'com.twitter'
  | 'io.keybase'
  | 'org.telegram';

export type EIP634Keys = LooseAutoComplete<EIP634GlobalKeys | EIP634ServiceKeys>;
