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
 * This endpoint allows you to get a list of attributes. Attributes are paginated and sorted by code.
 * @summary Get list of attributes
 */
export const getAttributesQueryLimitMax = 100;


export const getAttributesQueryParams = zod.object({
  "search": zod.string().optional(),
  "page": zod.number().optional(),
  "limit": zod.number().min(1).max(getAttributesQueryLimitMax).optional(),
  "with_count": zod.boolean().optional(),
  "with_table_select_options": zod.boolean().optional()
})

export const getAttributesResponse = zod.object({
  "_links": zod.object({
  "first": zod.object({
  "href": zod.string().optional()
}).optional(),
  "next": zod.object({
  "href": zod.string().optional()
}).optional(),
  "previous": zod.object({
  "href": zod.string().optional()
}).optional(),
  "self": zod.object({
  "href": zod.string().optional()
}).optional()
}).optional(),
  "current_page": zod.number().optional()
}).and(zod.object({
  "_embedded": zod.object({
  "items": zod.array(zod.object({
  "_links": zod.object({
  "self": zod.object({
  "href": zod.string().optional()
}).optional()
}).optional()
}).and(zod.object({
  "allowed_extensions": zod.array(zod.string()).optional(),
  "available_locales": zod.array(zod.string()).optional(),
  "code": zod.string(),
  "date_max": zod.string().datetime().optional(),
  "date_min": zod.string().datetime().optional(),
  "decimals_allowed": zod.boolean().optional(),
  "default_metric_unit": zod.string().optional(),
  "default_value": zod.boolean().optional(),
  "group": zod.string(),
  "group_labels": zod.object({
  "localeCode": zod.string().optional()
}).optional(),
  "labels": zod.object({
  "localeCode": zod.string().optional()
}).optional(),
  "localizable": zod.boolean().optional(),
  "max_characters": zod.number().optional(),
  "max_file_size": zod.string().optional(),
  "metric_family": zod.string().optional(),
  "negative_allowed": zod.boolean().optional(),
  "number_max": zod.string().optional(),
  "number_min": zod.string().optional(),
  "reference_data_name": zod.string().optional(),
  "scopable": zod.boolean().optional(),
  "sort_order": zod.number().optional(),
  "table_configuration": zod.array(zod.object({
  "code": zod.string(),
  "data_type": zod.enum(['select', 'text', 'number', 'boolean']),
  "is_required_for_completeness": zod.boolean().optional(),
  "labels": zod.object({
  "localeCode": zod.string().optional()
}).optional(),
  "validations": zod.object({
  "decimals_allowed": zod.boolean().optional(),
  "max": zod.number().optional(),
  "max_length": zod.number().optional(),
  "min": zod.number().optional()
}).optional()
})).optional(),
  "type": zod.enum(['pim_catalog_identifier', 'pim_catalog_metric', 'pim_catalog_number', 'pim_catalog_reference_data_multi_select', 'pim_catalog_reference_data_simple_select', 'pim_catalog_simpleselect', 'pim_catalog_multiselect', 'pim_catalog_date', 'pim_catalog_textarea', 'pim_catalog_text', 'pim_catalog_file', 'pim_catalog_image', 'pim_catalog_price_collection', 'pim_catalog_boolean', 'akeneo_reference_entity', 'akeneo_reference_entity_collection', 'pim_catalog_asset_collection']),
  "unique": zod.boolean().optional(),
  "useable_as_grid_filter": zod.boolean().optional(),
  "validation_regexp": zod.string().optional(),
  "validation_rule": zod.string().optional(),
  "wysiwyg_enabled": zod.boolean().optional()
}))).optional()
}).optional()
}))

/**
 * This endpoint allows you to update and/or create several attributes at once.
 * @summary Update/create several attributes
 */
