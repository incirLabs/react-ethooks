---
id: use-network
title: useNetwork
sidebar_position: 17
---

Returns the current network. You can also pass a callback to be run when the network changes.

:::caution
You should pass `any` as the chain argument to `ethers provider` (not the EthooksProvider) to be able to use this hook.

https://github.com/ethers-io/ethers.js/issues/866
:::

## Usage

```jsx
import {useNetwork} from '@incirlabs/react-ethooks';

export default function MyComponent() {
  const network = useNetwork((newNetwork, oldNetwork) => console.log(newNetwork, oldNetwork));

  return (
    <div>
      <p>Current Network: {useNetwork?.name}</p>
    </div>
  );
}
```

## Parameters

### onNetworkChange

The callback to run when the network changes.

Note: `oldNetwork` will return null when a Provider makes its initial connection since there is no previous network.

| Type                                                                                                                                                                                                                               | Default   |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| (newNetwork: [`ethers.providers.Network`](https://docs.ethers.org/v5/api/providers/types/#providers-Network), oldNetwork: [`ethers.providers.Network`](https://docs.ethers.org/v5/api/providers/types/#providers-Network) \| null) | undefined |

## Returns

The current network object. It will be `null` if the Provider didn't make its initial connection yet.

| Type                                                                                                    |
| ------------------------------------------------------------------------------------------------------- |
| [`ethers.providers.Network`](https://docs.ethers.org/v5/api/providers/types/#providers-Network) \| null |
