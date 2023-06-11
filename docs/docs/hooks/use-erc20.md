---
id: use-erc20
title: useERC20
sidebar_position: 15
---

Returns a ERC20 Contract instance and a bunch of other useful functions from contract address.

## Usage

```jsx
import {useERC20} from '@incirlabs/react-ethooks';

export default function MyComponent() {
  const {
    // Contract instance
    contract,

    // Other useful functions
    getBalance,
    getAllowance,
    getTotalSupply,
    getSymbol,

    approve,
    transfer,
  } = useERC20('0x00');
}
```

## Parameters

### address

ERC20 contract address.

| Type   | Default  |
| ------ | -------- |
| string | Required |

## Returns

An object with the following properties:

### contract

Contract instance.

| Type                                                                   |
| ---------------------------------------------------------------------- |
| [`ethers.Contract`](https://docs.ethers.org/v5/api/contract/contract/) |

### getBalance

Get the balance of the `address`

| Type                                                                          |
| ----------------------------------------------------------------------------- |
| (address: string) => Promise&lt;[ContractResult](../types#contractresult)&gt; |

### getAllowance

Get the allowance of the `owner` and `spender`

| Type                                                                                         |
| -------------------------------------------------------------------------------------------- |
| (owner: string, spender: string) => Promise&lt;[ContractResult](../types#contractresult)&gt; |

### getTotalSupply

Get the total supply of the token

| Type                                                           |
| -------------------------------------------------------------- |
| () => Promise&lt;[ContractResult](../types#contractresult)&gt; |

### getSymbol

Get the symbol of the token

| Type                                                           |
| -------------------------------------------------------------- |
| () => Promise&lt;[ContractResult](../types#contractresult)&gt; |

### approve

Approve the `spender` to spend the `amount` of tokens

| Type                                                                                                    |
| ------------------------------------------------------------------------------------------------------- |
| (spender: string, amount: number \| string) => Promise&lt;[ContractResult](../types#contractresult)&gt; |

### transfer

Transfer the `amount` of tokens to the `recipient`

| Type                                                                                                      |
| --------------------------------------------------------------------------------------------------------- |
| (recipient: string, amount: number \| string) => Promise&lt;[ContractResult](../types#contractresult)&gt; |
