/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Akeneo PIM REST API
 * OpenAPI spec version: 1.0.0
 */
import type { PublishedProductAssociations } from './publishedProductAssociations';
import type { PublishedProductQuantifiedAssociations } from './publishedProductQuantifiedAssociations';
import type { PublishedProductValues } from './publishedProductValues';

export interface PublishedProduct {
  /** Several associations related to groups and/or other published products, grouped by association types */
  associations?: PublishedProductAssociations;
  /** Codes of the <a href='api-reference.html#Category'>categories</a> in which the published product is classified */
  categories?: string[];
  /** Date of creation */
  created?: string;
  /** Whether the published product is enable */
  enabled?: boolean;
  /** <a href='api-reference.html#Family'>Family</a> code from which the published product inherits its attributes and attributes requirements */
  family?: string;
  /** Codes of the groups to which the published product belong */
  groups?: string[];
  /** Published product identifier, i.e. the value of the only `pim_catalog_identifier` attribute */
  identifier: string;
  /** Warning: associations with quantities are not compatible with the published products. The response will always be empty. */
  quantified_associations?: PublishedProductQuantifiedAssociations;
  /** Date of the last update */
  updated?: string;
  /** Published product attributes values, see <a href='/concepts/products.html#focus-on-the-product-values'>Product values</a> section for more details */
  values?: PublishedProductValues;
}