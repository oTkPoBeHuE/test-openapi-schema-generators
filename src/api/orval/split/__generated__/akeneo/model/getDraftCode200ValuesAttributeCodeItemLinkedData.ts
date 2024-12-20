/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Akeneo PIM REST API
 * OpenAPI spec version: 1.0.0
 */
import type { GetDraftCode200ValuesAttributeCodeItemLinkedDataLabels } from './getDraftCode200ValuesAttributeCodeItemLinkedDataLabels';

/**
 * Object containing labels of attribute options (only available since the 5.0 and when query parameter "with_attribute_options" is set to "true"). See <a href='/concepts/products.html#the-linked_data-format'>the `linked_data` format</a> section for more details.
 */
export type GetDraftCode200ValuesAttributeCodeItemLinkedData = {
  attribute?: string;
  code?: string;
  labels?: GetDraftCode200ValuesAttributeCodeItemLinkedDataLabels;
};
