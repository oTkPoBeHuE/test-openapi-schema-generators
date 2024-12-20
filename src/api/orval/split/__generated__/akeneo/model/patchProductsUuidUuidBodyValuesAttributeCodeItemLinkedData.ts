/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Akeneo PIM REST API
 * OpenAPI spec version: 1.0.0
 */
import type { PatchProductsUuidUuidBodyValuesAttributeCodeItemLinkedDataLabels } from './patchProductsUuidUuidBodyValuesAttributeCodeItemLinkedDataLabels';

/**
 * Object containing labels of attribute options (only available since the 5.0 and when query parameter "with_attribute_options" is set to "true"). See <a href='/concepts/products.html#the-linked_data-format'>the `linked_data` format</a> section for more details.
 */
export type PatchProductsUuidUuidBodyValuesAttributeCodeItemLinkedData = {
  attribute?: string;
  code?: string;
  labels?: PatchProductsUuidUuidBodyValuesAttributeCodeItemLinkedDataLabels;
};
