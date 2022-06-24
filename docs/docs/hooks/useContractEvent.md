The hook takes 3 inputs; **contract** from [useContract hook](./useContract), **event** as string or [EventFilter](https://docs.ethers.io/v5/concepts/events/#events--filters) and **listener** callback. **listener** parameters are the inputs of the contract event and the transaction information.

```jsx
const contract = useContract('0xContractAddress', ContractABI);

useContractEvent(contract, 'EventName', (...args) => console.log(...args));
```
