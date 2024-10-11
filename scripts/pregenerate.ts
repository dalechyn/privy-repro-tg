import { PrivyClient } from "@privy-io/server-auth";

export const privyClient = new PrivyClient(process.env.PRIVY_ID!, process.env.PRIVY_SECRET!);
await privyClient.importUser({
  createEthereumWallet: true,
  linkedAccounts: [
    {
      type: "telegram",
      telegramUserId: process.env.TG_ID!,
      username: process.env.TG_USERNAME!,
      firstName: process.env.TG_FIRSTNAME!,
      lastName: process.env.TG_LASTNAME!,
    },
  ],
});
console.log('Pregenerated the user.')
