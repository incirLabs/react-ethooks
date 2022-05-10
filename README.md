# ETHooks

React hooks for the [ethers](https://docs.ethers.io/v5/) library.

This library is created and designed to use it internally in incirlabs projects.

## Installation

Install using your favorite package manager.

yarn:

```sh
yarn add @incirlabs/react-ethooks
```

npm:

```sh
npm add @incirlabs/react-ethooks
```

## Hooks

| Hook             | Description                                                            |
| ---------------- | ---------------------------------------------------------------------- |
| useAccount       | Get address (or more in future) of the connected account               |
| useConnect       | Connect to metamask or other wallets                                   |
| useContract      | Create new contract reference with provided address and ABI            |
| useContractRead  | Run read-only functions and get result                                 |
| useContractWrite | Send state changing transactions to the contract and listen for events |
| useERC20         | Helpers to get started working with erc-20 tokens                      |
| useSigner        | Get connected signer (or more in future)                               |

## Scripts

| Script       | Description                                            |
| ------------ | ------------------------------------------------------ |
| build        | Combination of `clean-build` and `rollup-build`        |
| watch        | Same as `rollup-build` but in watch mode               |
| rollup-build | Builds cjs and esm from typescript for production      |
| clean-build  | Cleans build folder                                    |
| format       | Format ts and tsx with prettier                        |
| format:check | Same as `format` but doesn't change files, just checks |
| lint         | Lint ts and tsx with eslint                            |
| lint:check   | Same as `lint` but doesn't change files, just checks   |
