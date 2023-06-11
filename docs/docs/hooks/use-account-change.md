---
id: use-account-change
title: useAccountChange
sidebar_position: 4
---

Hook to listen for the accounts change event.

:::info
Provider is already handling the accounts change event and update the necessary state values.
This hook is for cases where you want to listen for the account change event and do something else.
For example, you may want to show a notification when the account changes.
:::

## Usage

```jsx
import {useAccountChange} from '@incirlabs/react-ethooks';

export default function MyComponent() {
  useAccountChange((accounts) => {
    alert(`Hey! Your accounts just changed: ${accounts.join(', ')}`);
  });
}
```

## Parameters

### callback

A callback function that will be called when the accounts changes with the new accounts as the first parameter.

| Type                         |
| ---------------------------- |
| (accounts: string[]) => void |
