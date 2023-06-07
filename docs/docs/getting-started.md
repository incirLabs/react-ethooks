---
id: getting-started
title: Getting Started
sidebar_position: 1
slug: /
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

React Ethooks can be installed to any React project using any npm package manager.

:::caution
React Ethooks depends on ethers library. So you must also install ethers.js library.
:::

# Installation

<Tabs>
  <TabItem value="yarn">

```bash
yarn add @incirlabs/react-ethooks ethers
```

  </TabItem>

  <TabItem value="npm">

```bash
npm install --save @incirlabs/react-ethooks ethers
```

  </TabItem>
</Tabs>

# Quick Start

Wrap your root component in `EthooksProvider` and pass your provider.

In this case, we are using `Web3Provider` from `ethers` library.

```jsx
import {EthooksProvider} from '@incirlabs/react-ethooks';
import {ethers} from 'ethers';
import {useMemo} from 'react';

export default function Main() {
  // NOTE: "any" is required as the chain argument to ethers provider.
  // https://github.com/ethers-io/ethers.js/issues/866
  // Since we are using EthooksProvider to handle network changes, this is not a problem.
  const provider = useMemo(() => new ethers.providers.Web3Provider(window.ethereum, 'any'), []);

  return (
    <EthooksProvider provider={provider}>
      <App />
    </EthooksProvider>
  );
}
```

We can now connect to a wallet and use it to sign transactions.

```js
const {connect, loading, error} = useConnect();

const onConnectButtonPress = async () => {
  const address = await connect();
};
```

That's all! You can now use React Ethooks in your React project.
