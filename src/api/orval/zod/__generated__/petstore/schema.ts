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
 * Update an existing pet by Id
 * @summary Update an existing pet
 */
export const updatePetBody = zod.object({
  "id": zod.number().optional(),
  "name": zod.string(),
  "category": zod.object({
  "id": zod.number().optional(),
  "name": zod.string().optional()
}).optional(),
  "photoUrls": zod.array(zod.string()),
  "tags": zod.array(zod.object({
  "id": zod.number().optional(),
  "name": zod.string().optional()
})).optional(),
  "status": zod.enum(['available', 'pending', 'sold']).optional()
})

export const updatePetResponse = zod.object({
  "id": zod.number().optional(),
  "name": zod.string(),
  "category": zod.object({
  "id": zod.number().optional(),
  "name": zod.string().optional()
}).optional(),
  "photoUrls": zod.array(zod.string()),
  "tags": zod.array(zod.object({
  "id": zod.number().optional(),
  "name": zod.string().optional()
})).optional(),
  "status": zod.enum(['available', 'pending', 'sold']).optional()
})


/**
 * Add a new pet to the store
 * @summary Add a new pet to the store
 */
export const addPetBody = zod.object({
  "id": zod.number().optional(),
  "name": zod.string(),
  "category": zod.object({
  "id": zod.number().optional(),
  "name": zod.string().optional()
}).optional(),
  "photoUrls": zod.array(zod.string()),
  "tags": zod.array(zod.object({
  "id": zod.number().optional(),
  "name": zod.string().optional()
})).optional(),
  "status": zod.enum(['available', 'pending', 'sold']).optional()
})

export const addPetResponse = zod.object({
  "id": zod.number().optional(),
  "name": zod.string(),
  "category": zod.object({
  "id": zod.number().optional(),
  "name": zod.string().optional()
}).optional(),
  "photoUrls": zod.array(zod.string()),
  "tags": zod.array(zod.object({
  "id": zod.number().optional(),
  "name": zod.string().optional()
})).optional(),
  "status": zod.enum(['available', 'pending', 'sold']).optional()
})


/**
 * Multiple status values can be provided with comma separated strings
 * @summary Finds Pets by status
 */
export const findPetsByStatusQueryParams = zod.object({
  "status": zod.enum(['available', 'pending', 'sold']).optional()
})

export const findPetsByStatusResponseItem = zod.object({
  "id": zod.number().optional(),
  "name": zod.string(),
  "category": zod.object({
  "id": zod.number().optional(),
  "name": zod.string().optional()
}).optional(),
  "photoUrls": zod.array(zod.string()),
  "tags": zod.array(zod.object({
  "id": zod.number().optional(),
  "name": zod.string().optional()
})).optional(),
  "status": zod.enum(['available', 'pending', 'sold']).optional()
})
export const findPetsByStatusResponse = zod.array(findPetsByStatusResponseItem)


/**
 * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
 * @summary Finds Pets by tags
 */
export const findPetsByTagsQueryParams = zod.object({
  "tags": zod.array(zod.string()).optional()
})

export const findPetsByTagsResponseItem = zod.object({
  "id": zod.number().optional(),
  "name": zod.string(),
  "category": zod.object({
  "id": zod.number().optional(),
  "name": zod.string().optional()
}).optional(),
  "photoUrls": zod.array(zod.string()),
  "tags": zod.array(zod.object({
  "id": zod.number().optional(),
  "name": zod.string().optional()
})).optional(),
  "status": zod.enum(['available', 'pending', 'sold']).optional()
})
export const findPetsByTagsResponse = zod.array(findPetsByTagsResponseItem)


/**
 * Returns a single pet
 * @summary Find pet by ID
 */
export const getPetByIdParams = zod.object({
  "petId": zod.number()
})

export const getPetByIdResponse = zod.object({
  "id": zod.number().optional(),
  "name": zod.string(),
  "category": zod.object({
  "id": zod.number().optional(),
  "name": zod.string().optional()
}).optional(),
  "photoUrls": zod.array(zod.string()),
  "tags": zod.array(zod.object({
  "id": zod.number().optional(),
  "name": zod.string().optional()
})).optional(),
  "status": zod.enum(['available', 'pending', 'sold']).optional()
})


/**
 * @summary Updates a pet in the store with form data
 */
export const updatePetWithFormParams = zod.object({
  "petId": zod.number()
})

export const updatePetWithFormQueryParams = zod.object({
  "name": zod.string().optional(),
  "status": zod.string().optional()
})


/**
 * @summary Deletes a pet
 */
export const deletePetParams = zod.object({
  "petId": zod.number()
})

export const deletePetHeader = zod.object({
  "api_key": zod.string().optional()
})


/**
 * @summary uploads an image
 */
export const uploadFileParams = zod.object({
  "petId": zod.number()
})

export const uploadFileQueryParams = zod.object({
  "additionalMetadata": zod.string().optional()
})

export const uploadFileResponse = zod.object({
  "code": zod.number().optional(),
  "type": zod.string().optional(),
  "message": zod.string().optional()
})


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


