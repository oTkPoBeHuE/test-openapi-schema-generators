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
 * This endpoint allows you to get the list of all the available endpoints. No need to be authenticated to use this endpoint.
 * @summary Get list of all endpoints
 */
export const getEndpointsResponse = zod.object({
  "authentication": zod.object({

}).optional(),
  "host": zod.string().optional(),
  "routes": zod.object({

}).optional()
})

