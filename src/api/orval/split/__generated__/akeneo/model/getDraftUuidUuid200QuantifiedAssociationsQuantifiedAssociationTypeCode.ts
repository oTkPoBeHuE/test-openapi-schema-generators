/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Akeneo PIM REST API
 * OpenAPI spec version: 1.0.0
 */
import type { GetDraftUuidUuid200QuantifiedAssociationsQuantifiedAssociationTypeCodeProductModelsItem } from './getDraftUuidUuid200QuantifiedAssociationsQuantifiedAssociationTypeCodeProductModelsItem';
import type { GetDraftUuidUuid200QuantifiedAssociationsQuantifiedAssociationTypeCodeProductsItem } from './getDraftUuidUuid200QuantifiedAssociationsQuantifiedAssociationTypeCodeProductsItem';

export type GetDraftUuidUuid200QuantifiedAssociationsQuantifiedAssociationTypeCode = {
  /** Array of objects containing product model codes and quantities with which the product is in relation */
  product_models?: GetDraftUuidUuid200QuantifiedAssociationsQuantifiedAssociationTypeCodeProductModelsItem[];
  /** Array of objects containing product uuids and quantities with which the product is in relation */
  products?: GetDraftUuidUuid200QuantifiedAssociationsQuantifiedAssociationTypeCodeProductsItem[];
};
