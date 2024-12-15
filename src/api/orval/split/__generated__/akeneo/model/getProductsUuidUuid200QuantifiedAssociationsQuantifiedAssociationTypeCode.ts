/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Akeneo PIM REST API
 * OpenAPI spec version: 1.0.0
 */
import type { GetProductsUuidUuid200QuantifiedAssociationsQuantifiedAssociationTypeCodeProductModelsItem } from './getProductsUuidUuid200QuantifiedAssociationsQuantifiedAssociationTypeCodeProductModelsItem';
import type { GetProductsUuidUuid200QuantifiedAssociationsQuantifiedAssociationTypeCodeProductsItem } from './getProductsUuidUuid200QuantifiedAssociationsQuantifiedAssociationTypeCodeProductsItem';

export type GetProductsUuidUuid200QuantifiedAssociationsQuantifiedAssociationTypeCode = {
  /** Array of objects containing product model codes and quantities with which the product is in relation */
  product_models?: GetProductsUuidUuid200QuantifiedAssociationsQuantifiedAssociationTypeCodeProductModelsItem[];
  /** Array of objects containing product uuids and quantities with which the product is in relation */
  products?: GetProductsUuidUuid200QuantifiedAssociationsQuantifiedAssociationTypeCodeProductsItem[];
};
