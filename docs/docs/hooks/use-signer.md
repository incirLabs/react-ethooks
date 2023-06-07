---
id: use-signer
title: useSigner
sidebar_position: 1
---

Returns the current [signer](https://docs.ethers.org/v5/api/signer).

## Usage

```jsx
import {useSigner} from '@incirlabs/react-ethooks';

export default function MyComponent() {
  const {signer} = useSigner();

  // Do something with the signer
}
```

## Returns

An object containing with the following properties:

### signer

The current signer. It will be `null` if the Provider didn't connect yet.

| Type                                                    |
| ------------------------------------------------------- |
| [Signer](https://docs.ethers.org/v5/api/signer) \| null |
