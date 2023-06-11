---
id: use-provider
title: useProvider
sidebar_position: 2
---

Returns the [provider passed to the EthooksProvider](../components/ethooks-provider#provider).

## Usage

```jsx
import {useProvider} from '@incirlabs/react-ethooks';

export default function MyComponent() {
  const provider = useProvider();

  // Do something with the provider
}
```

## Returns

[Provider](https://docs.ethers.org/v5/api/providers/provider/) instance.
