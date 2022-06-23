In order to read contract function's outputs, you can use this hook. The hook takes three parameters; **contract** object from [useContract()](./useContract.md) or [ethers.Contract](https://docs.ethers.io/v5/api/contract/contract/#Contract), contract **method** as string and parameters of the contract function as array.

It returns output of contract method as a promise.

```jsx
import {useContract} from '@incirlabs/react-ethooks';
import {contractAddress, contractABI} from 'somewhere';

const address = 0xf10800ebedb078cfa60d2ede8f246de866e3de43;

const contract = useContract(contractAddress, contractABI);
const read = useContractRead(contract, 'balanceOf', [address]);
```
