// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Avacube from 'avacube';
import { Response } from 'node-fetch';

const client = new Avacube({
  authKey: 'My Auth Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource smartAccountAddress', () => {
  test('retrieve: only required params', async () => {
    const responsePromise = client.smartAccountAddress.retrieve({ owner: 'owner' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.smartAccountAddress.retrieve({ owner: 'owner' });
  });
});
