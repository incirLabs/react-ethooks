---
id: use-ens-address
title: useEnsAddress
sidebar_position: 11
---

Returns the address of the given ENS name.

## Usage

```jsx
import {useEnsAddress} from '@incirlabs/react-ethooks';

export default function MyComponent() {
  const address = useEnsAddress('ugureren.eth');

  return (
    <div>
      <p>Address: {address}</p>
    </div>
  );
}
```

## Parameters

### name

ENS name to get the address of.

| Type   | Default  |
| ------ | -------- |
| string | Required |

## Returns

Address of the given ENS name. Returns `null` if the ENS name is not registered or there was an error.

| Type           |
| -------------- |
| string \| null |
