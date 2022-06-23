It takes three parameters; **contract** object from [useContract()](./useContract.md) or [ethers.Contract](https://docs.ethers.io/v5/api/contract/contract/#Contract), contract **method** as string and parameters of the contract function as array.

It returns [TransactionResponse](https://docs.ethers.io/v5/api/providers/types/#providers-TransactionResponse) for the transaction after it is sent to the network. [This](https://docs.ethers.io/v5/api/contract/contract/#Contract--write) requires the Contract has a signer.

```jsx
import {useContract} from '@incirlabs/react-ethooks';
import {contractAddress, contractABI} from 'somewhere';

const contract = useContract(contractAddress, contractABI);
const write = useContractWrite(contract, 'transfer', [recipient, amount]);
```
