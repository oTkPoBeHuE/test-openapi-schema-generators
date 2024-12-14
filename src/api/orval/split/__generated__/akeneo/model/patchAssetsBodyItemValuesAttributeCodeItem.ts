/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Akeneo PIM REST API
 * OpenAPI spec version: 1.0.0
 */
import type { PatchAssetsBodyItemValuesAttributeCodeItemData } from './patchAssetsBodyItemValuesAttributeCodeItemData';

export type PatchAssetsBodyItemValuesAttributeCodeItem = {
  /** Channel code of the asset attribute value */
  channel?: string;
  /** Asset attribute value. See <a href='/concepts/asset-manager.html#the-data-format'>the `data` format</a> section for more details. */
  data?: PatchAssetsBodyItemValuesAttributeCodeItemData;
  /** Locale code of the asset attribute value */
  locale?: string;
};