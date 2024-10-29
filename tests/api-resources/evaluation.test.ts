// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Czlai from 'czlai';
import { Response } from 'node-fetch';

const client = new Czlai({
  bearerToken: 'My Bearer Token',
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource evaluation', () => {
  test('putEvaluation: only required params', async () => {
    const responsePromise = client.evaluation.putEvaluation({
      content: 'content',
      evaluation: 0,
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

  test('putEvaluation: required and optional params', async () => {
    const response = await client.evaluation.putEvaluation({
      content: 'content',
      evaluation: 0,
      session_id: 'session_id',
    });
  });
});