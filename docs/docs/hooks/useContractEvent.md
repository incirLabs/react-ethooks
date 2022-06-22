The hook takes 3 inputs; **contract** as [Contract](https://github.com/ethers-io/ethers.js/blob/master/packages/contracts/src.ts/index.ts#L1140) Class from [ethers](https://docs.ethers.io/v5/api/contract/contract/#Contract), **event** as string or [EventFilter](https://github.com/ethers-io/ethers.js/blob/master/packages/contracts/src.ts/index.ts#L65) from [ethers](https://docs.ethers.io/v5/concepts/events/#events--filters) and **listener** as [Listener](https://github.com/ethers-io/ethers.js/blob/master/packages/contracts/src.ts/index.ts#L1058) from [ethers](https://docs.ethers.io/v5/api/contract/contract/#Contract-on). **listener** takes parameters of contract event.

Returns event of contract.

```jsx
import {useContractEvent} from '@incirlabs/react-ethooks';
import {contractAddress, contractABI} from 'somewhere';

const contract = useContract(contractAddress, contractABI);
const event = useContractEvent(contract, 'Deposited', (...args));
```
