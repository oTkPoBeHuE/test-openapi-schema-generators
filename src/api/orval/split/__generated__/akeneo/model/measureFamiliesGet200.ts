/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Akeneo PIM REST API
 * OpenAPI spec version: 1.0.0
 */
import type { MeasureFamiliesGet200UnitsItem } from './measureFamiliesGet200UnitsItem';

export type MeasureFamiliesGet200 = {
  /** Measure family code */
  code: string;
  /** Measure family standard */
  standard?: string;
  /** Family units */
  units?: MeasureFamiliesGet200UnitsItem[];
};