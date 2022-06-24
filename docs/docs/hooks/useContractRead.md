You can use this hook to run the view functions of the contract. Takes three parameters; **contract** instance from [useContract hook](./useContract), **method name**, and optionally default parameters of the contract function as array.

```js
const contract = useContract('0xContractAddress', ContractABI);

// highlight-next-line
const readBalanceOf = useContractRead(contract, 'balanceOf');

const onClick = async () => {
  // highlight-next-line
  const response = await readBalanceOf(['0xAddress']);

  if (response.status) {
    console.log(response.data);
  } else {
    console.error(response.error);
  }
};
```

Optionally, you can pass the default parameters of the contract function as array in the hook.

```js
const readBalanceOf = useContractRead(contract, 'balanceOf', ['0xAddress']);

const response = await readBalanceOf();
```
