/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Akeneo PIM REST API
 * OpenAPI spec version: 1.0.0
 */
import type { ReferenceEntityAllOfFourLabels } from './referenceEntityAllOfFourLabels';

export type ReferenceEntityAllOfFour = {
  /** Reference entity code */
  code: string;
  /** Code of the reference entity image */
  image?: string;
  /** Reference entity labels for each locale */
  labels?: ReferenceEntityAllOfFourLabels;
};
