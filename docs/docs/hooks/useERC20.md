In order to use ERC20 methods you can use this hook. It takes token's contract address as a parameter.

```jsx
import {useERC20} from '@incirlabs/react-ethooks';

const token = useERC20('0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2');
const tokenBalance = await token.getBalance('0xF10800EBEDB078CFA60d2ede8f246dE866E3de43');

const recipient = '0xF10800EBEDB078CFA60d2ede8f246dE866E3de43';
const amount = 1234567890987654321;

const transfer = await token.transfer(recipient, amount);
```

You can see full list of methods, all of them return ContractResult as a promise:

- token.getBalance(address)
- token.getAllowance(owner, spender)
- token.getTotalSupply()
- token.getSymbol
- token.approve(spender, amount)
- token.transfer(recipient, amount)
