This hook takes 3 inputs; contractAddress as a string, contractInterface as ethers.ContractInterface, withSigner if use Signer or Provider(default is false, without Signer) as boolean.

Returns **contract** as [Contract](https://github.com/ethers-io/ethers.js/blob/master/packages/contracts/src.ts/index.ts#L1140) Class from [ethers](https://docs.ethers.io/v5/api/contract/contract/#Contract).

```jsx
import {useContract} from '@incirlabs/react-ethooks';
import {contractAddress, contractABI} from 'somewhere';

const contract = useContract(contractAddress, contractABI);
```
