---
id: use-contract
title: useContract
sidebar_position: 6
---

Returns an [`ethers.Contract`](https://docs.ethers.org/v5/api/contract/contract/) instance.

:::info
Only difference from using the `ethers.Contract` is that this hook will automatically inject `provider` or `signer`.
So, instead of using this hook, you can also choose to use `ethers.Contract` directly and pass the `provider` or `signer` yourself.
:::

## Usage

```jsx
import {useContract} from '@incirlabs/react-ethooks';

export default function MyComponent() {
  const MyContract = useContract('0x00', MyContractABI);

  // Do something with MyContract
}
```

## Parameters

### contractAddress

Address of the contract to interact with.

| Type   | Default  |
| ------ | -------- |
| string | Required |

### contractInterface

[Interface of the contract (ABI)](https://docs.ethers.org/v5/api/utils/abi/formats/) to interact with.

| Type                                                                          | Default  |
| ----------------------------------------------------------------------------- | -------- |
| [ethers.ContractInterface](https://docs.ethers.org/v5/api/utils/abi/formats/) | Required |

### withSigner

Whether to inject `signer` or `provider` into the contract instance.

If `true`, `signer` will be injected. If `false`, `provider` will be injected.

If you do not inject `signer`, you can not send transactions with it, but you can still call `view` functions.

**However, this is not the case if you pass this contract instance to [useContractWrite](use-contract-write) hook, since it will automatically inject `signer` in any case.**

| Type    | Default |
| ------- | ------- |
| boolean | false   |

## Returns

[`ethers.Contract`](https://docs.ethers.org/v5/api/contract/contract/) instance.
