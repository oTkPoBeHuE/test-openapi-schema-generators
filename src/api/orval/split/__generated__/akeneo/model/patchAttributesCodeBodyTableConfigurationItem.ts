/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Akeneo PIM REST API
 * OpenAPI spec version: 1.0.0
 */
import type { PatchAttributesCodeBodyTableConfigurationItemDataType } from './patchAttributesCodeBodyTableConfigurationItemDataType';
import type { PatchAttributesCodeBodyTableConfigurationItemLabels } from './patchAttributesCodeBodyTableConfigurationItemLabels';
import type { PatchAttributesCodeBodyTableConfigurationItemValidations } from './patchAttributesCodeBodyTableConfigurationItemValidations';

export type PatchAttributesCodeBodyTableConfigurationItem = {
  /** Column code */
  code: string;
  /** Column data type */
  data_type: PatchAttributesCodeBodyTableConfigurationItemDataType;
  /** Defines if the column should be entirely filled for the attribute to be considered complete */
  is_required_for_completeness?: boolean;
  /** Column labels for each locale */
  labels?: PatchAttributesCodeBodyTableConfigurationItemLabels;
  /** User defined validation constraints on the cell content */
  validations?: PatchAttributesCodeBodyTableConfigurationItemValidations;
};