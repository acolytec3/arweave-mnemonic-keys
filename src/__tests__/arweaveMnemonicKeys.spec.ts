import { generateMnemonic, getKeyFromMnemonic } from "../arweaveMnemonicKeys";
import Arweave from 'arweave';

test("generateMnemonic returns a string", async () => {
  const data = await generateMnemonic();
  expect(typeof data).toBe("string");
  expect(data.split(" ").length).toBe(12);
});

test("getKeyFromMnemonic returns a properly formatted JWK", async () => {
  const data = await getKeyFromMnemonic('jewel cave spy act loyal solid night manual joy select mystery unhappy');
  const arweave = Arweave.init({
    host: 'arweave.net',
    port: 443,
    protocol: 'https'
  });
  const address = await arweave.wallets.jwkToAddress(data);
  expect(address).toBe('qe741op_rt-iwBazAqJipTc15X8INlDCoPz6S40RBdg');
  let transaction = await arweave.createTransaction({
    target: '1seRanklLU_1VTGkEk7P0xAwMJfA7owA1JHW5KyZKlY',
    quantity: arweave.ar.arToWinston('10.5')
  }, data);
  expect(typeof transaction).toBe('object');
  await arweave.transactions.sign(transaction, data);
  expect(transaction.signature).toBeTruthy();
  let verify = await arweave.transactions.verify(transaction);
  console.log(transaction);
  expect(verify).toBe(true);
},10000);