export const patchAttributesBody = zod.object({
  "allowed_extensions": zod.array(zod.string()).optional(),
  "available_locales": zod.array(zod.string()).optional(),
  "code": zod.string(),
  "date_max": zod.string().datetime().optional(),
  "date_min": zod.string().datetime().optional(),
  "decimals_allowed": zod.boolean().optional(),
  "default_metric_unit": zod.string().optional(),
  "default_value": zod.boolean().optional(),
  "group": zod.string(),
  "group_labels": zod.object({
  "localeCode": zod.string().optional()
}).optional(),
  "labels": zod.object({
  "localeCode": zod.string().optional()
}).optional(),
  "localizable": zod.boolean().optional(),
  "max_characters": zod.number().optional(),
  "max_file_size": zod.string().optional(),
  "metric_family": zod.string().optional(),
  "negative_allowed": zod.boolean().optional(),
  "number_max": zod.string().optional(),
  "number_min": zod.string().optional(),
  "reference_data_name": zod.string().optional(),
  "scopable": zod.boolean().optional(),
  "sort_order": zod.number().optional(),
  "table_configuration": zod.array(zod.object({
  "code": zod.string(),
  "data_type": zod.enum(['select', 'text', 'number', 'boolean']),
  "is_required_for_completeness": zod.boolean().optional(),
  "labels": zod.object({
  "localeCode": zod.string().optional()
}).optional(),
  "validations": zod.object({
  "decimals_allowed": zod.boolean().optional(),
  "max": zod.number().optional(),
  "max_length": zod.number().optional(),
  "min": zod.number().optional()
}).optional()
})).optional(),
  "type": zod.enum(['pim_catalog_identifier', 'pim_catalog_metric', 'pim_catalog_number', 'pim_catalog_reference_data_multi_select', 'pim_catalog_reference_data_simple_select', 'pim_catalog_simpleselect', 'pim_catalog_multiselect', 'pim_catalog_date', 'pim_catalog_textarea', 'pim_catalog_text', 'pim_catalog_file', 'pim_catalog_image', 'pim_catalog_price_collection', 'pim_catalog_boolean', 'akeneo_reference_entity', 'akeneo_reference_entity_collection', 'pim_catalog_asset_collection']),
  "unique": zod.boolean().optional(),
  "useable_as_grid_filter": zod.boolean().optional(),
  "validation_regexp": zod.string().optional(),
  "validation_rule": zod.string().optional(),
  "wysiwyg_enabled": zod.boolean().optional()
})

export const patchAttributesResponse = zod.object({
  "code": zod.string().optional(),
  "identifier": zod.string().optional(),
  "line": zod.number().optional(),
  "message": zod.string().optional(),
  "status_code": zod.number().optional()
})

/**
 * This endpoint allows you to create a new attribute.
 * @summary Create a new attribute
 */
export const postAttributesBody = zod.object({
  "allowed_extensions": zod.array(zod.string()).optional(),
  "available_locales": zod.array(zod.string()).optional(),
  "code": zod.string(),
  "date_max": zod.string().datetime().optional(),
  "date_min": zod.string().datetime().optional(),
  "decimals_allowed": zod.boolean().optional(),
  "default_metric_unit": zod.string().optional(),
  "default_value": zod.boolean().optional(),
  "group": zod.string(),
  "group_labels": zod.object({
  "localeCode": zod.string().optional()
}).optional(),
  "labels": zod.object({
  "localeCode": zod.string().optional()
}).optional(),
  "localizable": zod.boolean().optional(),
  "max_characters": zod.number().optional(),
  "max_file_size": zod.string().optional(),
  "metric_family": zod.string().optional(),
  "negative_allowed": zod.boolean().optional(),
  "number_max": zod.string().optional(),
  "number_min": zod.string().optional(),
  "reference_data_name": zod.string().optional(),
  "scopable": zod.boolean().optional(),
  "sort_order": zod.number().optional(),
  "table_configuration": zod.array(zod.object({
  "code": zod.string(),
  "data_type": zod.enum(['select', 'text', 'number', 'boolean']),
  "is_required_for_completeness": zod.boolean().optional(),
  "labels": zod.object({
  "localeCode": zod.string().optional()
}).optional(),
  "validations": zod.object({
  "decimals_allowed": zod.boolean().optional(),
  "max": zod.number().optional(),
  "max_length": zod.number().optional(),
  "min": zod.number().optional()
}).optional()
})).optional(),
  "type": zod.enum(['pim_catalog_identifier', 'pim_catalog_metric', 'pim_catalog_number', 'pim_catalog_reference_data_multi_select', 'pim_catalog_reference_data_simple_select', 'pim_catalog_simpleselect', 'pim_catalog_multiselect', 'pim_catalog_date', 'pim_catalog_textarea', 'pim_catalog_text', 'pim_catalog_file', 'pim_catalog_image', 'pim_catalog_price_collection', 'pim_catalog_boolean', 'akeneo_reference_entity', 'akeneo_reference_entity_collection', 'pim_catalog_asset_collection']),
  "unique": zod.boolean().optional(),
  "useable_as_grid_filter": zod.boolean().optional(),
  "validation_regexp": zod.string().optional(),
  "validation_rule": zod.string().optional(),
  "wysiwyg_enabled": zod.boolean().optional()
})

/**
 * This endpoint allows you to get the information about a given attribute.
 * @summary Get an attribute
 */
export const getAttributesCodeParams = zod.object({
  "code": zod.string()
})

export const getAttributesCodeQueryParams = zod.object({
  "with_table_select_options": zod.boolean().optional()
})

