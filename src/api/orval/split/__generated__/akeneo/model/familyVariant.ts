/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Akeneo PIM REST API
 * OpenAPI spec version: 1.0.0
 */
import type { FamilyVariantLabels } from './familyVariantLabels';
import type { FamilyVariantVariantAttributeSetsItem } from './familyVariantVariantAttributeSetsItem';

export interface FamilyVariant {
  /** Family variant code */
  code: string;
  /** Family variant labels for each locale */
  labels?: FamilyVariantLabels;
  /** Attributes distribution according to the enrichment level */
  variant_attribute_sets: FamilyVariantVariantAttributeSetsItem[];
}
