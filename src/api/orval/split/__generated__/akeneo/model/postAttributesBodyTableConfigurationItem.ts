/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Akeneo PIM REST API
 * OpenAPI spec version: 1.0.0
 */
import type { PostAttributesBodyTableConfigurationItemDataType } from './postAttributesBodyTableConfigurationItemDataType';
import type { PostAttributesBodyTableConfigurationItemLabels } from './postAttributesBodyTableConfigurationItemLabels';
import type { PostAttributesBodyTableConfigurationItemValidations } from './postAttributesBodyTableConfigurationItemValidations';

export type PostAttributesBodyTableConfigurationItem = {
  /** Column code */
  code: string;
  /** Column data type */
  data_type: PostAttributesBodyTableConfigurationItemDataType;
  /** Defines if the column should be entirely filled for the attribute to be considered complete */
  is_required_for_completeness?: boolean;
  /** Column labels for each locale */
  labels?: PostAttributesBodyTableConfigurationItemLabels;
  /** User defined validation constraints on the cell content */
  validations?: PostAttributesBodyTableConfigurationItemValidations;
};
