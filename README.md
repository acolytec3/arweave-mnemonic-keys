Arweave Mnemonic Keys
===========================

This library allows Arweave wallets/keys to be generated/loaded from BIP39-compliant 12 word mnemonics.  This is as an alternative to the current default Arweave dapp behavior of requiring a JSON keyfile to be provided to sign transactions and interact with Arweave dapps.

See [ArMob 2.0](https://acolytec3.github.io/armob-2.0) for an example use case

This package is also served through OpenBits (http://openbits.world)

Note: It takes anywhere from 30 seconds to 2 minutes to generate an RSA key using this library cuz well...Javascript can be slow.

# 🎉 Features

- Generate BIP39 compliant 12 word mnemonics
- Generate Arweave compliant wallets from 12 word mnemonics
# ⚙ Install

```bash
# npm
npm install arweave-mnemonic-keys

# openbits
openbits install arweave-mnemonic-keys
```

# 📖 Usage

### Functions

* [generateMnemonic](README.md#generatemnemonic)
* [getKeyFromMnemonic](README.md#getkeyfrommnemonic)

## Functions

###  generateMnemonic

▸ **generateMnemonic**(): *Promise‹any›*

Defined in arweaveMnemonicKeys.ts:8

Generate a 12 word mnemonic for an Arweave key

**Returns:** *Promise‹any›*

- a promise resolving to a 12 word mnemonic seed phrase

___

###  getKeyFromMnemonic

▸ **getKeyFromMnemonic**(`mnemonic`: string): *Promise‹any›*

Defined in arweaveMnemonicKeys.ts:30

Generates a JWK object representation of an Arweave key

**`example`** <caption>Generate an Arweave key and get its public address</caption>
let key = getKeyFromMnemonic('jewel cave spy act loyal solid night manual joy select mystery unhappy')
arweave.wallets.jwkToAddress(key)
//returns qe741op_rt-iwBazAqJipTc15X8INlDCoPz6S40RBdg

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`mnemonic` | string | a 12 word mnemonic represented as a string |

**Returns:** *Promise‹any›*

- returns a Javascript object that conforms to the JWKInterface required by Arweave-js

