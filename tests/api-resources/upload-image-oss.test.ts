// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Czlai, { toFile } from 'czlai';
import { Response } from 'node-fetch';

const client = new Czlai({
  bearerToken: 'My Bearer Token',
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource uploadImageOss', () => {
  test('create: only required params', async () => {
    const responsePromise = client.uploadImageOss.create({
      upload_type: 1,
      image: await toFile(Buffer.from('# my file contents'), 'README.md'),
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
    const response = await client.uploadImageOss.create({
      upload_type: 1,
      image: await toFile(Buffer.from('# my file contents'), 'README.md'),
      upload_to_local: 0,
    });
  });
});
