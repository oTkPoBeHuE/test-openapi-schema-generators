/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Akeneo PIM REST API
 * OpenAPI spec version: 1.0.0
 */
import type { CategoryLabels } from './categoryLabels';
import type { CategoryValues } from './categoryValues';

export interface Category {
  /** Category code */
  code: string;
  /** Category labels for each locale */
  labels?: CategoryLabels;
  /** Category code of the parent's category */
  parent?: string;
  /** Position of the category in its level, start from 1 (only available since the 7.0 version and when query parameter "with_position" is set to "true") */
  position?: number;
  /** Date of the last update */
  updated?: string;
  /** Attribute values */
  values?: CategoryValues;
}