/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Akeneo PIM REST API
 * OpenAPI spec version: 1.0.0
 */
import type { _DeprecatedAssetListAllOfFourVariationFilesItemLink } from './_deprecatedAssetListAllOfFourVariationFilesItemLink';

export type DeprecatedAssetListAllOfFourVariationFilesItem = {
  /** Links to get and download the variation file */
  _link?: _DeprecatedAssetListAllOfFourVariationFilesItemLink;
  /** Code of the variation */
  code?: string;
  /** Locale code of the variation */
  locale?: string;
  /** Channel code of the variation */
  scope?: string;
};