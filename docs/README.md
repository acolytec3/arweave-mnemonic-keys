
# arweave-mnemonic-keys

## Index

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
