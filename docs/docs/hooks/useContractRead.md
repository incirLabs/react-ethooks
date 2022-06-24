You can use this hook to run the view functions of the contract. Takes three parameters; **contract** instance from [useContract hook](./useContract), **method name**, and optionally default parameters of the contract function as array.

In this example, we are running the `balanceOf` function of an ERC20 token.

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

You can still pass options to the contract function. In this case, the options sent with the `readBalanceOf` function will be passed to the contract function.

```js
const readBalanceOf = useContractRead(contract, 'balanceOf', ['0xAddress']);

// These options will be passed to the contract function
const response = await readBalanceOf(['0xAnotherAddress']);
```
