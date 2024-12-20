/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Akeneo PIM REST API
 * OpenAPI spec version: 1.0.0
 */
import type { GetProductModelDraftCode200QuantifiedAssociationsQuantifiedAssociationTypeCodeProductModelsItem } from './getProductModelDraftCode200QuantifiedAssociationsQuantifiedAssociationTypeCodeProductModelsItem';
import type { GetProductModelDraftCode200QuantifiedAssociationsQuantifiedAssociationTypeCodeProductsItem } from './getProductModelDraftCode200QuantifiedAssociationsQuantifiedAssociationTypeCodeProductsItem';

export type GetProductModelDraftCode200QuantifiedAssociationsQuantifiedAssociationTypeCode = {
  /** Array of objects containing product model codes and quantities with which the product model is in relation */
  product_models?: GetProductModelDraftCode200QuantifiedAssociationsQuantifiedAssociationTypeCodeProductModelsItem[];
  /** Array of objects containing product identifiers and quantities with which the product model is in relation */
  products?: GetProductModelDraftCode200QuantifiedAssociationsQuantifiedAssociationTypeCodeProductsItem[];
};
