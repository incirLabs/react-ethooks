---
id: use-erc20-balance
title: useERC20Balance
sidebar_position: 15
---

Returns the **balance** of the currently **connected account** or the **given address** for the ERC20 token.

:::info
If [`format`](#format) is **provided**, this hook will return the balance as a `string`. If **not provided**, it will return `BigNumber`.
:::

## Usage

```jsx
import {useERC20, useERC20Balance} from '@incirlabs/react-ethooks';

export default function MyComponent() {
  const erc20Token = useERC20();
  const balance = useERC20Balance(erc20Token.contract, undefined, 'ether');

  return (
    <div>
      <p>Balance: {balance}</p>
    </div>
  );
}
```

## Parameters

### contract

Contract instance for the ERC20 token returned from [`useContract`](./use-contract) or [`useERC20`](./use-erc20) or [`ethers.Contract`](https://docs.ethers.org/v5/api/contract/contract/)

| Type                                                                   | Default  |
| ---------------------------------------------------------------------- | -------- |
| [`ethers.Contract`](https://docs.ethers.org/v5/api/contract/contract/) | Required |

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
