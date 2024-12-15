/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Akeneo PIM REST API
 * OpenAPI spec version: 1.0.0
 */

/**
 * User defined validation constraints on the cell content
 */
export type PostAttributesBodyTableConfigurationItemValidations = {
  /** whether the value of a numeric cell can hold a decimal part */
  decimals_allowed?: boolean;
  /** maximum value of a numeric cell */
  max?: number;
  /** maximum length of a text cell */
  max_length?: number;
  /** minimum value of a numeric cell */
  min?: number;
};
