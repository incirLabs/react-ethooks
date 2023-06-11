---
id: use-ens-text
title: useEnsText
sidebar_position: 14
---

Returns the stored EIP-634 text (or any other non-standard text) entry for the given text key.

## Usage

```jsx
import {useEnsResolver, useEnsText} from '@incirlabs/react-ethooks';

export default function MyComponent() {
  const resolver = useEnsResolver('ugureren.eth');
  const github = useEnsText(resolver, 'com.github');

  return (
    <div>
      <p>Github of Ugur Eren: {github}</p>
    </div>
  );
}
```

## Parameters

### resolver

[EnsResolver](./use-ens-resolver) instance to get the text entry from.

| Type                              | Default  |
| --------------------------------- | -------- |
| [EnsResolver](./use-ens-resolver) | Required |

### textKey

EIP-634 or any other non-standard text key to get the text entry for.

| Type                                                            | Default  |
| --------------------------------------------------------------- | -------- |
| string \| [EIP-634 key](https://eips.ethereum.org/EIPS/eip-634) | Required |

## Returns

Text entry for the given text key. Returns `null` if the ENS name is not registered or there was an error.

| Type           |
| -------------- |
| string \| null |
