/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Akeneo PIM REST API
 * OpenAPI spec version: 1.0.0
 */
import type { GetAttributesAttributeCodeOptionsCode200Labels } from './getAttributesAttributeCodeOptionsCode200Labels';

export type GetAttributesAttributeCodeOptionsCode200 = {
  /** Code of attribute related to the attribute option */
  attribute?: string;
  /** Code of option */
  code: string;
  /** Attribute option labels for each locale */
  labels?: GetAttributesAttributeCodeOptionsCode200Labels;
  /** Order of attribute option */
  sort_order?: number;
};
