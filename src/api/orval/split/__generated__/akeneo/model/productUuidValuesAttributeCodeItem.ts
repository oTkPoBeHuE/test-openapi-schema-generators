/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Akeneo PIM REST API
 * OpenAPI spec version: 1.0.0
 */
import type { ProductUuidValuesAttributeCodeItemData } from './productUuidValuesAttributeCodeItemData';
import type { ProductUuidValuesAttributeCodeItemLinkedData } from './productUuidValuesAttributeCodeItemLinkedData';

export type ProductUuidValuesAttributeCodeItem = {
  /** Product value. See <a href='/concepts/products.html#the-data-format'>the `data` format</a> section for more details. */
  data?: ProductUuidValuesAttributeCodeItemData;
  /** Object containing labels of attribute options (only available since the 5.0 and when query parameter "with_attribute_options" is set to "true"). See <a href='/concepts/products.html#the-linked_data-format'>the `linked_data` format</a> section for more details. */
  linked_data?: ProductUuidValuesAttributeCodeItemLinkedData;
  /** <a href='api-reference.html#Locale'>Locale</a> code of the product value */
  locale?: string;
  /** <a href='api-reference.html#Channel'>Channel</a> code of the product value */
  scope?: string;
};
