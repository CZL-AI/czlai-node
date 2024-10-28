// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Czlai from 'czlai';
import { Response } from 'node-fetch';

const client = new Czlai({
  bearerToken: 'My Bearer Token',
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource petProfiles', () => {
  test('create', async () => {
    const responsePromise = client.petProfiles.create({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.petProfiles.retrieve({ pet_profile_id: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.petProfiles.retrieve({ pet_profile_id: 0 });
  });

  test('update: only required params', async () => {
    const responsePromise = client.petProfiles.update({ pet_profile_id: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.petProfiles.update({
      pet_profile_id: 0,
      allergy_history: 'allergy_history',
      avatar: 'avatar',
      birthday: 'birthday',
      disease_history: 'disease_history',
      family_history: 'family_history',
      gender: 0,
      is_neutered: 0,
      is_vaccination: 0,
      name: 'name',
      pet_type: 0,
      pet_variety: 'pet_variety',
      vaccination_date: 'vaccination_date',
      weight: 'weight',
    });
  });

  test('list', async () => {
    const responsePromise = client.petProfiles.list();
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
    await expect(client.petProfiles.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Czlai.NotFoundError,
    );
  });

  test('delete: only required params', async () => {
    const responsePromise = client.petProfiles.delete({ pet_profile_id: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.petProfiles.delete({ pet_profile_id: 0 });
  });

  test('exInfo', async () => {
    const responsePromise = client.petProfiles.exInfo({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: currently no good way to test endpoints with content type text/event-stream, Prism mock server will fail
  test.skip('variety', async () => {
    const responsePromise = client.petProfiles.variety({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
