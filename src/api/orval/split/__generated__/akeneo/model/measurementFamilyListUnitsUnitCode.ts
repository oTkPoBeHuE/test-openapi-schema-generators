/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Akeneo PIM REST API
 * OpenAPI spec version: 1.0.0
 */
import type { MeasurementFamilyListUnitsUnitCodeConvertFromStandardItem } from './measurementFamilyListUnitsUnitCodeConvertFromStandardItem';
import type { MeasurementFamilyListUnitsUnitCodeLabels } from './measurementFamilyListUnitsUnitCodeLabels';

export type MeasurementFamilyListUnitsUnitCode = {
  /** Measurement unit code. More details <a href='/concepts/target-market-settings.html#focus-on-the-units'>here</a>. */
  code?: string;
  /** Calculation to convert the unit from the standard unit. More details <a href='/concepts/target-market-settings.html#focus-on-the-units'>here</a>. */
  convert_from_standard?: MeasurementFamilyListUnitsUnitCodeConvertFromStandardItem[];
  /** Unit labels for each locale. More details <a href='/concepts/target-market-settings.html#focus-on-the-units'>here</a>. */
  labels?: MeasurementFamilyListUnitsUnitCodeLabels;
  /** Measurement unit symbol. More details <a href='/concepts/target-market-settings.html#focus-on-the-units'>here</a>. */
  symbol?: string;
};
