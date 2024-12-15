/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Akeneo PIM REST API
 * OpenAPI spec version: 1.0.0
 */
import type { PatchFamiliesFamilyCodeVariantsCodeBodyLabels } from './patchFamiliesFamilyCodeVariantsCodeBodyLabels';
import type { PatchFamiliesFamilyCodeVariantsCodeBodyVariantAttributeSetsItem } from './patchFamiliesFamilyCodeVariantsCodeBodyVariantAttributeSetsItem';

export type PatchFamiliesFamilyCodeVariantsCodeBody = {
  /** Family variant code */
  code: string;
  /** Family variant labels for each locale */
  labels?: PatchFamiliesFamilyCodeVariantsCodeBodyLabels;
  /** Attributes distribution according to the enrichment level */
  variant_attribute_sets: PatchFamiliesFamilyCodeVariantsCodeBodyVariantAttributeSetsItem[];
};