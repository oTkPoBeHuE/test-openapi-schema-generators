/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Akeneo PIM REST API
 * OpenAPI spec version: 1.0.0
 */
import type { GetProductModelDraftCode200Associations } from './getProductModelDraftCode200Associations';
import type { GetProductModelDraftCode200Metadata } from './getProductModelDraftCode200Metadata';
import type { GetProductModelDraftCode200QualityScores } from './getProductModelDraftCode200QualityScores';
import type { GetProductModelDraftCode200QuantifiedAssociations } from './getProductModelDraftCode200QuantifiedAssociations';
import type { GetProductModelDraftCode200Values } from './getProductModelDraftCode200Values';

export type GetProductModelDraftCode200 = {
  /** Several associations related to groups, product and/or other product models, grouped by association types */
  associations?: GetProductModelDraftCode200Associations;
  /** Codes of the <a href='api-reference.html#Category'>categories</a> in which the product model is categorized */
  categories?: string[];
  /** Product model code */
  code: string;
  /** Date of creation */
  created?: string;
  /** <a href='api-reference.html#Family'>Family</a> code  from which the product inherits its attributes and attributes requirements (since the 3.2) */
  family?: string;
  /** Family variant code from which the product model inherits its attributes and variant attributes */
  family_variant: string;
  /** More information around the product model (only available since the v2.3 in the Enterprise Edition) */
  metadata?: GetProductModelDraftCode200Metadata;
  /** Code of the parent <a href='api-reference.html#Productmodel'>product model</a>. This parent can be modified since the 2.3. */
  parent?: string;
  /** Product model quality scores for each channel/locale combination (<strong>only available since the 7.0 version</strong> and when the "with_quality_scores" query parameter is set to "true") */
  quality_scores?: GetProductModelDraftCode200QualityScores;
  /** Several quantified associations related to products and/or product models, grouped by quantified association types (only available since the 5.0) */
  quantified_associations?: GetProductModelDraftCode200QuantifiedAssociations;
  /** Date of the last update */
  updated?: string;
  /** Product model attributes values, see <a href='/concepts/products.html#focus-on-the-product-values'>Product values</a> section for more details */
  values?: GetProductModelDraftCode200Values;
};
