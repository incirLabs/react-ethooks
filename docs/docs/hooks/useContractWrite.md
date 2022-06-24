You can use this hook to run the state mutating functions of the contract. Takes three parameters; **contract** instance from [useContract hook](./useContract), **method name**, and optionally default parameters of the contract function as array.

In this example, we are running the `transfer` function of an ERC20 token.

```js
const contract = useContract('0xContractAddress', ContractABI);

// highlight-next-line
const writeTransfer = useContractWrite(contract, 'transfer');

const onClick = async () => {
  // highlight-next-line
  const response = await writeTransfer(['0xAddress', 100]);

  if (response.status) {
    console.log(response.data);
  } else {
    console.error(response.error);
  }
};
```

Optionally, you can pass the default parameters of the contract function as array in the hook.

```js
const writeTransfer = useContractWrite(contract, 'transfer', ['0xAddress', 100]);

const response = await writeTransfer();
```

You can still pass options to the contract function. In this case, the options sent with the `writeTransfer` function will be passed to the contract function.

```js
const writeTransfer = useContractWrite(contract, 'transfer', ['0xAddress', 100]);

// These options will be passed to the contract function
const response = await writeTransfer(['0xAnotherAddress', 200]);
```
