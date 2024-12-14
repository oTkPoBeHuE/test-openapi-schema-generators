/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Akeneo PIM REST API
 * OpenAPI spec version: 1.0.0
 */
import type { GetFamiliesCode200AttributeRequirements } from './getFamiliesCode200AttributeRequirements';
import type { GetFamiliesCode200Labels } from './getFamiliesCode200Labels';

export type GetFamiliesCode200 = {
  /** Attribute code used as the main picture in the user interface (only since v2.0) */
  attribute_as_image?: string;
  /** Attribute code used as label */
  attribute_as_label: string;
  /** Attributes codes of the family that are required for the completeness calculation for each channel */
  attribute_requirements?: GetFamiliesCode200AttributeRequirements;
  /** Attributes codes that compose the family */
  attributes?: string[];
  /** Family code */
  code: string;
  /** Family labels for each locale */
  labels?: GetFamiliesCode200Labels;
};
