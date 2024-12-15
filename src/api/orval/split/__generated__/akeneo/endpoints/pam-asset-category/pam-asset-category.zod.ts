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
 * This endpoint allows you to get a list of PAM asset categories. PAM asset categories are paginated and sorted by `root/left`.
 * @summary Get list of PAM asset categories
 */
export const getAssetCategoriesQueryLimitMax = 100;


export const getAssetCategoriesQueryParams = zod.object({
  "page": zod.number().optional(),
  "limit": zod.number().min(1).max(getAssetCategoriesQueryLimitMax).optional(),
  "with_count": zod.boolean().optional()
})

export const getAssetCategoriesResponse = zod.object({
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
  "code": zod.string(),
  "labels": zod.object({
  "localeCode": zod.string().optional()
}).optional(),
  "parent": zod.string().optional()
}))).optional()
}).optional()
}))

/**
 * This endpoint allows you to update several PAM asset categories at once.
 * @summary Update/create several PAM asset categories
 */
export const patchAssetCategoriesBody = zod.object({
  "code": zod.string(),
  "labels": zod.object({
  "localeCode": zod.string().optional()
}).optional(),
  "parent": zod.string().optional()
})

export const patchAssetCategoriesResponse = zod.object({
  "code": zod.string().optional(),
  "identifier": zod.string().optional(),
  "line": zod.number().optional(),
  "message": zod.string().optional(),
  "status_code": zod.number().optional()
})

/**
 * This endpoint allows you to create a new PAM asset category.
 * @summary Create a new PAM asset category
 */
export const postAssetCategoriesBody = zod.object({
  "code": zod.string(),
  "labels": zod.object({
  "localeCode": zod.string().optional()
}).optional(),
  "parent": zod.string().optional()
})

/**
 * This endpoint allows you to get the information about a given PAM asset category.
 * @summary Get a PAM asset category
 */
export const getAssetCategoriesCodeParams = zod.object({
  "code": zod.string()
})

export const getAssetCategoriesCodeResponse = zod.object({
  "code": zod.string(),
  "labels": zod.object({
  "localeCode": zod.string().optional()
}).optional(),
  "parent": zod.string().optional()
})

/**
 * This endpoint allows you to update a given PAM asset category. Know more about <a href="/documentation/update.html#update-behavior">Update behavior</a>. Note that if no category exists for the given code, it creates it.
 * @summary Update/create a PAM asset category
 */
export const patchAssetCategoriesCodeParams = zod.object({
  "code": zod.string()
})

export const patchAssetCategoriesCodeBody = zod.object({
  "code": zod.string(),
  "labels": zod.object({
  "localeCode": zod.string().optional()
}).optional(),
  "parent": zod.string().optional()
})
