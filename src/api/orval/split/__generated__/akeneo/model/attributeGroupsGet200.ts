/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Akeneo PIM REST API
 * OpenAPI spec version: 1.0.0
 */
import type { AttributeGroupsGet200Labels } from './attributeGroupsGet200Labels';

export type AttributeGroupsGet200 = {
  /** Attribute codes that compose the attribute group */
  attributes?: string[];
  /** Attribute group code */
  code: string;
  /** Attribute group labels for each locale */
  labels?: AttributeGroupsGet200Labels;
  /** Attribute group order among other attribute groups */
  sort_order?: number;
};
