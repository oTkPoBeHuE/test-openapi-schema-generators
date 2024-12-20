/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Swagger Petstore - OpenAPI 3.0
 * This is a sample Pet Store Server based on the OpenAPI 3.0 specification.  You can find out more about
Swagger at [http://swagger.io](http://swagger.io). In the third iteration of the pet store, we've switched to the design first approach!
You can now help us improve the API whether it's by making changes to the definition itself or to the code.
That way, with time, we can improve the API in general, and expose some of the new features in OAS3.

Some useful links:
- [The Pet Store repository](https://github.com/swagger-api/swagger-petstore)
- [The source API definition for the Pet Store](https://github.com/swagger-api/swagger-petstore/blob/master/src/main/resources/openapi.yaml)
 * OpenAPI spec version: 1.0.19
 */
import {
  z as zod
} from 'zod'

/**
 * Returns a map of status codes to quantities
 * @summary Returns pet inventories by status
 */
export const getInventoryResponse = zod.record(zod.string(), zod.number())

/**
 * Place a new order in the store
 * @summary Place an order for a pet
 */
export const placeOrderBody = zod.object({
  "id": zod.number().optional(),
  "petId": zod.number().optional(),
  "quantity": zod.number().optional(),
  "shipDate": zod.string().datetime().optional(),
  "status": zod.enum(['placed', 'approved', 'delivered']).optional(),
  "complete": zod.boolean().optional()
})

export const placeOrderResponse = zod.object({
  "id": zod.number().optional(),
  "petId": zod.number().optional(),
  "quantity": zod.number().optional(),
  "shipDate": zod.string().datetime().optional(),
  "status": zod.enum(['placed', 'approved', 'delivered']).optional(),
  "complete": zod.boolean().optional()
})

/**
 * For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions.
 * @summary Find purchase order by ID
 */
export const getOrderByIdParams = zod.object({
  "orderId": zod.number()
})

export const getOrderByIdResponse = zod.object({
  "id": zod.number().optional(),
  "petId": zod.number().optional(),
  "quantity": zod.number().optional(),
  "shipDate": zod.string().datetime().optional(),
  "status": zod.enum(['placed', 'approved', 'delivered']).optional(),
  "complete": zod.boolean().optional()
})

/**
 * For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
 * @summary Delete purchase order by ID
 */
export const deleteOrderParams = zod.object({
  "orderId": zod.number()
})

