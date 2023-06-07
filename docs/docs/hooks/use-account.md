---
id: use-account
title: useAccount
sidebar_position: 2
---

Returns the `address` and `ensName` of the currently connected account

## Usage

```jsx
import {useAccount} from '@incirlabs/react-ethooks';

export default function MyComponent() {
  const {address, ensName} = useAccount();

  return (
    <div>
      <p>Address: {address}</p>
      <p>ENS Name: {ensName}</p>
    </div>
  );
}
```

## Returns

An object with the following properties:

### address

The `address` of the currently connected account. If no account is connected, it will be `undefined`.

| Type                |
| ------------------- |
| string \| undefined |

### ensName

The `ens name` (e.g. ugureren.eth) of the currently connected account. If no account is connected, it will be `undefined`.

| Type                |
| ------------------- |
| string \| undefined |
