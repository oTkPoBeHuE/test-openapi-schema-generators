/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Akeneo PIM REST API
 * OpenAPI spec version: 1.0.0
 */
import type { GetReferenceEntitiesCode200AllOfFourLabels } from './getReferenceEntitiesCode200AllOfFourLabels';

export type GetReferenceEntitiesCode200AllOfFour = {
  /** Reference entity code */
  code: string;
  /** Code of the reference entity image */
  image?: string;
  /** Reference entity labels for each locale */
  labels?: GetReferenceEntitiesCode200AllOfFourLabels;
};
