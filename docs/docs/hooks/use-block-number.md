---
id: use-block-number
title: useBlockNumber
sidebar_position: 17
---

Used to get the latest received block number.

## Usage

```jsx
import {useBlockNumber} from '@incirlabs/react-ethooks';

export default function MyComponent() {
  const blockNumber = useBlockNumber();

  return (
    <div>
      <p>Latest Received Block Number: {blockNumber}</p>
    </div>
  );
}
```

## Returns

Latest received block number.

| Type   |
| ------ |
| number |
