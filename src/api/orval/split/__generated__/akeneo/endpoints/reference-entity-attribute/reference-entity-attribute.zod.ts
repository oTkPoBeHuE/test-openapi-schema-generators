/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Akeneo PIM REST API
 * OpenAPI spec version: 1.0.0
 */
import {
  z as zod
} from 'zod'

/**
 * This endpoint allows you to get the list of attributes of a given reference entity.
 * @summary Get the list of attributes of a given reference entity
 */
export const getReferenceEntitiesCodeAttributesParams = zod.object({
  "reference_entity_code": zod.string()
})

export const getReferenceEntitiesCodeAttributesResponseItem = zod.object({
  "allowed_extensions": zod.array(zod.string()).optional(),
  "code": zod.string(),
  "decimals_allowed": zod.boolean().optional(),
  "is_required_for_completeness": zod.boolean().optional(),
  "is_rich_text_editor": zod.boolean().optional(),
  "is_textarea": zod.boolean().optional(),
  "labels": zod.object({
  "localeCode": zod.string().optional()
}).optional(),
  "max_characters": zod.number().optional(),
  "max_file_size": zod.string().optional(),
  "max_value": zod.string().optional(),
  "min_value": zod.string().optional(),
  "reference_entity_code": zod.string().optional(),
  "type": zod.enum(['text', 'image', 'number', 'single_option', 'multiple_options', 'reference_entity_single_link', 'reference_entity_multiple_links']),
  "validation_regexp": zod.string().optional(),
  "validation_rule": zod.enum(['email', 'url', 'regexp', 'none']).optional(),
  "value_per_channel": zod.boolean().optional(),
  "value_per_locale": zod.boolean().optional()
})
export const getReferenceEntitiesCodeAttributesResponse = zod.array(getReferenceEntitiesCodeAttributesResponseItem)

/**
 * This endpoint allows you to get the information about a given attribute for a given reference entity.
 * @summary Get an attribute of a given reference entity
 */
export const getReferenceEntityAttributesCodeParams = zod.object({
  "reference_entity_code": zod.string(),
  "code": zod.string()
})

export const getReferenceEntityAttributesCodeResponse = zod.object({
  "allowed_extensions": zod.array(zod.string()).optional(),
  "code": zod.string(),
  "decimals_allowed": zod.boolean().optional(),
  "is_required_for_completeness": zod.boolean().optional(),
  "is_rich_text_editor": zod.boolean().optional(),
  "is_textarea": zod.boolean().optional(),
  "labels": zod.object({
  "localeCode": zod.string().optional()
}).optional(),
  "max_characters": zod.number().optional(),
  "max_file_size": zod.string().optional(),
  "max_value": zod.string().optional(),
  "min_value": zod.string().optional(),
  "reference_entity_code": zod.string().optional(),
  "type": zod.enum(['text', 'image', 'number', 'single_option', 'multiple_options', 'reference_entity_single_link', 'reference_entity_multiple_links']),
  "validation_regexp": zod.string().optional(),
  "validation_rule": zod.enum(['email', 'url', 'regexp', 'none']).optional(),
  "value_per_channel": zod.boolean().optional(),
  "value_per_locale": zod.boolean().optional()
})

/**
 * This endpoint allows you to update a given attribute for a given renference entity. Note that if the attribute does not already exist for the given reference entity, it creates it.
 * @summary Update/create an attribute of a given reference entity
 */
export const patchReferenceEntityAttributesCodeParams = zod.object({
  "reference_entity_code": zod.string(),
  "code": zod.string()
})

export const patchReferenceEntityAttributesCodeBody = zod.object({
  "allowed_extensions": zod.array(zod.string()).optional(),
  "code": zod.string(),
  "decimals_allowed": zod.boolean().optional(),
  "is_required_for_completeness": zod.boolean().optional(),
  "is_rich_text_editor": zod.boolean().optional(),
  "is_textarea": zod.boolean().optional(),
  "labels": zod.object({
  "localeCode": zod.string().optional()
}).optional(),
  "max_characters": zod.number().optional(),
  "max_file_size": zod.string().optional(),
  "max_value": zod.string().optional(),
  "min_value": zod.string().optional(),
  "reference_entity_code": zod.string().optional(),
  "type": zod.enum(['text', 'image', 'number', 'single_option', 'multiple_options', 'reference_entity_single_link', 'reference_entity_multiple_links']),
  "validation_regexp": zod.string().optional(),
  "validation_rule": zod.enum(['email', 'url', 'regexp', 'none']).optional(),
  "value_per_channel": zod.boolean().optional(),
  "value_per_locale": zod.boolean().optional()
})

