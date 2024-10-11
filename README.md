# Privy Repro with pregenerated TG accounts

1. Run the frontend - `bun dev` (port 3333 so it doesn't conflict with my other local privy tokens)
2. Before logging into the frontend, pregenerate a tg account via:
```sh
PRIVY_SECRET=YOUR_SECRET \
TG_ID=YOUR_TG_ID \
TG_USERNAME=YOUR_TG_USERNAME \
TG_FIRSTNAME=YOUR_TG_FIRSTNAME \
TG_LASTNAME=YOUR_TG_LASTNAME \
bun run scripts/pregenerate.ts
```
