// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as PetInfoAPI from './pet-info';

export class Pets extends APIResource {
  petInfo: PetInfoAPI.PetInfo = new PetInfoAPI.PetInfo(this._client);
}

export namespace Pets {
  export import PetInfo = PetInfoAPI.PetInfo;
  export import PetInfoRetrieveParams = PetInfoAPI.PetInfoRetrieveParams;
}
