// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Czlai from 'czlai';
import { Response } from 'node-fetch';

const client = new Czlai({
  bearerToken: 'My Bearer Token',
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource logins', () => {
  test('sms: only required params', async () => {
    const responsePromise = client.logins.sms({ code: '123456', phone: 'phone' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('sms: required and optional params', async () => {
    const response = await client.logins.sms({ code: '123456', phone: 'phone', login_from: 0 });
  });

  test('wechat: only required params', async () => {
    const responsePromise = client.logins.wechat({ wechat_code: 'wechat_code' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('wechat: required and optional params', async () => {
    const response = await client.logins.wechat({
      wechat_code: 'wechat_code',
      encryptedData: 'encryptedData',
      iv: 'iv',
      module_type: 0,
      phone_number: 'phone_number',
      spread_id: 0,
    });
  });
});
