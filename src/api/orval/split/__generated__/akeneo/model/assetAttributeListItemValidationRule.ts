/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Akeneo PIM REST API
 * OpenAPI spec version: 1.0.0
 */

/**
 * Validation rule type used to validate the attribute value when the attribute type is `text`
 */
export type AssetAttributeListItemValidationRule = typeof AssetAttributeListItemValidationRule[keyof typeof AssetAttributeListItemValidationRule];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AssetAttributeListItemValidationRule = {
  email: 'email',
  url: 'url',
  regexp: 'regexp',
  none: 'none',
} as const;
