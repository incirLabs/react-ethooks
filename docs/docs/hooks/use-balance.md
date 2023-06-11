---
id: use-balance
title: useBalance
sidebar_position: 5
---

Returns the **balance** of the currently **connected account** or the **given address**.

:::info
If [`format`](#format) is **provided**, this hook will return the balance as a `string`. If **not provided**, it will return `BigNumber`.
:::

## Usage

```jsx
import {useAccount, useBalance} from '@incirlabs/react-ethooks';

export default function MyComponent() {
  const {address} = useAccount();
  const balance = useBalance(address, 'ether');

  return (
    <div>
      <p>Address: {address}</p>
      <p>Balance: {balance}</p>
    </div>
  );
}
```

## Parameters

### address

Address to get the balance of. If not given, currently connected account is used.

| Type                | Default   |
| ------------------- | --------- |
| string \| undefined | undefined |

### format

Unit name or decimal to format the balance with. If not given, no formatting is applied.

| Type                                           | Default   |
| ---------------------------------------------- | --------- |
| [FormatUnitsName](../types#units) \| undefined | undefined |

## Returns

If the [`address`](#address) is **provided**, the balance of the given address.
If **not provided** or is **undefined**, the balance of the currently connected account.

If [`format`](#format) is **provided**, the balance is a `string`.
If **not provided**, the balance is a `BigNumber`.

| Type                                                               |
| ------------------------------------------------------------------ |
| _[Format](#format) extends undefined_ ? **BigNumber** : **string** |
