/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Akeneo PIM REST API
 * OpenAPI spec version: 1.0.0
 */
import type { DeprecatedAssetCategoryListAllOfFourLabels } from './deprecatedAssetCategoryListAllOfFourLabels';

export type DeprecatedAssetCategoryListAllOfFour = {
  /** PAM asset category code */
  code: string;
  /** PAM asset category labels for each locale */
  labels?: DeprecatedAssetCategoryListAllOfFourLabels;
  /** PAM ssset category code of the parent's asset category */
  parent?: string;
};
