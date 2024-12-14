/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Akeneo PIM REST API
 * OpenAPI spec version: 1.0.0
 */
import type { PatchReferenceEntityRecordsCodeBodyValuesAttributeCodeItemData } from './patchReferenceEntityRecordsCodeBodyValuesAttributeCodeItemData';

export type PatchReferenceEntityRecordsCodeBodyValuesAttributeCodeItem = {
  /** Channel code of the reference entity record value */
  channel?: string;
  /** Reference entity record value. See <a href='/concepts/reference-entities.html#the-data-format'>the `data` format</a> section for more details. */
  data?: PatchReferenceEntityRecordsCodeBodyValuesAttributeCodeItemData;
  /** Locale code of the reference entity record value */
  locale?: string;
};