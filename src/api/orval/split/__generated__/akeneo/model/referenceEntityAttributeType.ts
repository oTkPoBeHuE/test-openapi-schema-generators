/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Akeneo PIM REST API
 * OpenAPI spec version: 1.0.0
 */

/**
 * Attribute type. See <a href='/concepts/reference-entities.html#reference-entity-attribute'>type</a> section for more details.
 */
export type ReferenceEntityAttributeType = typeof ReferenceEntityAttributeType[keyof typeof ReferenceEntityAttributeType];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const ReferenceEntityAttributeType = {
  text: 'text',
  image: 'image',
  number: 'number',
  single_option: 'single_option',
  multiple_options: 'multiple_options',
  reference_entity_single_link: 'reference_entity_single_link',
  reference_entity_multiple_links: 'reference_entity_multiple_links',
} as const;
