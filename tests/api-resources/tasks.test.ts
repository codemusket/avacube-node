// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Avacube from 'avacube';
import { Response } from 'node-fetch';

const client = new Avacube({
  authKey: 'My Auth Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource tasks', () => {
  test('create: only required params', async () => {
    const responsePromise = client.tasks.create({
      action: { amount: 'amount', destination: 'destination' },
      task_type: 'ETHTransferTask',
      trigger: {},
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.tasks.create({
      action: { amount: 'amount', destination: 'destination' },
      task_type: 'ETHTransferTask',
      trigger: { trigger_type: 'TimeCondition' },
      expired_at: 0,
      memo: 'memo',
      start_at: 0,
    });
  });

  test('list', async () => {
    const responsePromise = client.tasks.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.tasks.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Avacube.NotFoundError,
    );
  });

  test('delete: only required params', async () => {
    const responsePromise = client.tasks.delete({ id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.tasks.delete({ id: 'id' });
  });

  test('cancel: only required params', async () => {
    const responsePromise = client.tasks.cancel({ id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('cancel: required and optional params', async () => {
    const response = await client.tasks.cancel({ id: 'id' });
  });
});
