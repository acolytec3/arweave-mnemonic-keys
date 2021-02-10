import { generateKeyPair, getKeyPairFromMnemonic } from "human-crypto-keys";
import crypto from "libp2p-crypto";

/**
 * Generate a 12 word mnemonic for an Arweave key
 * @returns {string} - a promise resolving to a 12 word mnemonic seed phrase
 */
export async function generateMnemonic() {
  let keys = await generateKeyPair(
    { id: "rsa", modulusLength: 4096 },
    { privateKeyFormat: "pkcs1-pem" }
  );
  return keys.mnemonic;
}

/**
 * Generates a JWK object representation of an Arweave key
 * @param mnemonic - a 12 word mnemonic represented as a string
 * @returns {object} - returns a Javascript object that conforms to the JWKInterface required by Arweave-js
 *
 * @example <caption>Generate an Arweave key and get its public address</caption>
 * let key = getKeyFromMnemonic('jewel cave spy act loyal solid night manual joy select mystery unhappy')
 * arweave.wallets.jwkToAddress(key)
 * //returns qe741op_rt-iwBazAqJipTc15X8INlDCoPz6S40RBdg
 *
 */

export async function getKeyFromMnemonic(mnemonic: string) {
  let keyPair = await getKeyPairFromMnemonic(
    mnemonic,
    { id: "rsa", modulusLength: 4096 },
    { privateKeyFormat: "pkcs1-pem" }
  );
  //@ts-ignore
  let privateKey = (await crypto.keys.import(keyPair.privateKey, ""))._key;
  delete privateKey.alg;
  delete privateKey.key_ops;
  return privateKey;
}
