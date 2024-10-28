// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Czlai from 'czlai';
import { Response } from 'node-fetch';

const client = new Czlai({
  bearerToken: 'My Bearer Token',
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource aiCheckup', () => {
  test('isFirst: only required params', async () => {
    const responsePromise = client.aiCheckup.isFirst({ pet_profile_id: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('isFirst: required and optional params', async () => {
    const response = await client.aiCheckup.isFirst({ pet_profile_id: 0 });
  });

  test('picResult: only required params', async () => {
    const responsePromise = client.aiCheckup.picResult({
      img_url: 'img_url',
      pet_profile_id: 0,
      session_id: 'session_id',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('picResult: required and optional params', async () => {
    const response = await client.aiCheckup.picResult({
      img_url: 'img_url',
      pet_profile_id: 0,
      session_id: 'session_id',
    });
  });

  test('question: only required params', async () => {
    const responsePromise = client.aiCheckup.question({ pet_profile_id: 0, session_id: 'session_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('question: required and optional params', async () => {
    const response = await client.aiCheckup.question({ pet_profile_id: 0, session_id: 'session_id' });
  });

  test('questionResult: only required params', async () => {
    const responsePromise = client.aiCheckup.questionResult({
      index: 0,
      pet_profile_id: 0,
      question_id: 'question_id',
      round: 'round',
      session_id: 'session_id',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('questionResult: required and optional params', async () => {
    const response = await client.aiCheckup.questionResult({
      index: 0,
      pet_profile_id: 0,
      question_id: 'question_id',
      round: 'round',
      session_id: 'session_id',
    });
  });

  test('report: only required params', async () => {
    const responsePromise = client.aiCheckup.report({ pet_profile_id: 0, session_id: 'session_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('report: required and optional params', async () => {
    const response = await client.aiCheckup.report({ pet_profile_id: 0, session_id: 'session_id' });
  });

  test('reportTask: only required params', async () => {
    const responsePromise = client.aiCheckup.reportTask({ session_id: 'session_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('reportTask: required and optional params', async () => {
    const response = await client.aiCheckup.reportTask({
      session_id: 'session_id',
      img_url: 'img_url',
      report_type: 0,
    });
  });

  test('sessionStart', async () => {
    const responsePromise = client.aiCheckup.sessionStart();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('sessionStart: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.aiCheckup.sessionStart({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Czlai.NotFoundError,
    );
  });

  // skipped: currently no good way to test endpoints with content type text/event-stream, Prism mock server will fail
  test.skip('summary', async () => {
    const responsePromise = client.aiCheckup.summary({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('updateProfile', async () => {
    const responsePromise = client.aiCheckup.updateProfile({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
