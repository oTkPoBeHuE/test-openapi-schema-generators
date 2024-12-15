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
 * This endpoint allows you to get a list of locales. Locales are paginated and sorted by code.
 * @summary Get a list of locales
 */
export const getLocalesQueryLimitMax = 100;


export const getLocalesQueryParams = zod.object({
  "search": zod.string().optional(),
  "page": zod.number().optional(),
  "limit": zod.number().min(1).max(getLocalesQueryLimitMax).optional(),
  "with_count": zod.boolean().optional()
})

export const getLocalesResponse = zod.object({
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
  "enabled": zod.boolean().optional()
}))).optional()
}).optional()
}))

/**
 * This endpoint allows you to get the information about a given locale.
 * @summary Get a locale
 */
export const getLocalesCodeParams = zod.object({
  "code": zod.string()
})

export const getLocalesCodeResponse = zod.object({
  "code": zod.string(),
  "enabled": zod.boolean().optional()
})
