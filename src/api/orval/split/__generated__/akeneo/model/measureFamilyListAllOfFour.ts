/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Akeneo PIM REST API
 * OpenAPI spec version: 1.0.0
 */
import type { MeasureFamilyListAllOfFourUnitsItem } from './measureFamilyListAllOfFourUnitsItem';

export type MeasureFamilyListAllOfFour = {
  /** Measure family code */
  code: string;
  /** Measure family standard */
  standard?: string;
  /** Family units */
  units?: MeasureFamilyListAllOfFourUnitsItem[];
};