/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Akeneo PIM REST API
 * OpenAPI spec version: 1.0.0
 */
import type { PatchAssetCategoriesBodyLabels } from './patchAssetCategoriesBodyLabels';

export type PatchAssetCategoriesBody = {
  /** PAM asset category code */
  code: string;
  /** PAM asset category labels for each locale */
  labels?: PatchAssetCategoriesBodyLabels;
  /** PAM ssset category code of the parent's asset category */
  parent?: string;
};
