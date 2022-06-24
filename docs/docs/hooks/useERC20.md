You can use this hook to run functions of a ERC20 token. It will automatically create contract and pass in the ERC20 abi.

```jsx
const {getBalance, transfer} = useERC20('0xContractAddress');

const tokenBalance = await getBalance('0xAddress');

const transfer = await transfer('0xAddress', 100);
```

These are the full list of functions in the useERC20 hook:

- [getBalance(address)](#getbalance)
- [getAllowance(owner, spender)](#getallowance)
- [getTotalSupply()](#gettotalsupply)
- [getSymbol()](#getsymbol)
- [approve(spender, amount)](#approve)
- [transfer(recipient, amount)](#transfer)

## Returns

It returns an object with th following:

### contract

[useContract](./useContract) instance

### getBalance

Returns the balance of the **address**.

**address**: Address to get the balance of.

### getAllowance

Returns the allowance of the **owner** and **spender**

**owner**: Owner address

**spender**: Spender address

### getTotalSupply

Returns the total supply of the token

### getSymbol

Returns the symbol of the token

### approve

Approves the **spender** to spend the **amount** of tokens

**spender**: Spender address

**amount**: Amount of tokens to approve

### transfer

Transfers the **amount** of tokens to the **recipient**

**amount**: Amount of tokens to approve

**recipient**: Recipient address
