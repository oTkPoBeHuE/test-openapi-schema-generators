/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Akeneo PIM REST API
 * OpenAPI spec version: 1.0.0
 */
import type { AssociationTypesPostBodyLabels } from './associationTypesPostBodyLabels';

export type AssociationTypesPostBody = {
  /** Association type code */
  code: string;
  /** When true, the association is a quantified association (Only available in the PIM Serenity version.) */
  is_quantified?: boolean;
  /** When true, the association is a two-way association (Only available in the PIM Serenity version.) */
  is_two_way?: boolean;
  /** Association type labels for each locale */
  labels?: AssociationTypesPostBodyLabels;
};
