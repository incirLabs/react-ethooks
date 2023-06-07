---
id: use-ens-resolver
title: useEnsResolver
sidebar_position: 12
---

Returns an [EnsResolver](https://docs.ethers.org/v5/api/providers/provider/#EnsResolver) instance which can be used to further inquire about specific entries for an ENS name.

## Usage

```jsx
import {useEnsResolver} from '@incirlabs/react-ethooks';

export default function MyComponent() {
  const resolver = useEnsResolver('ugureren.eth');

  const onSomeAction = async () => {
    // Resolver is null if the ENS name is not registered or if there was an error.
    if (!resolver) return;

    const avatar = await resolver.getAvatar();

    console.log(avatar);
  };
}
```

## Parameters

### name

ENS name to get the resolver for.

| Type   | Default  |
| ------ | -------- |
| string | Required |

## Returns

[EnsResolver](https://docs.ethers.org/v5/api/providers/provider/#EnsResolver) instance. Returns `null` if the ENS name is not registered or there was an error.

| Type                                                                                  |
| ------------------------------------------------------------------------------------- |
| [EnsResolver](https://docs.ethers.org/v5/api/providers/provider/#EnsResolver) \| null |
