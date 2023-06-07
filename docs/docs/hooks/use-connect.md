---
id: use-connect
title: useConnect
sidebar_position: 5
---

Used to connect to the wallet.

## Usage

```jsx
import {useAccount} from '@incirlabs/react-ethooks';

export default function MyComponent() {
  const {address} = useAccount();
  const {connect, loading, error} = useConnect();

  const onConnectButtonPress = async () => {
    const connectedAddress = await connect((err) => {
      alert(`Couldn't connect: ${err.message}`);
    });

    alert(`Connected to ${connectedAddress}`);
  };

  return (
    <div>
      <p>Address: {address || 'Not Connected'}</p>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}

      <button onClick={onConnectButtonPress}>Connect</button>
    </div>
  );
}
```

## Returns

An object with the following properties:

### connect

A function that can be called to connect to the wallet.

| Type                                                                          |
| ----------------------------------------------------------------------------- |
| (onError?: ((error: Error) => unknown) \| undefined) => Promise&lt;string&gt; |

### loading

Whether the connection is in progress.

| Type    |
| ------- |
| boolean |

### error

Error object if there were any errors.

| Type               |
| ------------------ |
| Error \| undefined |
