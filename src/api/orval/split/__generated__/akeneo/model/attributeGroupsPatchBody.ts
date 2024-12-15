/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Akeneo PIM REST API
 * OpenAPI spec version: 1.0.0
 */
import type { AttributeGroupsPatchBodyLabels } from './attributeGroupsPatchBodyLabels';

export type AttributeGroupsPatchBody = {
  /** Attribute codes that compose the attribute group */
  attributes?: string[];
  /** Attribute group code */
  code: string;
  /** Attribute group labels for each locale */
  labels?: AttributeGroupsPatchBodyLabels;
  /** Attribute group order among other attribute groups */
  sort_order?: number;
};