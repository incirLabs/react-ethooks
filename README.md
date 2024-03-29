# ETHooks

React hooks for the [ethers](https://docs.ethers.io/v5/) library.

This library is created and designed to use it internally in incirlabs projects.

## Documentation

For more information and usage examples, please visit at [https://incirlabs.github.io/react-ethooks/](https://incirlabs.github.io/react-ethooks/).

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

| Hook             | Description                                                                           |
| ---------------- | ------------------------------------------------------------------------------------- |
| useAccount       | Get address (or more in future) of the connected account                              |
| useAccountChange | Listen for connected account change event                                             |
| useBalance       | Returns the balance of the currently connected or the given address                   |
| useConnect       | Connect to metamask or other wallets                                                  |
| useContract      | Create new contract reference with provided address and ABI                           |
| useContractEvent | Listen for contract events                                                            |
| useContractRead  | Run read-only functions and get result                                                |
| useContractWrite | Send state changing transactions to the contract and listen for events                |
| useEnsAddress    | Returns the address of the given ENS name                                             |
| useEnsName       | Returns the ENS name of the given address                                             |
| useEnsResolver   | Returns an EnsResolver instance                                                       |
| useEnsText       | Returns the stored EIP-634 text entry for the given key                               |
| useERC20         | Helpers to get started working with erc-20 tokens                                     |
| useERC20Balance  | Returns the balance of the currently connected or the given address for erc-20 tokens |
| useNetwork       | Returns the current network                                                           |
| useSigner        | Get connected signer (or more in future)                                              |
| useProvider      | Get the provider passed to the EthooksProvider component                              |

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
