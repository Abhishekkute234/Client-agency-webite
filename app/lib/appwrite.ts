import { Client, Account } from "appwrite";

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("6781e9f5001197beb2be");

const account = new Account(client);

export { account, client };
