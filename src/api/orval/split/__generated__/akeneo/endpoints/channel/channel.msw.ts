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
  GetChannels200One,
  GetChannelsCode200,
  SeveralChannelsPatch200One
} from '../../model'

export const getGetChannelsResponseMock = (): GetChannels200One => ({_links: faker.helpers.arrayElement([{first: faker.helpers.arrayElement([{href: faker.helpers.arrayElement([faker.string.alpha(20), undefined])}, undefined]), next: faker.helpers.arrayElement([{href: faker.helpers.arrayElement([faker.string.alpha(20), undefined])}, undefined]), previous: faker.helpers.arrayElement([{href: faker.helpers.arrayElement([faker.string.alpha(20), undefined])}, undefined]), self: faker.helpers.arrayElement([{href: faker.helpers.arrayElement([faker.string.alpha(20), undefined])}, undefined])}, undefined]), current_page: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]),..._embedded: faker.helpers.arrayElement([{items: faker.helpers.arrayElement([Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({_links: faker.helpers.arrayElement([{self: faker.helpers.arrayElement([{href: faker.helpers.arrayElement([faker.string.alpha(20), undefined])}, undefined])}, undefined]),category_tree: faker.string.alpha(20), code: faker.string.alpha(20), conversion_units: faker.helpers.arrayElement([{attributeCode: faker.helpers.arrayElement([faker.string.alpha(20), undefined])}, undefined]), currencies: Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => (faker.string.alpha(20))), labels: faker.helpers.arrayElement([{localeCode: faker.helpers.arrayElement([faker.string.alpha(20), undefined])}, undefined]), locales: Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => (faker.string.alpha(20)))})), undefined])}, undefined])})

export const getSeveralChannelsPatchResponseMock = (overrideResponse: Partial< SeveralChannelsPatch200One > = {}): SeveralChannelsPatch200One => ({code: faker.helpers.arrayElement([faker.string.alpha(20), undefined]), identifier: faker.helpers.arrayElement([faker.string.alpha(20), undefined]), line: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), message: faker.helpers.arrayElement([faker.string.alpha(20), undefined]), status_code: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), ...overrideResponse})

export const getGetChannelsCodeResponseMock = (): GetChannelsCode200 => ({"category_tree":"master","code":"ecommerce","conversion_units":{"weight":"KILOGRAM"},"currencies":["USD","EUR"],"labels":{"de_DE":"Ecommerce","en_US":"Ecommerce","fr_FR":"Ecommerce"},"locales":["de_DE","en_US","fr_FR"]})


export const getGetChannelsMockHandler = (overrideResponse?: GetChannels200One | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Promise<GetChannels200One> | GetChannels200One)) => {
  return http.get('*/api/rest/v1/channels', async (info) => {await delay(1000);
  
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getGetChannelsResponseMock()),
      { status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
  })
}

export const getSeveralChannelsPatchMockHandler = (overrideResponse?: SeveralChannelsPatch200One | ((info: Parameters<Parameters<typeof http.patch>[1]>[0]) => Promise<SeveralChannelsPatch200One> | SeveralChannelsPatch200One)) => {
  return http.patch('*/api/rest/v1/channels', async (info) => {await delay(1000);
  
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getSeveralChannelsPatchResponseMock()),
      { status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
  })
}

export const getChannelsPostMockHandler = (overrideResponse?: void | ((info: Parameters<Parameters<typeof http.post>[1]>[0]) => Promise<void> | void)) => {
  return http.post('*/api/rest/v1/channels', async (info) => {await delay(1000);
  if (typeof overrideResponse === 'function') {await overrideResponse(info); }
    return new HttpResponse(null,
      { status: 201,
        
      })
  })
}

export const getGetChannelsCodeMockHandler = (overrideResponse?: GetChannelsCode200 | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Promise<GetChannelsCode200> | GetChannelsCode200)) => {
  return http.get('*/api/rest/v1/channels/:code', async (info) => {await delay(1000);
  
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getGetChannelsCodeResponseMock()),
      { status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
  })
}

export const getChannelsPatchMockHandler = (overrideResponse?: void | ((info: Parameters<Parameters<typeof http.patch>[1]>[0]) => Promise<void> | void)) => {
  return http.patch('*/api/rest/v1/channels/:code', async (info) => {await delay(1000);
  if (typeof overrideResponse === 'function') {await overrideResponse(info); }
    return new HttpResponse(null,
      { status: 201,
        
      })
  })
}
export const getChannelMock = () => [
  getGetChannelsMockHandler(),
  getSeveralChannelsPatchMockHandler(),
  getChannelsPostMockHandler(),
  getGetChannelsCodeMockHandler(),
  getChannelsPatchMockHandler()
]
