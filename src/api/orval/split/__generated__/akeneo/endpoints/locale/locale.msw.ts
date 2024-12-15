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
  GetLocales200One,
  GetLocalesCode200
} from '../../model'

export const getGetLocalesResponseMock = (): GetLocales200One => ({_links: faker.helpers.arrayElement([{first: faker.helpers.arrayElement([{href: faker.helpers.arrayElement([faker.string.alpha(20), undefined])}, undefined]), next: faker.helpers.arrayElement([{href: faker.helpers.arrayElement([faker.string.alpha(20), undefined])}, undefined]), previous: faker.helpers.arrayElement([{href: faker.helpers.arrayElement([faker.string.alpha(20), undefined])}, undefined]), self: faker.helpers.arrayElement([{href: faker.helpers.arrayElement([faker.string.alpha(20), undefined])}, undefined])}, undefined]), current_page: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]),..._embedded: faker.helpers.arrayElement([{items: faker.helpers.arrayElement([Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({_links: faker.helpers.arrayElement([{self: faker.helpers.arrayElement([{href: faker.helpers.arrayElement([faker.string.alpha(20), undefined])}, undefined])}, undefined]),code: faker.string.alpha(20), enabled: faker.helpers.arrayElement([faker.datatype.boolean(), undefined])})), undefined])}, undefined])})

export const getGetLocalesCodeResponseMock = (): GetLocalesCode200 => ({"code":"en_US","enable":true})


export const getGetLocalesMockHandler = (overrideResponse?: GetLocales200One | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Promise<GetLocales200One> | GetLocales200One)) => {
  return http.get('*/api/rest/v1/locales', async (info) => {await delay(1000);
  
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getGetLocalesResponseMock()),
      { status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
  })
}

export const getGetLocalesCodeMockHandler = (overrideResponse?: GetLocalesCode200 | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Promise<GetLocalesCode200> | GetLocalesCode200)) => {
  return http.get('*/api/rest/v1/locales/:code', async (info) => {await delay(1000);
  
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getGetLocalesCodeResponseMock()),
      { status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
  })
}
export const getLocaleMock = () => [
  getGetLocalesMockHandler(),
  getGetLocalesCodeMockHandler()
]