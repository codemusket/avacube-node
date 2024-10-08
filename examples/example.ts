#!/usr/bin/env -S yarn tsn

import Petstore from 'avacube';

const client = new Petstore({
  apiKey: process.env['PETSTORE_API_KEY'], // This is the default and can be omitted
});

async function main() {
  const response = await client.store.inventory();

  console.log(response);
}

main();
