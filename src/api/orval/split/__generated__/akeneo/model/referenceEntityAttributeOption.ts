/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Akeneo PIM REST API
 * OpenAPI spec version: 1.0.0
 */
import type { ReferenceEntityAttributeOptionLabels } from './referenceEntityAttributeOptionLabels';

export interface ReferenceEntityAttributeOption {
  /** Attribute's option code */
  code: string;
  /** Attribute labels for each locale */
  labels?: ReferenceEntityAttributeOptionLabels;
}