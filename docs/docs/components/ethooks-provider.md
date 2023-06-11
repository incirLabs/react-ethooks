---
id: ethooks-provider
title: EthooksProvider
sidebar_position: 1
---

EthooksProvider is a React Context Provider that provides all the hooks and functions to interact with Ethereum.

It is required to wrap your root component with EthooksProvider so that all the hooks can access the provider.

:::caution
You should only wrap your root component with EthooksProvider once. If you wrap it multiple times or use more than once, it will cause unexpected behavior, such as different states for hooks.
:::

:::caution
You should pass `any` as the chain argument to `ethers provider` (not the EthooksProvider) to avoid unexpected behaviors when the network changes.
This is not a problem since EthooksProvider will handle the network changes and update the provider and state accordingly.
:::

## Usage

In this case, we are using `Web3Provider` from `ethers` library.

```jsx
import {EthooksProvider} from '@incirlabs/react-ethooks';
import {ethers} from 'ethers';
import {useMemo} from 'react';

export default function Main() {
  // NOTE: "any" is required as the chain argument to ethers provider.
  // https://github.com/ethers-io/ethers.js/issues/866
  // Since we are using EthooksProvider to handle network changes, this is not a problem.
  const provider = useMemo(() => new ethers.providers.Web3Provider(window.ethereum, 'any'), []);

  return (
    <EthooksProvider provider={provider} chains={['mainnet', 'goerli']} autoConnect>
      <App />
    </EthooksProvider>
  );
}
```

## Props

### provider

The `provider` is the provider that will be used to interact with Ethereum.

| Type   | Default  |
| ------ | -------- |
| string | Required |

### chains

The `chains` is an array of [chain names or `ChainObject`](../types#chain) that will be allowed to connect to.

If `chains` is not provided, it will allow all chains.

| Type                           | Default   |
| ------------------------------ | --------- |
| Array<[Chain](../types#chain)> | undefined |

### autoConnect

If it is `true` it will automatically tries to connect to the wallet on mount.

| Type    | Default |
| ------- | ------- |
| boolean | false   |
