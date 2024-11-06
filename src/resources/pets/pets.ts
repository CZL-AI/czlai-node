// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as PetInfoAPI from './pet-info';
import { PetInfo, PetInfoRetrieveParams } from './pet-info';

export class Pets extends APIResource {
  petInfo: PetInfoAPI.PetInfo = new PetInfoAPI.PetInfo(this._client);
}

Pets.PetInfo = PetInfo;

export declare namespace Pets {
  export { PetInfo as PetInfo, type PetInfoRetrieveParams as PetInfoRetrieveParams };
}
