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
 * This endpoint allows you to get a list of PAM asset tags. PAM asset tags are paginated.
 * @summary Get list of PAM asset tags
 */
export const getAssetTagsQueryLimitMax = 100;


export const getAssetTagsQueryParams = zod.object({
  "page": zod.number().optional(),
  "limit": zod.number().min(1).max(getAssetTagsQueryLimitMax).optional(),
  "with_count": zod.boolean().optional()
})

export const getAssetTagsResponse = zod.object({
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
  "code": zod.string()
}))).optional()
}).optional()
}))

/**
 * This endpoint allows you to get the information about a given PAM asset tag.
 * @summary Get a PAM asset tag
 */
export const getAssetTagsCodeParams = zod.object({
  "code": zod.string()
})

export const getAssetTagsCodeResponse = zod.object({
  "code": zod.string()
})

/**
 * This endpoint allows you to update a given PAM asset tag. Know more about <a href="/documentation/update.html#update-behavior">Update behavior</a>. Note that if no tag exists for the given code, it creates it.
 * @summary Update/create a PAM asset tag
 */
export const patchAssetTagsCodeParams = zod.object({
  "code": zod.string()
})

export const patchAssetTagsCodeBody = zod.object({
  "code": zod.string()
})

