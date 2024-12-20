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
 * This endpoint allows you to get a list of asset families. Asset families are paginated.
 * @summary Get list of asset families
 */
export const getAssetFamiliesQueryParams = zod.object({
  "search_after": zod.string().optional()
})

export const getAssetFamiliesResponse = zod.object({
  "_links": zod.object({
  "first": zod.object({
  "href": zod.string().optional()
}).optional(),
  "next": zod.object({
  "href": zod.string().optional()
}).optional(),
  "self": zod.object({
  "href": zod.string().optional()
}).optional()
}).optional()
}).and(zod.object({
  "_embedded": zod.object({
  "items": zod.array(zod.object({
  "_links": zod.object({
  "self": zod.object({
  "href": zod.string().optional()
}).optional()
}).optional()
}).and(zod.object({
  "attribute_as_main_media": zod.string().optional(),
  "code": zod.string(),
  "labels": zod.object({
  "localeCode": zod.string().optional()
}).optional(),
  "naming_convention": zod.object({
  "abort_asset_creation_on_error": zod.boolean().optional(),
  "pattern": zod.string().optional(),
  "source": zod.object({

}).optional()
}).optional(),
  "product_link_rules": zod.array(zod.object({
  "assign_assets_to": zod.array(zod.object({
  "attribute": zod.string(),
  "channel": zod.string().optional(),
  "locale": zod.string().optional(),
  "mode": zod.string()
})).optional(),
  "product_selections": zod.array(zod.object({
  "channel": zod.string().optional(),
  "field": zod.string(),
  "locale": zod.string().optional(),
  "operator": zod.string(),
  "value": zod.string()
})).optional()
})).optional(),
  "transformations": zod.array(zod.object({
  "filename_prefix": zod.string().optional(),
  "filename_suffix": zod.string().optional(),
  "label": zod.string(),
  "operations": zod.object({
  "parameters": zod.object({
  "colorspace": zod.string().optional(),
  "height": zod.number().optional(),
  "quality": zod.number().optional(),
  "ratio": zod.number().optional(),
  "resolution-unit": zod.string().optional(),
  "resolution-x": zod.number().optional(),
  "resolution-y": zod.number().optional(),
  "width": zod.number().optional()
}).optional(),
  "type": zod.string().optional()
}),
  "source": zod.object({
  "attribute": zod.string(),
  "channel": zod.string(),
  "locale": zod.string()
}),
  "target": zod.object({
  "attribute": zod.string(),
  "channel": zod.string(),
  "locale": zod.string()
})
})).optional()
}))).optional()
}).optional()
}))

/**
 * This endpoint allows you to get the information about a given asset family.
 * @summary Get an asset family
 */
export const getAssetFamilyCodeParams = zod.object({
  "code": zod.string()
})

export const getAssetFamilyCodeResponse = zod.object({
  "attribute_as_main_media": zod.string().optional(),
  "code": zod.string(),
  "labels": zod.object({
  "localeCode": zod.string().optional()
}).optional(),
  "naming_convention": zod.object({
  "abort_asset_creation_on_error": zod.boolean().optional(),
  "pattern": zod.string().optional(),
  "source": zod.object({

}).optional()
}).optional(),
  "product_link_rules": zod.array(zod.object({
  "assign_assets_to": zod.array(zod.object({
  "attribute": zod.string(),
  "channel": zod.string().optional(),
  "locale": zod.string().optional(),
  "mode": zod.string()
})).optional(),
  "product_selections": zod.array(zod.object({
  "channel": zod.string().optional(),
  "field": zod.string(),
  "locale": zod.string().optional(),
  "operator": zod.string(),
  "value": zod.string()
})).optional()
})).optional(),
  "transformations": zod.array(zod.object({
  "filename_prefix": zod.string().optional(),
  "filename_suffix": zod.string().optional(),
  "label": zod.string(),
  "operations": zod.object({
  "parameters": zod.object({
  "colorspace": zod.string().optional(),
  "height": zod.number().optional(),
  "quality": zod.number().optional(),
  "ratio": zod.number().optional(),
  "resolution-unit": zod.string().optional(),
  "resolution-x": zod.number().optional(),
  "resolution-y": zod.number().optional(),
  "width": zod.number().optional()
}).optional(),
  "type": zod.string().optional()
}),
  "source": zod.object({
  "attribute": zod.string(),
  "channel": zod.string(),
  "locale": zod.string()
}),
  "target": zod.object({
  "attribute": zod.string(),
  "channel": zod.string(),
  "locale": zod.string()
})
})).optional()
})

/**
 * This endpoint allows you to update a given asset family. Note that if the asset family does not already exist, it creates it.
 * @summary Update/create an asset family
 */
export const patchAssetFamilyCodeParams = zod.object({
  "code": zod.string()
})

export const patchAssetFamilyCodeBody = zod.object({
  "attribute_as_main_media": zod.string().optional(),
  "code": zod.string(),
  "labels": zod.object({
  "localeCode": zod.string().optional()
}).optional(),
  "naming_convention": zod.object({
  "abort_asset_creation_on_error": zod.boolean().optional(),
  "pattern": zod.string().optional(),
  "source": zod.object({

}).optional()
}).optional(),
  "product_link_rules": zod.array(zod.object({
  "assign_assets_to": zod.array(zod.object({
  "attribute": zod.string(),
  "channel": zod.string().optional(),
  "locale": zod.string().optional(),
  "mode": zod.string()
})).optional(),
  "product_selections": zod.array(zod.object({
  "channel": zod.string().optional(),
  "field": zod.string(),
  "locale": zod.string().optional(),
  "operator": zod.string(),
  "value": zod.string()
})).optional()
})).optional(),
  "transformations": zod.array(zod.object({
  "filename_prefix": zod.string().optional(),
  "filename_suffix": zod.string().optional(),
  "label": zod.string(),
  "operations": zod.object({
  "parameters": zod.object({
  "colorspace": zod.string().optional(),
  "height": zod.number().optional(),
  "quality": zod.number().optional(),
  "ratio": zod.number().optional(),
  "resolution-unit": zod.string().optional(),
  "resolution-x": zod.number().optional(),
  "resolution-y": zod.number().optional(),
  "width": zod.number().optional()
}).optional(),
  "type": zod.string().optional()
}),
  "source": zod.object({
  "attribute": zod.string(),
  "channel": zod.string(),
  "locale": zod.string()
}),
  "target": zod.object({
  "attribute": zod.string(),
  "channel": zod.string(),
  "locale": zod.string()
})
})).optional()
})

