/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Akeneo PIM REST API
 * OpenAPI spec version: 1.0.0
 */
import type { _GetAttributesAttributeCodeOptions200OneAllOfSevenEmbeddedItemsItemAllOfFourLabels } from './_getAttributesAttributeCodeOptions200OneAllOfSevenEmbeddedItemsItemAllOfFourLabels';

export type _GetAttributesAttributeCodeOptions200OneAllOfSevenEmbeddedItemsItemAllOfFour = {
  /** Code of attribute related to the attribute option */
  attribute?: string;
  /** Code of option */
  code: string;
  /** Attribute option labels for each locale */
  labels?: _GetAttributesAttributeCodeOptions200OneAllOfSevenEmbeddedItemsItemAllOfFourLabels;
  /** Order of attribute option */
  sort_order?: number;
};
