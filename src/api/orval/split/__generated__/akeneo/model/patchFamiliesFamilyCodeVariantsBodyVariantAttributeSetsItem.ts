/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Akeneo PIM REST API
 * OpenAPI spec version: 1.0.0
 */

/**
 * Enrichment level
 */
export type PatchFamiliesFamilyCodeVariantsBodyVariantAttributeSetsItem = {
  /** Codes of attributes bind to this enrichment level */
  attributes?: string[];
  /** Codes of attributes used as variant axes */
  axes: string[];
  /** Enrichment level */
  level: number;
};
