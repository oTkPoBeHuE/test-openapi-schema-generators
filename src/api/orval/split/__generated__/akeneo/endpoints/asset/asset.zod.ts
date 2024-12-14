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
 * This endpoint allows you to get a list of assets of a given asset family. Assets are paginated. This endpoint is case sensitive on the asset family code.
 * @summary Get the list of the assets of a given asset family
 */
export const getAssetsParams = zod.object({
  "asset_family_code": zod.string()
})

export const getAssetsQueryParams = zod.object({
  "search": zod.string().optional(),
  "channel": zod.string().optional(),
  "locales": zod.string().optional(),
  "search_after": zod.string().optional()
})

export const getAssetsResponse = zod.object({
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
  "_items": zod.array(zod.object({
  "_links": zod.object({
  "self": zod.object({
  "href": zod.string().optional()
}).optional()
}).optional()
}).and(zod.object({
  "code": zod.string(),
  "created": zod.string().optional(),
  "updated": zod.string().optional(),
  "values": zod.object({
  "attributeCode": zod.array(zod.object({
  "channel": zod.string().optional(),
  "data": zod.object({

}).optional(),
  "locale": zod.string().optional()
})).optional()
}).optional()
}))).optional()
}).optional()
}))

/**
 * This endpoint allows you to update and/or create several assets of one given asset family at once. Learn more about the <a href="/documentation/update.html#patch-asset-attribute-values">Update behavior</a>. Note that if the asset does not already exist for the given asset family, it creates it. This endpoint is case sensitive on the asset family code.
 * @summary Update/create several assets
 */
export const patchAssetsParams = zod.object({
  "asset_family_code": zod.string()
})

export const patchAssetsBodyItem = zod.object({
  "code": zod.string(),
  "created": zod.string().optional(),
  "updated": zod.string().optional(),
  "values": zod.object({
  "attributeCode": zod.array(zod.object({
  "channel": zod.string().optional(),
  "data": zod.object({

}).optional(),
  "locale": zod.string().optional()
})).optional()
}).optional()
})
export const patchAssetsBody = zod.array(patchAssetsBodyItem)

export const patchAssetsResponseItem = zod.object({
  "code": zod.string().optional(),
  "message": zod.string().optional(),
  "status_code": zod.number().optional()
})
export const patchAssetsResponse = zod.array(patchAssetsResponseItem)

/**
 * This endpoint allows you to delete a given asset. This endpoint is case sensitive on the asset family code.
 * @summary Delete an asset
 */
export const deleteAssetsCodeParams = zod.object({
  "asset_family_code": zod.string(),
  "code": zod.string()
})

/**
 * This endpoint allows you to get the information about a given asset for a given asset family. This endpoint is case sensitive on the asset family code.
 * @summary Get an asset of a given asset family
 */
export const getAssetsCodeParams = zod.object({
  "asset_family_code": zod.string(),
  "code": zod.string()
})

export const getAssetsCodeResponse = zod.object({
  "code": zod.string(),
  "created": zod.string().optional(),
  "updated": zod.string().optional(),
  "values": zod.object({
  "attributeCode": zod.array(zod.object({
  "channel": zod.string().optional(),
  "data": zod.object({

}).optional(),
  "locale": zod.string().optional()
})).optional()
}).optional()
})

/**
 * This endpoint allows you to update a given asset of a given asset family. Learn more about the <a href="/documentation/update.html#patch-asset-attribute-values">Update behavior</a>. Note that if the asset does not already exist for the given asset family, it creates it. This endpoint is case sensitive on the asset family code.
 * @summary Update/create an asset
 */
export const patchAssetCodeParams = zod.object({
  "asset_family_code": zod.string(),
  "code": zod.string()
})

export const patchAssetCodeBody = zod.object({
  "code": zod.string(),
  "created": zod.string().optional(),
  "updated": zod.string().optional(),
  "values": zod.object({
  "attributeCode": zod.array(zod.object({
  "channel": zod.string().optional(),
  "data": zod.object({

}).optional(),
  "locale": zod.string().optional()
})).optional()
}).optional()
})
