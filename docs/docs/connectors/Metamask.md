You can use [useConnect](../hooks/useConnect.md) and [useAccount](../hooks/useAccount) hook to connect Metamask.

## Usage

```jsx
import {useConnect, useAccount} from '@incirlabs/react-ethooks';

const {connect, loading, error} = useConnect();
const {address} = useAccount();
```
