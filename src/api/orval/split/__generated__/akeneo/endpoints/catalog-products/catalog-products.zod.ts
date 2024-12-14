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
 * This endpoint allows you to get the list of uuids of products contained in a catalog. Please, note that a disabled catalog can return an HTTP 200 with a payload containing an error message, for more details see the <a href="apps/catalogs.html#troubleshooting">App Catalog</a> section.
 * @summary Get the list of product uuids
 */
export const getAppCatalogProductUuidsParams = zod.object({
  "id": zod.string().uuid()
})

export const getAppCatalogProductUuidsQueryLimitMax = 1000;


export const getAppCatalogProductUuidsQueryParams = zod.object({
  "search_after": zod.string().optional(),
  "limit": zod.number().min(1).max(getAppCatalogProductUuidsQueryLimitMax).optional(),
  "updated_before": zod.string().date().optional(),
  "updated_after": zod.string().date().optional()
})

export const getAppCatalogProductUuidsResponse = zod.object({
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
  "items": zod.array(zod.string().uuid()).optional()
}).optional()
}))

/**
 * This endpoint allows you to get the list of products related to a catalog. Products are paginated and they can be filtered. In the Enterprise Edition, permissions based on your app settings are applied to the set of products you request. Please, note that a disabled catalog can return an HTTP 200 with a payload containing an error message, for more details see the <a href="apps/catalogs.html#troubleshooting">App Catalog</a> section.
 * @summary Get the list of products related to a catalog
 */
export const getAppCatalogProductsParams = zod.object({
  "id": zod.string().uuid()
})

export const getAppCatalogProductsQueryLimitMax = 1000;


export const getAppCatalogProductsQueryParams = zod.object({
  "search_after": zod.string().optional(),
  "limit": zod.number().min(1).max(getAppCatalogProductsQueryLimitMax).optional(),
  "updated_before": zod.string().date().optional(),
  "updated_after": zod.string().date().optional()
})

export const getAppCatalogProductsResponse = zod.object({
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
  "items": zod.array(zod.string().uuid()).optional()
}).optional()
}))

/**
 * This endpoint allows you to get a specific product related to a catalog. In the Enterprise Edition, permissions based on your app settings are applied on the product you request. Please, note that a disabled catalog can return an HTTP 200 with a payload containing an error message, for more details see the <a href="apps/catalogs.html#troubleshooting">App Catalog</a> section.
 * @summary Get a product related to a catalog
 */
export const getAppCatalogProductsUuidParams = zod.object({
  "id": zod.string().uuid(),
  "uuid": zod.string().uuid()
})

