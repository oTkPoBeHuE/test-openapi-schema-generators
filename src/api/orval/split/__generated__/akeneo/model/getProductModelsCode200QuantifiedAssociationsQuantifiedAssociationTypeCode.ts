/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Akeneo PIM REST API
 * OpenAPI spec version: 1.0.0
 */
import type { GetProductModelsCode200QuantifiedAssociationsQuantifiedAssociationTypeCodeProductModelsItem } from './getProductModelsCode200QuantifiedAssociationsQuantifiedAssociationTypeCodeProductModelsItem';
import type { GetProductModelsCode200QuantifiedAssociationsQuantifiedAssociationTypeCodeProductsItem } from './getProductModelsCode200QuantifiedAssociationsQuantifiedAssociationTypeCodeProductsItem';

export type GetProductModelsCode200QuantifiedAssociationsQuantifiedAssociationTypeCode = {
  /** Array of objects containing product model codes and quantities with which the product model is in relation */
  product_models?: GetProductModelsCode200QuantifiedAssociationsQuantifiedAssociationTypeCodeProductModelsItem[];
  /** Array of objects containing product identifiers and quantities with which the product model is in relation */
  products?: GetProductModelsCode200QuantifiedAssociationsQuantifiedAssociationTypeCodeProductsItem[];
};