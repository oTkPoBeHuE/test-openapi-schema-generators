/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Akeneo PIM REST API
 * OpenAPI spec version: 1.0.0
 */

/**
 * Attribute type. See <a href='/concepts/asset-manager.html#asset-attribute'>type</a> section for more details.
 */
export type AssetAttributeListItemType = typeof AssetAttributeListItemType[keyof typeof AssetAttributeListItemType];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AssetAttributeListItemType = {
  text: 'text',
  media_link: 'media_link',
  number: 'number',
  media_file: 'media_file',
  single_option: 'single_option',
  multiple_options: 'multiple_options',
  reference_entity_single_link: 'reference_entity_single_link',
  reference_entity_multiple_links: 'reference_entity_multiple_links',
  boolean: 'boolean',
} as const;