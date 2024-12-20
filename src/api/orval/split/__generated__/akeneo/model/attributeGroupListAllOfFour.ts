/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Akeneo PIM REST API
 * OpenAPI spec version: 1.0.0
 */
import type { AttributeGroupListAllOfFourLabels } from './attributeGroupListAllOfFourLabels';

export type AttributeGroupListAllOfFour = {
  /** Attribute codes that compose the attribute group */
  attributes?: string[];
  /** Attribute group code */
  code: string;
  /** Attribute group labels for each locale */
  labels?: AttributeGroupListAllOfFourLabels;
  /** Attribute group order among other attribute groups */
  sort_order?: number;
};
