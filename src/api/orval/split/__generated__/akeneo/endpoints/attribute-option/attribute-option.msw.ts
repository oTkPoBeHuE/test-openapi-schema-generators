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
  GetAttributesAttributeCodeOptions200One,
  GetAttributesAttributeCodeOptionsCode200,
  PatchAttributesAttributeCodeOptions200One
} from '../../model'

export const getGetAttributesAttributeCodeOptionsResponseMock = (): GetAttributesAttributeCodeOptions200One => ({_links: faker.helpers.arrayElement([{first: faker.helpers.arrayElement([{href: faker.helpers.arrayElement([faker.string.alpha(20), undefined])}, undefined]), next: faker.helpers.arrayElement([{href: faker.helpers.arrayElement([faker.string.alpha(20), undefined])}, undefined]), previous: faker.helpers.arrayElement([{href: faker.helpers.arrayElement([faker.string.alpha(20), undefined])}, undefined]), self: faker.helpers.arrayElement([{href: faker.helpers.arrayElement([faker.string.alpha(20), undefined])}, undefined])}, undefined]), current_page: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]),..._embedded: faker.helpers.arrayElement([{items: faker.helpers.arrayElement([Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({_links: faker.helpers.arrayElement([{self: faker.helpers.arrayElement([{href: faker.helpers.arrayElement([faker.string.alpha(20), undefined])}, undefined])}, undefined]),attribute: faker.helpers.arrayElement([faker.string.alpha(20), undefined]), code: faker.string.alpha(20), labels: faker.helpers.arrayElement([{localeCode: faker.helpers.arrayElement([faker.string.alpha(20), undefined])}, undefined]), sort_order: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined])})), undefined])}, undefined])})

export const getPatchAttributesAttributeCodeOptionsResponseMock = (overrideResponse: Partial< PatchAttributesAttributeCodeOptions200One > = {}): PatchAttributesAttributeCodeOptions200One => ({code: faker.helpers.arrayElement([faker.string.alpha(20), undefined]), identifier: faker.helpers.arrayElement([faker.string.alpha(20), undefined]), line: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), message: faker.helpers.arrayElement([faker.string.alpha(20), undefined]), status_code: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), ...overrideResponse})

export const getGetAttributesAttributeCodeOptionsCodeResponseMock = (): GetAttributesAttributeCodeOptionsCode200 => ({"attribute":"a_simple_select","code":"black","labels":{"en_US":"Black","fr_FR":"Noir"},"sort_order":2})


export const getGetAttributesAttributeCodeOptionsMockHandler = (overrideResponse?: GetAttributesAttributeCodeOptions200One | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Promise<GetAttributesAttributeCodeOptions200One> | GetAttributesAttributeCodeOptions200One)) => {
  return http.get('*/api/rest/v1/attributes/:attributeCode/options', async (info) => {await delay(1000);
  
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getGetAttributesAttributeCodeOptionsResponseMock()),
      { status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
  })
}

export const getPatchAttributesAttributeCodeOptionsMockHandler = (overrideResponse?: PatchAttributesAttributeCodeOptions200One | ((info: Parameters<Parameters<typeof http.patch>[1]>[0]) => Promise<PatchAttributesAttributeCodeOptions200One> | PatchAttributesAttributeCodeOptions200One)) => {
  return http.patch('*/api/rest/v1/attributes/:attributeCode/options', async (info) => {await delay(1000);
  
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getPatchAttributesAttributeCodeOptionsResponseMock()),
      { status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
  })
}

export const getPostAttributesAttributeCodeOptionsMockHandler = (overrideResponse?: void | ((info: Parameters<Parameters<typeof http.post>[1]>[0]) => Promise<void> | void)) => {
  return http.post('*/api/rest/v1/attributes/:attributeCode/options', async (info) => {await delay(1000);
  if (typeof overrideResponse === 'function') {await overrideResponse(info); }
    return new HttpResponse(null,
      { status: 201,
        
      })
  })
}

export const getGetAttributesAttributeCodeOptionsCodeMockHandler = (overrideResponse?: GetAttributesAttributeCodeOptionsCode200 | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Promise<GetAttributesAttributeCodeOptionsCode200> | GetAttributesAttributeCodeOptionsCode200)) => {
  return http.get('*/api/rest/v1/attributes/:attributeCode/options/:code', async (info) => {await delay(1000);
  
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getGetAttributesAttributeCodeOptionsCodeResponseMock()),
      { status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
  })
}

export const getPatchAttributesAttributeCodeOptionsCodeMockHandler = (overrideResponse?: void | ((info: Parameters<Parameters<typeof http.patch>[1]>[0]) => Promise<void> | void)) => {
  return http.patch('*/api/rest/v1/attributes/:attributeCode/options/:code', async (info) => {await delay(1000);
  if (typeof overrideResponse === 'function') {await overrideResponse(info); }
    return new HttpResponse(null,
      { status: 201,
        
      })
  })
}
export const getAttributeOptionMock = () => [
  getGetAttributesAttributeCodeOptionsMockHandler(),
  getPatchAttributesAttributeCodeOptionsMockHandler(),
  getPostAttributesAttributeCodeOptionsMockHandler(),
  getGetAttributesAttributeCodeOptionsCodeMockHandler(),
  getPatchAttributesAttributeCodeOptionsCodeMockHandler()
]
