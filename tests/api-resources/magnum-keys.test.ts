// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Czlai from 'czlai';
import { Response } from 'node-fetch';

const client = new Czlai({
  bearerToken: 'My Bearer Token',
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource magnumKeys', () => {
  test('getKey', async () => {
    const responsePromise = client.magnumKeys.getKey({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('pictureChoice: only required params', async () => {
    const responsePromise = client.magnumKeys.pictureChoice({ img_url: 'img_url' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('pictureChoice: required and optional params', async () => {
    const response = await client.magnumKeys.pictureChoice({
      img_url: 'img_url',
      key_usage_id: 'key_usage_id',
      user_uuid: 'user_uuid',
    });
  });

  test('pictureQuestion: only required params', async () => {
    const responsePromise = client.magnumKeys.pictureQuestion({ img_url: 'img_url' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('pictureQuestion: required and optional params', async () => {
    const response = await client.magnumKeys.pictureQuestion({
      img_url: 'img_url',
      key_usage_id: 'key_usage_id',
      user_uuid: 'user_uuid',
    });
  });

  test('voiceChoice: only required params', async () => {
    const responsePromise = client.magnumKeys.voiceChoice({ message: 'message' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('voiceChoice: required and optional params', async () => {
    const response = await client.magnumKeys.voiceChoice({
      message: 'message',
      key_usage_id: 'key_usage_id',
      user_uuid: 'user_uuid',
    });
  });

  test('voiceQuestion: only required params', async () => {
    const responsePromise = client.magnumKeys.voiceQuestion({ message: 'message' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('voiceQuestion: required and optional params', async () => {
    const response = await client.magnumKeys.voiceQuestion({
      message: 'message',
      key_usage_id: 'key_usage_id',
      pet_id: 0,
      user_uuid: 'user_uuid',
    });
  });
});
