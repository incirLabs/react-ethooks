Returns an object with **connect**, **loading** and **error**.

**connect** is a function to trigger the connection to a wallet.

**loading** is a boolean to check whether the connection is in progress.

**error** is the last received Error object.

```jsx
import {useConnect} from '@incirlabs/react-ethooks';

const {connect, loading, error} = useConnect();

const address = await connect();
```

You can also send a callback function to receive errors in connect function:

```jsx
const address = await connect((error) => console.log(error));
```
