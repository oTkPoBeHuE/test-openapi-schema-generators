/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Akeneo PIM REST API
 * OpenAPI spec version: 1.0.0
 */
import type { ProductModelQuantifiedAssociationsQuantifiedAssociationTypeCodeProductModelsItem } from './productModelQuantifiedAssociationsQuantifiedAssociationTypeCodeProductModelsItem';
import type { ProductModelQuantifiedAssociationsQuantifiedAssociationTypeCodeProductsItem } from './productModelQuantifiedAssociationsQuantifiedAssociationTypeCodeProductsItem';

export type ProductModelQuantifiedAssociationsQuantifiedAssociationTypeCode = {
  /** Array of objects containing product model codes and quantities with which the product model is in relation */
  product_models?: ProductModelQuantifiedAssociationsQuantifiedAssociationTypeCodeProductModelsItem[];
  /** Array of objects containing product identifiers and quantities with which the product model is in relation */
  products?: ProductModelQuantifiedAssociationsQuantifiedAssociationTypeCodeProductsItem[];
};