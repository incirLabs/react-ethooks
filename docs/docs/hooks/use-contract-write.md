---
id: use-contract-write
title: useContractWrite
sidebar_position: 9
---

Returns a function to execute a state mutating function on a contract.

## Usage

```jsx
import {useContract, useContractWrite} from '@incirlabs/react-ethooks';

export default function MyComponent() {
  const MyContract = useContract('0x00', MyContractABI);
  const transfer = useContractWrite(MyContract, 'transfer');

  const onSomeAction = async () => {
    const result = await transfer(['0xfrom', '0xto', '1000']);

    if (result.status) {
      console.log(`Result: ${result.data}`);
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

State Mutating Function name to call on the contract instance.

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
