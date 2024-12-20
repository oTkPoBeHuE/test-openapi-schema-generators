/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Akeneo PIM REST API
 * OpenAPI spec version: 1.0.0
 */

export type PatchProductsCodeBodyAssociationsAssociationTypeCode = {
  /** Array of groups codes with which the product is in relation */
  groups?: string[];
  /** Array of product model codes with which the product is in relation (only available since the v2.1) */
  product_models?: string[];
  /** Array of product identifiers with which the product is in relation */
  products?: string[];
};
