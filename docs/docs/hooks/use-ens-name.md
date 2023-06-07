---
id: use-ens-name
title: useEnsName
sidebar_position: 11
---

Returns the ENS name of the given address.

:::info
You can use the `useAccount` hook to get the ens name of the currently connected account.
Main purpose of this hook is to get the ens name of an address that is not the currently connected account.
:::

## Usage

```jsx
import {useEnsName} from '@incirlabs/react-ethooks';

export default function MyComponent() {
  const ensName = useEnsName('0x00');

  return (
    <div>
      <p>ENS Name: {ensName}</p>
    </div>
  );
}
```

## Parameters

### address

Address to get the ENS name of.

| Type   | Default  |
| ------ | -------- |
| string | Required |

## Returns

ENS name of the given address. Returns `null` if the address is not registered on ENS or there was an error.

| Type           |
| -------------- |
| string \| null |
