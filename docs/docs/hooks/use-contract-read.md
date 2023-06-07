---
id: use-contract-read
title: useContractRead
sidebar_position: 8
---

Returns a function to execute a view function on a contract.

## Usage

```jsx
import {useContract, useContractRead} from '@incirlabs/react-ethooks';

export default function MyComponent() {
  const MyContract = useContract('0x00', MyContractABI);
  const readBalanceOf = useContractRead(MyContract, 'balanceOf');

  const onSomeAction = async () => {
    const result = await readBalanceOf(['0x123']);

    if (result.status) {
      console.log(`Balance: ${result.data}`);
    } else {
      console.log(`Error: ${result.error.message}`);
    }
  };
}
```

## Parameters

### contract

Contract instance returned from [`useContract`](./use-contract) or [`ethers.Contract`](https://docs.ethers.org/v5/api/contract/contract/)

| Type                                                                   | Default  |
| ---------------------------------------------------------------------- | -------- |
| [`ethers.Contract`](https://docs.ethers.org/v5/api/contract/contract/) | Required |

### method

View Function name to call on the contract instance.

| Type   | Default  |
| ------ | -------- |
| string | Required |

### defaultArgs

Default arguments to pass to the view function.

| Type                 | Default   |
| -------------------- | --------- |
| (string \| number)[] | undefined |

## Returns

Function to execute the view function on the contract instance.

| Type                                                                                     |
| ---------------------------------------------------------------------------------------- |
| (args: (string \| number)[]) => Promise&lt;[ContractResult](../types#contractresult)&gt; |
