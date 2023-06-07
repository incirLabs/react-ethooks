---
id: types
title: Types
sidebar_position: 4
---

Types used in React Ethooks.

## JsonRpcError

```ts
interface JsonRpcError extends Error {
  code: number;
  message: string;
  data?: unknown;
  stack?: string;
}
```

## ContractResult

```ts
type ContractResult = {status: false; error: JsonRpcError} | {status: true; data: any};
```

## Chain

```ts
type ChainObject = {
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

type DefaultChainNames = 'mainnet' | 'ropsten' | 'rinkeby' | 'goerli' | 'kovan';

type Chain = ChainObject | DefaultChainNames;
```

## Units

```ts
type UnitNames = 'wei' | 'kwei' | 'mwei' | 'gwei' | 'szabo' | 'finney' | 'ether';
type FormatUnitsName = number | UnitNames;
```
