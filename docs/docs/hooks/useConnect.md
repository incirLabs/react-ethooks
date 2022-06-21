Returns **connect** as promise, **loading** as boolean and **error**.

```jsx
import {useConnect} from '@incirlabs/react-ethooks';

const {connect, loading, error} = useConnect();
```

Also, **connect** returns the connected address:

```jsx
const address = await connect();
```

Or, you can write callback function to **connect** for errors optionally:

```jsx
const address = await connect((error) => console.log(error));
```
