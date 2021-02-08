import { generateMnemonic, getKeyFromMnemonic } from "../arweaveMnemonicKeys";
import Arweave from "arweave";

test("generateMnemonic returns a string of 12 words", async () => {
  const data = await generateMnemonic();
  expect(typeof data).toBe("string");
  expect(data.split(" ").length).toBe(12);
}, 60000);

test("getKeyFromMnemonic returns a properly formatted JWK", async () => {
  const data = await getKeyFromMnemonic(
    "dust mushroom rigid hip know prefer siren dust message number double door"
  );
  const arweave = Arweave.init({
    host: "arweave.net",
    port: 443,
    protocol: "https",
  });
  const address = await arweave.wallets.jwkToAddress(data);
  expect(address).toBe("5TEHFI-wrrNMddv5atE_4iGql_QjbxBDITfn2RUhC7w");
  let transaction = await arweave.createTransaction(
    {
      target: "1seRanklLU_1VTGkEk7P0xAwMJfA7owA1JHW5KyZKlY",
      quantity: arweave.ar.arToWinston("10.5"),
    },
    data
  );
  expect(typeof transaction).toBe("object");
  await arweave.transactions.sign(transaction, data);
  expect(transaction.signature).toBeTruthy();
  let verify = await arweave.transactions.verify(transaction);
  expect(verify).toBe(true);
}, 1200000);