export const getAttributesCodeResponse = zod.object({
  "allowed_extensions": zod.array(zod.string()).optional(),
  "available_locales": zod.array(zod.string()).optional(),
  "code": zod.string(),
  "date_max": zod.string().datetime().optional(),
  "date_min": zod.string().datetime().optional(),
  "decimals_allowed": zod.boolean().optional(),
  "default_metric_unit": zod.string().optional(),
  "default_value": zod.boolean().optional(),
  "group": zod.string(),
  "group_labels": zod.object({
  "localeCode": zod.string().optional()
}).optional(),
  "labels": zod.object({
  "localeCode": zod.string().optional()
}).optional(),
  "localizable": zod.boolean().optional(),
  "max_characters": zod.number().optional(),
  "max_file_size": zod.string().optional(),
  "metric_family": zod.string().optional(),
  "negative_allowed": zod.boolean().optional(),
  "number_max": zod.string().optional(),
  "number_min": zod.string().optional(),
  "reference_data_name": zod.string().optional(),
  "scopable": zod.boolean().optional(),
  "sort_order": zod.number().optional(),
  "table_configuration": zod.array(zod.object({
  "code": zod.string(),
  "data_type": zod.enum(['select', 'text', 'number', 'boolean']),
  "is_required_for_completeness": zod.boolean().optional(),
  "labels": zod.object({
  "localeCode": zod.string().optional()
}).optional(),
  "validations": zod.object({
  "decimals_allowed": zod.boolean().optional(),
  "max": zod.number().optional(),
  "max_length": zod.number().optional(),
  "min": zod.number().optional()
}).optional()
})).optional(),
  "type": zod.enum(['pim_catalog_identifier', 'pim_catalog_metric', 'pim_catalog_number', 'pim_catalog_reference_data_multi_select', 'pim_catalog_reference_data_simple_select', 'pim_catalog_simpleselect', 'pim_catalog_multiselect', 'pim_catalog_date', 'pim_catalog_textarea', 'pim_catalog_text', 'pim_catalog_file', 'pim_catalog_image', 'pim_catalog_price_collection', 'pim_catalog_boolean', 'akeneo_reference_entity', 'akeneo_reference_entity_collection', 'pim_catalog_asset_collection']),
  "unique": zod.boolean().optional(),
  "useable_as_grid_filter": zod.boolean().optional(),
  "validation_regexp": zod.string().optional(),
  "validation_rule": zod.string().optional(),
  "wysiwyg_enabled": zod.boolean().optional()
})

/**
 * This endpoint allows you to update a given attribute. Know more about <a href="/documentation/update.html#update-behavior">Update behavior</a>. Note that if no attribute exists for the given code, it creates it.
 * @summary Update/create an attribute
 */
export const patchAttributesCodeParams = zod.object({
  "code": zod.string()
})

export const patchAttributesCodeBody = zod.object({
  "allowed_extensions": zod.array(zod.string()).optional(),
  "available_locales": zod.array(zod.string()).optional(),
  "code": zod.string(),
  "date_max": zod.string().datetime().optional(),
  "date_min": zod.string().datetime().optional(),
  "decimals_allowed": zod.boolean().optional(),
  "default_metric_unit": zod.string().optional(),
  "default_value": zod.boolean().optional(),
  "group": zod.string(),
  "group_labels": zod.object({
  "localeCode": zod.string().optional()
}).optional(),
  "labels": zod.object({
  "localeCode": zod.string().optional()
}).optional(),
  "localizable": zod.boolean().optional(),
  "max_characters": zod.number().optional(),
  "max_file_size": zod.string().optional(),
  "metric_family": zod.string().optional(),
  "negative_allowed": zod.boolean().optional(),
  "number_max": zod.string().optional(),
  "number_min": zod.string().optional(),
  "reference_data_name": zod.string().optional(),
  "scopable": zod.boolean().optional(),
  "sort_order": zod.number().optional(),
  "table_configuration": zod.array(zod.object({
  "code": zod.string(),
  "data_type": zod.enum(['select', 'text', 'number', 'boolean']),
  "is_required_for_completeness": zod.boolean().optional(),
  "labels": zod.object({
  "localeCode": zod.string().optional()
}).optional(),
  "validations": zod.object({
  "decimals_allowed": zod.boolean().optional(),
  "max": zod.number().optional(),
  "max_length": zod.number().optional(),
  "min": zod.number().optional()
}).optional()
})).optional(),
  "type": zod.enum(['pim_catalog_identifier', 'pim_catalog_metric', 'pim_catalog_number', 'pim_catalog_reference_data_multi_select', 'pim_catalog_reference_data_simple_select', 'pim_catalog_simpleselect', 'pim_catalog_multiselect', 'pim_catalog_date', 'pim_catalog_textarea', 'pim_catalog_text', 'pim_catalog_file', 'pim_catalog_image', 'pim_catalog_price_collection', 'pim_catalog_boolean', 'akeneo_reference_entity', 'akeneo_reference_entity_collection', 'pim_catalog_asset_collection']),
  "unique": zod.boolean().optional(),
  "useable_as_grid_filter": zod.boolean().optional(),
  "validation_regexp": zod.string().optional(),
  "validation_rule": zod.string().optional(),
  "wysiwyg_enabled": zod.boolean().optional()
})
