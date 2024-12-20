/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Akeneo PIM REST API
 * OpenAPI spec version: 1.0.0
 */
import type { AttributeTableConfigurationItemDataType } from './attributeTableConfigurationItemDataType';
import type { AttributeTableConfigurationItemLabels } from './attributeTableConfigurationItemLabels';
import type { AttributeTableConfigurationItemValidations } from './attributeTableConfigurationItemValidations';

export type AttributeTableConfigurationItem = {
  /** Column code */
  code: string;
  /** Column data type */
  data_type: AttributeTableConfigurationItemDataType;
  /** Defines if the column should be entirely filled for the attribute to be considered complete */
  is_required_for_completeness?: boolean;
  /** Column labels for each locale */
  labels?: AttributeTableConfigurationItemLabels;
  /** User defined validation constraints on the cell content */
  validations?: AttributeTableConfigurationItemValidations;
};
