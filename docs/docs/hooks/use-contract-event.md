---
id: use-contract-event
title: useContractEvent
sidebar_position: 8
---

Listens to events emitted by a contract.

## Usage

This example listens to the `Transfer` event emitted by `MyContract`, an ERC20 contract, and logs the event arguments.

```jsx
import {useAccount, useContract, useContractEvent, ERC20ABI} from '@incirlabs/react-ethooks';

export default function MyComponent() {
  const {address} = useAccount();
  const MyContract = useContract('0x00', ERC20ABI);

  const MyTransfersFilter = MyContract.filters.Transfer(address);

  useContractEvent(MyContract, MyTransfersFilter, (...args) => {
    console.log(args);
  });
}
```

## Parameters

### contract

Contract instance returned from [`useContract`](./use-contract) or [`ethers.Contract`](https://docs.ethers.org/v5/api/contract/contract/)

| Type                                                                   | Default  |
| ---------------------------------------------------------------------- | -------- |
| [`ethers.Contract`](https://docs.ethers.org/v5/api/contract/contract/) | Required |

### event

Event name or [event filter](https://docs.ethers.org/v5/concepts/events/#events--filters) to listen to.

| Type                                                                                        | Default  |
| ------------------------------------------------------------------------------------------- | -------- |
| string \| [ethers.EventFilter](https://docs.ethers.org/v5/concepts/events/#events--filters) | Required |

### listener

Callback to call when the event is emitted.

| Type                                | Default  |
| ----------------------------------- | -------- |
| (...args: Array&lt;any&gt;) => void | Required |
