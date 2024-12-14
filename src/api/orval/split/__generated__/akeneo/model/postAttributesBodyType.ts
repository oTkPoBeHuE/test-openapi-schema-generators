/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Akeneo PIM REST API
 * OpenAPI spec version: 1.0.0
 */

/**
 * Attribute type. See <a href='/concepts/catalog-structure.html#attribute'>type</a> section for more details.
 */
export type PostAttributesBodyType = typeof PostAttributesBodyType[keyof typeof PostAttributesBodyType];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PostAttributesBodyType = {
  pim_catalog_identifier: 'pim_catalog_identifier',
  pim_catalog_metric: 'pim_catalog_metric',
  pim_catalog_number: 'pim_catalog_number',
  pim_catalog_reference_data_multi_select: 'pim_catalog_reference_data_multi_select',
  pim_catalog_reference_data_simple_select: 'pim_catalog_reference_data_simple_select',
  pim_catalog_simpleselect: 'pim_catalog_simpleselect',
  pim_catalog_multiselect: 'pim_catalog_multiselect',
  pim_catalog_date: 'pim_catalog_date',
  pim_catalog_textarea: 'pim_catalog_textarea',
  pim_catalog_text: 'pim_catalog_text',
  pim_catalog_file: 'pim_catalog_file',
  pim_catalog_image: 'pim_catalog_image',
  pim_catalog_price_collection: 'pim_catalog_price_collection',
  pim_catalog_boolean: 'pim_catalog_boolean',
  akeneo_reference_entity: 'akeneo_reference_entity',
  akeneo_reference_entity_collection: 'akeneo_reference_entity_collection',
  pim_catalog_asset_collection: 'pim_catalog_asset_collection',
} as const;
