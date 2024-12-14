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
  faker
} from '@faker-js/faker'
import {
  HttpResponse,
  delay,
  http
} from 'msw'
import type {
  GetInventory200,
  Order
} from '../../model'

export const getGetInventoryResponseMock = (): GetInventory200 => ({
        [faker.string.alphanumeric(5)]: faker.number.int({min: undefined, max: undefined})
      })

export const getPlaceOrderResponseMock = (overrideResponse: Partial< Order > = {}): Order => ({complete: faker.helpers.arrayElement([faker.datatype.boolean(), undefined]), id: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), petId: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), quantity: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), shipDate: faker.helpers.arrayElement([`${faker.date.past().toISOString().split('.')[0]}Z`, undefined]), status: faker.helpers.arrayElement([faker.helpers.arrayElement(['placed','approved','delivered'] as const), undefined]), ...overrideResponse})

export const getGetOrderByIdResponseMock = (overrideResponse: Partial< Order > = {}): Order => ({complete: faker.helpers.arrayElement([faker.datatype.boolean(), undefined]), id: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), petId: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), quantity: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), shipDate: faker.helpers.arrayElement([`${faker.date.past().toISOString().split('.')[0]}Z`, undefined]), status: faker.helpers.arrayElement([faker.helpers.arrayElement(['placed','approved','delivered'] as const), undefined]), ...overrideResponse})


export const getGetInventoryMockHandler = (overrideResponse?: GetInventory200 | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Promise<GetInventory200> | GetInventory200)) => {
  return http.get('*/store/inventory', async (info) => {await delay(1000);
  
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getGetInventoryResponseMock()),
      { status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
  })
}

export const getPlaceOrderMockHandler = (overrideResponse?: Order | ((info: Parameters<Parameters<typeof http.post>[1]>[0]) => Promise<Order> | Order)) => {
  return http.post('*/store/order', async (info) => {await delay(1000);
  
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getPlaceOrderResponseMock()),
      { status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
  })
}

export const getGetOrderByIdMockHandler = (overrideResponse?: Order | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Promise<Order> | Order)) => {
  return http.get('*/store/order/:orderId', async (info) => {await delay(1000);
  
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getGetOrderByIdResponseMock()),
      { status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
  })
}

export const getDeleteOrderMockHandler = (overrideResponse?: unknown | ((info: Parameters<Parameters<typeof http.delete>[1]>[0]) => Promise<unknown> | unknown)) => {
  return http.delete('*/store/order/:orderId', async (info) => {await delay(1000);
  if (typeof overrideResponse === 'function') {await overrideResponse(info); }
    return new HttpResponse(null,
      { status: 200,
        
      })
  })
}
export const getStoreMock = () => [
  getGetInventoryMockHandler(),
  getPlaceOrderMockHandler(),
  getGetOrderByIdMockHandler(),
  getDeleteOrderMockHandler()
]
