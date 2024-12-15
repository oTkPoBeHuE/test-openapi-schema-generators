/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Akeneo PIM REST API
 * OpenAPI spec version: 1.0.0
 */
import type { PostFamiliesBodyAttributeRequirements } from './postFamiliesBodyAttributeRequirements';
import type { PostFamiliesBodyLabels } from './postFamiliesBodyLabels';

export type PostFamiliesBody = {
  /** Attribute code used as the main picture in the user interface (only since v2.0) */
  attribute_as_image?: string;
  /** Attribute code used as label */
  attribute_as_label: string;
  /** Attributes codes of the family that are required for the completeness calculation for each channel */
  attribute_requirements?: PostFamiliesBodyAttributeRequirements;
  /** Attributes codes that compose the family */
  attributes?: string[];
  /** Family code */
  code: string;
  /** Family labels for each locale */
  labels?: PostFamiliesBodyLabels;
};
