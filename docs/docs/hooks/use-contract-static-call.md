---
id: use-contract-static-call
title: useContractStaticCall
sidebar_position: 10
---

Returns a function to static call a function on a contract.

## Usage

```jsx
import {useContract, useContractStaticCall} from '@incirlabs/react-ethooks';

export default function MyComponent() {
  const MyContract = useContract('0x00', MyContractABI);
  const staticTransfer = useContractStaticCall(MyContract, 'transfer');

  const onSomeAction = async () => {
    const result = await staticTransfer(['0x123', 1234, {from: '0x456'}]);

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

Function name to call on the contract instance.

| Type   | Default  |
| ------ | -------- |
| string | Required |

### defaultArgs

Default arguments to pass to the function.

| Type                 | Default   |
| -------------------- | --------- |
| (string \| number)[] | undefined |

## Returns

Function to execute the static call on the contract instance.

| Type                                                                                     |
| ---------------------------------------------------------------------------------------- |
| (args: (string \| number)[]) => Promise&lt;[ContractResult](../types#contractresult)&gt; |
