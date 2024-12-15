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
  CurrenciesGet200,
  CurrenciesGetList200One
} from '../../model'

export const getCurrenciesGetListResponseMock = (): CurrenciesGetList200One => ({_links: faker.helpers.arrayElement([{first: faker.helpers.arrayElement([{href: faker.helpers.arrayElement([faker.string.alpha(20), undefined])}, undefined]), next: faker.helpers.arrayElement([{href: faker.helpers.arrayElement([faker.string.alpha(20), undefined])}, undefined]), previous: faker.helpers.arrayElement([{href: faker.helpers.arrayElement([faker.string.alpha(20), undefined])}, undefined]), self: faker.helpers.arrayElement([{href: faker.helpers.arrayElement([faker.string.alpha(20), undefined])}, undefined])}, undefined]), current_page: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]),..._embedded: faker.helpers.arrayElement([{items: faker.helpers.arrayElement([Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({_links: faker.helpers.arrayElement([{self: faker.helpers.arrayElement([{href: faker.helpers.arrayElement([faker.string.alpha(20), undefined])}, undefined])}, undefined]),code: faker.string.alpha(20), enabled: faker.helpers.arrayElement([faker.datatype.boolean(), undefined])})), undefined])}, undefined])})

export const getCurrenciesGetResponseMock = (): CurrenciesGet200 => ({"code":"EUR","enabled":true})


export const getCurrenciesGetListMockHandler = (overrideResponse?: CurrenciesGetList200One | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Promise<CurrenciesGetList200One> | CurrenciesGetList200One)) => {
  return http.get('*/api/rest/v1/currencies', async (info) => {await delay(1000);
  
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getCurrenciesGetListResponseMock()),
      { status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
  })
}

export const getCurrenciesGetMockHandler = (overrideResponse?: CurrenciesGet200 | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Promise<CurrenciesGet200> | CurrenciesGet200)) => {
  return http.get('*/api/rest/v1/currencies/:code', async (info) => {await delay(1000);
  
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getCurrenciesGetResponseMock()),
      { status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
  })
}
export const getCurrencyMock = () => [
  getCurrenciesGetListMockHandler(),
  getCurrenciesGetMockHandler()
]
