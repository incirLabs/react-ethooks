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

You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.

# Quick Start

Wrap your root component in `EthooksProvider` from `@incirlabs/react-ethooks` package and pass your provider.

In this case, we are using `Web3Provider` from `ethers` library.

```jsx
export default function Main() {
  return (
    <EthooksProvider provider={new ethers.providers.Web3Provider(window.ethereum)}>
      <App />
    </EthooksProvider>
  );
}
```

That's all! You can now use React Ethooks in your React project.
