// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Avacube from 'avacube';
import { Response } from 'node-fetch';

const client = new Avacube({
  authKey: 'My Auth Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('top level methods', () => {
  test('cancelTask: only required params', async () => {
    const responsePromise = client.cancelTask({ id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('cancelTask: required and optional params', async () => {
    const response = await client.cancelTask({ id: 'id' });
  });

  test('createTask: only required params', async () => {
    const responsePromise = client.createTask({
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

  test('createTask: required and optional params', async () => {
    const response = await client.createTask({
      action: { amount: 'amount', destination: 'destination' },
      task_type: 'ETHTransferTask',
      trigger: { trigger_type: 'TimeCondition' },
      expired_at: 0,
      memo: 'memo',
      start_at: 0,
    });
  });

  test('deleteTask: only required params', async () => {
    const responsePromise = client.deleteTask({ id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('deleteTask: required and optional params', async () => {
    const response = await client.deleteTask({ id: 'id' });
  });

  test('getKey: only required params', async () => {
    const responsePromise = client.getKey({ expired_at: 0, owner: 'owner', signature: 'signature' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getKey: required and optional params', async () => {
    const response = await client.getKey({ expired_at: 0, owner: 'owner', signature: 'signature' });
  });

  test('getSmartAccountAddress: only required params', async () => {
    const responsePromise = client.getSmartAccountAddress({ owner: 'owner' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getSmartAccountAddress: required and optional params', async () => {
    const response = await client.getSmartAccountAddress({ owner: 'owner' });
  });
});
