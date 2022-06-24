You can use this hook to create a contract instance. You will most likely not use this hook on it's own. It's intended to be used with other hooks like [useContractWrite](./useContractWrite.md) or [useContractRead](./useContractRead.md).

Takes 3 parameters; **address of the contract**, [**contract abi**](https://docs.ethers.io/v5/api/utils/abi/) and **withSigner**.

Returns [Contract Class](https://docs.ethers.io/v5/api/contract/contract/#Contract) from ethers.

```js
const contract = useContract('0xContractAddress', ContractABI);
```

You can optionally pass a boolean as the third parameter to set whether to use the signer or the provider.

```js
const contract = useContract('0xContractAddress', ContractABI, true);
```
