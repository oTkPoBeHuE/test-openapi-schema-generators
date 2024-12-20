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
  AttributeGroupsGet200,
  AttributeGroupsGetList200One,
  SeveralAttributeGroupsPatch200One
} from '../../model'

export const getAttributeGroupsGetListResponseMock = (): AttributeGroupsGetList200One => ({_links: faker.helpers.arrayElement([{first: faker.helpers.arrayElement([{href: faker.helpers.arrayElement([faker.string.alpha(20), undefined])}, undefined]), next: faker.helpers.arrayElement([{href: faker.helpers.arrayElement([faker.string.alpha(20), undefined])}, undefined]), previous: faker.helpers.arrayElement([{href: faker.helpers.arrayElement([faker.string.alpha(20), undefined])}, undefined]), self: faker.helpers.arrayElement([{href: faker.helpers.arrayElement([faker.string.alpha(20), undefined])}, undefined])}, undefined]), current_page: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]),..._embedded: faker.helpers.arrayElement([{items: faker.helpers.arrayElement([Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({_links: faker.helpers.arrayElement([{self: faker.helpers.arrayElement([{href: faker.helpers.arrayElement([faker.string.alpha(20), undefined])}, undefined])}, undefined]),attributes: faker.helpers.arrayElement([Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => (faker.string.alpha(20))), undefined]), code: faker.string.alpha(20), labels: faker.helpers.arrayElement([{localeCode: faker.helpers.arrayElement([faker.string.alpha(20), undefined])}, undefined]), sort_order: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined])})), undefined])}, undefined])})

export const getSeveralAttributeGroupsPatchResponseMock = (overrideResponse: Partial< SeveralAttributeGroupsPatch200One > = {}): SeveralAttributeGroupsPatch200One => ({code: faker.helpers.arrayElement([faker.string.alpha(20), undefined]), identifier: faker.helpers.arrayElement([faker.string.alpha(20), undefined]), line: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), message: faker.helpers.arrayElement([faker.string.alpha(20), undefined]), status_code: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), ...overrideResponse})

export const getAttributeGroupsGetResponseMock = (): AttributeGroupsGet200 => ({"attributes":["sku","name","description","response_time","release_date","price"],"code":"marketing","labels":{"en_US":"Marketing","fr_FR":"Marketing"},"sort_order":4})


export const getAttributeGroupsGetListMockHandler = (overrideResponse?: AttributeGroupsGetList200One | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Promise<AttributeGroupsGetList200One> | AttributeGroupsGetList200One)) => {
  return http.get('*/api/rest/v1/attribute-groups', async (info) => {await delay(1000);
  
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getAttributeGroupsGetListResponseMock()),
      { status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
  })
}

export const getSeveralAttributeGroupsPatchMockHandler = (overrideResponse?: SeveralAttributeGroupsPatch200One | ((info: Parameters<Parameters<typeof http.patch>[1]>[0]) => Promise<SeveralAttributeGroupsPatch200One> | SeveralAttributeGroupsPatch200One)) => {
  return http.patch('*/api/rest/v1/attribute-groups', async (info) => {await delay(1000);
  
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getSeveralAttributeGroupsPatchResponseMock()),
      { status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
  })
}

export const getAttributeGroupsPostMockHandler = (overrideResponse?: void | ((info: Parameters<Parameters<typeof http.post>[1]>[0]) => Promise<void> | void)) => {
  return http.post('*/api/rest/v1/attribute-groups', async (info) => {await delay(1000);
  if (typeof overrideResponse === 'function') {await overrideResponse(info); }
    return new HttpResponse(null,
      { status: 201,
        
      })
  })
}

export const getAttributeGroupsGetMockHandler = (overrideResponse?: AttributeGroupsGet200 | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Promise<AttributeGroupsGet200> | AttributeGroupsGet200)) => {
  return http.get('*/api/rest/v1/attribute-groups/:code', async (info) => {await delay(1000);
  
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getAttributeGroupsGetResponseMock()),
      { status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
  })
}

export const getAttributeGroupsPatchMockHandler = (overrideResponse?: void | ((info: Parameters<Parameters<typeof http.patch>[1]>[0]) => Promise<void> | void)) => {
  return http.patch('*/api/rest/v1/attribute-groups/:code', async (info) => {await delay(1000);
  if (typeof overrideResponse === 'function') {await overrideResponse(info); }
    return new HttpResponse(null,
      { status: 201,
        
      })
  })
}
export const getAttributeGroupMock = () => [
  getAttributeGroupsGetListMockHandler(),
  getSeveralAttributeGroupsPatchMockHandler(),
  getAttributeGroupsPostMockHandler(),
  getAttributeGroupsGetMockHandler(),
  getAttributeGroupsPatchMockHandler()
]
