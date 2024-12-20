/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Akeneo PIM REST API
 * OpenAPI spec version: 1.0.0
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
  GetEndpoints200One
} from '../../model'

export const getGetEndpointsResponseMock = (overrideResponse: Partial< GetEndpoints200One > = {}): GetEndpoints200One => ({authentication: faker.helpers.arrayElement([{}, undefined]), host: faker.helpers.arrayElement([faker.string.alpha(20), undefined]), routes: faker.helpers.arrayElement([{}, undefined]), ...overrideResponse})


export const getGetEndpointsMockHandler = (overrideResponse?: GetEndpoints200One | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Promise<GetEndpoints200One> | GetEndpoints200One)) => {
  return http.get('*/api/rest/v1', async (info) => {await delay(1000);
  
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getGetEndpointsResponseMock()),
      { status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
  })
}
export const getOverviewMock = () => [
  getGetEndpointsMockHandler()
]
