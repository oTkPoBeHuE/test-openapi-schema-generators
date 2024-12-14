/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Akeneo PIM REST API
 * OpenAPI spec version: 1.0.0
 */
import type { GetProductsCode200Associations } from './getProductsCode200Associations';
import type { GetProductsCode200CompletenessesItem } from './getProductsCode200CompletenessesItem';
import type { GetProductsCode200Metadata } from './getProductsCode200Metadata';
import type { GetProductsCode200QualityScores } from './getProductsCode200QualityScores';
import type { GetProductsCode200QuantifiedAssociations } from './getProductsCode200QuantifiedAssociations';
import type { GetProductsCode200Values } from './getProductsCode200Values';

export type GetProductsCode200 = {
  /** Several associations related to groups, product models and/or other products, grouped by association types */
  associations?: GetProductsCode200Associations;
  /** Codes of the <a href='api-reference.html#Category'>categories</a> in which the product is classified */
  categories?: string[];
  /** Product completenesses for each channel/locale combination (only available since the 7.0 version, and when the "with_completenesses" query parameter is set to "true") */
  completenesses?: GetProductsCode200CompletenessesItem[];
  /** Date of creation */
  created?: string;
  /** Whether the product is enabled */
  enabled?: boolean;
  /** <a href='api-reference.html#Family'>Family</a> code from which the product inherits its attributes and attributes requirements. */
  family?: string;
  /** Codes of the groups to which the product belong */
  groups?: string[];
  /** Product identifier, i.e. the value of the only `pim_catalog_identifier` attribute */
  identifier: string;
  /** More information around the product (only available since the v2.0 in the Enterprise Edition) */
  metadata?: GetProductsCode200Metadata;
  /** Code of the parent <a href='api-reference.html#Productmodel'>product model</a> when the product is a variant (only available since the 2.0). This parent can be modified since the 2.3. */
  parent?: string;
  /** Product quality scores for each channel/locale combination (only available since the 5.0 and when the "with_quality_scores" query parameter is set to "true") */
  quality_scores?: GetProductsCode200QualityScores;
  /** Several quantified associations related to products and/or product models, grouped by quantified association types (only available since the 5.0) */
  quantified_associations?: GetProductsCode200QuantifiedAssociations;
  /** Date of the last update */
  updated?: string;
  /** Product UUID */
  uuid?: string;
  /** Product attributes values, see <a href='/concepts/products.html#focus-on-the-product-values'>Product values</a> section for more details */
  values?: GetProductsCode200Values;
};