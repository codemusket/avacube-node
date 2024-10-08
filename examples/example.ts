#!/usr/bin/env -S yarn tsn

import Avacube from 'avacube';

const client = new Avacube({
  authKey: process.env['AUTH_KEY'], // This is the default and can be omitted
});

async function main() {
  const addressResp = await client.smartAccountAddress.retrieve({ owner: 'owner' });

  console.log(addressResp.nonce);
}

main();
