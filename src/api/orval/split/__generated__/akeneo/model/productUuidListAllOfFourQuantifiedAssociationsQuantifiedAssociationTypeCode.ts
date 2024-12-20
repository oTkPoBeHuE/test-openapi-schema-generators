/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Akeneo PIM REST API
 * OpenAPI spec version: 1.0.0
 */
import type { ProductUuidListAllOfFourQuantifiedAssociationsQuantifiedAssociationTypeCodeProductModelsItem } from './productUuidListAllOfFourQuantifiedAssociationsQuantifiedAssociationTypeCodeProductModelsItem';
import type { ProductUuidListAllOfFourQuantifiedAssociationsQuantifiedAssociationTypeCodeProductsItem } from './productUuidListAllOfFourQuantifiedAssociationsQuantifiedAssociationTypeCodeProductsItem';

export type ProductUuidListAllOfFourQuantifiedAssociationsQuantifiedAssociationTypeCode = {
  /** Array of objects containing product model codes and quantities with which the product is in relation */
  product_models?: ProductUuidListAllOfFourQuantifiedAssociationsQuantifiedAssociationTypeCodeProductModelsItem[];
  /** Array of objects containing product uuids and quantities with which the product is in relation */
  products?: ProductUuidListAllOfFourQuantifiedAssociationsQuantifiedAssociationTypeCodeProductsItem[];
};
