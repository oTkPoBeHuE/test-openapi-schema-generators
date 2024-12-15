/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Akeneo PIM REST API
 * OpenAPI spec version: 1.0.0
 */
import type { PatchCategoriesBodyValuesAttributeCodeAttributeUuidChannelCodeLocaleCodeItemData } from './patchCategoriesBodyValuesAttributeCodeAttributeUuidChannelCodeLocaleCodeItemData';

export type PatchCategoriesBodyValuesAttributeCodeAttributeUuidChannelCodeLocaleCodeItem = {
  /** The attribute code with its uuid (attributeCode|attributeUuid) */
  attribute_code?: string;
  /** <a href='api-reference.html#Channel'>Channel</a> code of the attribute value */
  channel?: string;
  /** Attribute value */
  data?: PatchCategoriesBodyValuesAttributeCodeAttributeUuidChannelCodeLocaleCodeItemData;
  /** <a href='api-reference.html#Locale'>Locale</a> code of the attribute value */
  locale?: string;
  /** The attribute type */
  type?: string;
};