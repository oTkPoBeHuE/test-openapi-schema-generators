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
 * This can only be done by the logged in user.
 * @summary Create user
 */
export const createUserBody = zod.object({
  "id": zod.number().optional(),
  "username": zod.string().optional(),
  "firstName": zod.string().optional(),
  "lastName": zod.string().optional(),
  "email": zod.string().optional(),
  "password": zod.string().optional(),
  "phone": zod.string().optional(),
  "userStatus": zod.number().optional()
})

/**
 * Creates list of users with given input array
 * @summary Creates list of users with given input array
 */
export const createUsersWithListInputBodyItem = zod.object({
  "id": zod.number().optional(),
  "username": zod.string().optional(),
  "firstName": zod.string().optional(),
  "lastName": zod.string().optional(),
  "email": zod.string().optional(),
  "password": zod.string().optional(),
  "phone": zod.string().optional(),
  "userStatus": zod.number().optional()
})
export const createUsersWithListInputBody = zod.array(createUsersWithListInputBodyItem)

export const createUsersWithListInputResponse = zod.object({
  "id": zod.number().optional(),
  "username": zod.string().optional(),
  "firstName": zod.string().optional(),
  "lastName": zod.string().optional(),
  "email": zod.string().optional(),
  "password": zod.string().optional(),
  "phone": zod.string().optional(),
  "userStatus": zod.number().optional()
})

/**
 * @summary Logs user into the system
 */
export const loginUserQueryParams = zod.object({
  "username": zod.string().optional(),
  "password": zod.string().optional()
})

export const loginUserResponse = zod.string()

/**
 * @summary Get user by user name
 */
export const getUserByNameParams = zod.object({
  "username": zod.string()
})

export const getUserByNameResponse = zod.object({
  "id": zod.number().optional(),
  "username": zod.string().optional(),
  "firstName": zod.string().optional(),
  "lastName": zod.string().optional(),
  "email": zod.string().optional(),
  "password": zod.string().optional(),
  "phone": zod.string().optional(),
  "userStatus": zod.number().optional()
})

/**
 * This can only be done by the logged in user.
 * @summary Update user
 */
export const updateUserParams = zod.object({
  "username": zod.string()
})

export const updateUserBody = zod.object({
  "id": zod.number().optional(),
  "username": zod.string().optional(),
  "firstName": zod.string().optional(),
  "lastName": zod.string().optional(),
  "email": zod.string().optional(),
  "password": zod.string().optional(),
  "phone": zod.string().optional(),
  "userStatus": zod.number().optional()
})

/**
 * This can only be done by the logged in user.
 * @summary Delete user
 */
export const deleteUserParams = zod.object({
  "username": zod.string()
})
