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
  GetAppCatalogProductUuids200,
  GetAppCatalogProducts200
} from '../../model'

export const getGetAppCatalogProductUuidsResponseMock = (): GetAppCatalogProductUuids200 => ({_links: faker.helpers.arrayElement([{first: faker.helpers.arrayElement([{href: faker.helpers.arrayElement([faker.string.alpha(20), undefined])}, undefined]), next: faker.helpers.arrayElement([{href: faker.helpers.arrayElement([faker.string.alpha(20), undefined])}, undefined]), self: faker.helpers.arrayElement([{href: faker.helpers.arrayElement([faker.string.alpha(20), undefined])}, undefined])}, undefined]),..._embedded: faker.helpers.arrayElement([{items: faker.helpers.arrayElement([Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => (faker.string.uuid())), undefined])}, undefined])})

export const getGetAppCatalogProductsResponseMock = (): GetAppCatalogProducts200 => ({_links: faker.helpers.arrayElement([{first: faker.helpers.arrayElement([{href: faker.helpers.arrayElement([faker.string.alpha(20), undefined])}, undefined]), next: faker.helpers.arrayElement([{href: faker.helpers.arrayElement([faker.string.alpha(20), undefined])}, undefined]), self: faker.helpers.arrayElement([{href: faker.helpers.arrayElement([faker.string.alpha(20), undefined])}, undefined])}, undefined]),..._embedded: faker.helpers.arrayElement([{items: faker.helpers.arrayElement([Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => (faker.string.uuid())), undefined])}, undefined])})


export const getGetAppCatalogProductUuidsMockHandler = (overrideResponse?: GetAppCatalogProductUuids200 | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Promise<GetAppCatalogProductUuids200> | GetAppCatalogProductUuids200)) => {
  return http.get('*/api/rest/v1/catalogs/:id/product-uuids', async (info) => {await delay(1000);
  
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getGetAppCatalogProductUuidsResponseMock()),
      { status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
  })
}

export const getGetAppCatalogProductsMockHandler = (overrideResponse?: GetAppCatalogProducts200 | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Promise<GetAppCatalogProducts200> | GetAppCatalogProducts200)) => {
  return http.get('*/api/rest/v1/catalogs/:id/products', async (info) => {await delay(1000);
  
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getGetAppCatalogProductsResponseMock()),
      { status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
  })
}

export const getGetAppCatalogProductsUuidMockHandler = (overrideResponse?: void | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Promise<void> | void)) => {
  return http.get('*/api/rest/v1/catalogs/:id/products/:uuid', async (info) => {await delay(1000);
  if (typeof overrideResponse === 'function') {await overrideResponse(info); }
    return new HttpResponse(null,
      { status: 200,
        
      })
  })
}
export const getCatalogProductsMock = () => [
  getGetAppCatalogProductUuidsMockHandler(),
  getGetAppCatalogProductsMockHandler(),
  getGetAppCatalogProductsUuidMockHandler()
]