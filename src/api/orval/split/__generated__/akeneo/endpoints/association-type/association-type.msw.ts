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
  AssociationTypesGet200,
  AssociationTypesGetList200One,
  SeveralAssociationTypesPatch200One
} from '../../model'

export const getAssociationTypesGetListResponseMock = (): AssociationTypesGetList200One => ({_links: faker.helpers.arrayElement([{first: faker.helpers.arrayElement([{href: faker.helpers.arrayElement([faker.string.alpha(20), undefined])}, undefined]), next: faker.helpers.arrayElement([{href: faker.helpers.arrayElement([faker.string.alpha(20), undefined])}, undefined]), previous: faker.helpers.arrayElement([{href: faker.helpers.arrayElement([faker.string.alpha(20), undefined])}, undefined]), self: faker.helpers.arrayElement([{href: faker.helpers.arrayElement([faker.string.alpha(20), undefined])}, undefined])}, undefined]), current_page: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]),..._embedded: faker.helpers.arrayElement([{items: faker.helpers.arrayElement([Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({_links: faker.helpers.arrayElement([{self: faker.helpers.arrayElement([{href: faker.helpers.arrayElement([faker.string.alpha(20), undefined])}, undefined])}, undefined]),code: faker.string.alpha(20), is_quantified: faker.helpers.arrayElement([faker.datatype.boolean(), undefined]), is_two_way: faker.helpers.arrayElement([faker.datatype.boolean(), undefined]), labels: faker.helpers.arrayElement([{localeCode: faker.helpers.arrayElement([faker.string.alpha(20), undefined])}, undefined])})), undefined])}, undefined])})

export const getSeveralAssociationTypesPatchResponseMock = (overrideResponse: Partial< SeveralAssociationTypesPatch200One > = {}): SeveralAssociationTypesPatch200One => ({code: faker.helpers.arrayElement([faker.string.alpha(20), undefined]), identifier: faker.helpers.arrayElement([faker.string.alpha(20), undefined]), line: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), message: faker.helpers.arrayElement([faker.string.alpha(20), undefined]), status_code: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), ...overrideResponse})

export const getAssociationTypesGetResponseMock = (): AssociationTypesGet200 => ({"code":"upsell","is_quantified":false,"is_two_way":false,"labels":{"en_US":"Upsell","fr_FR":"Vente incitative"}})


export const getAssociationTypesGetListMockHandler = (overrideResponse?: AssociationTypesGetList200One | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Promise<AssociationTypesGetList200One> | AssociationTypesGetList200One)) => {
  return http.get('*/api/rest/v1/association-types', async (info) => {await delay(1000);
  
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getAssociationTypesGetListResponseMock()),
      { status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
  })
}

export const getSeveralAssociationTypesPatchMockHandler = (overrideResponse?: SeveralAssociationTypesPatch200One | ((info: Parameters<Parameters<typeof http.patch>[1]>[0]) => Promise<SeveralAssociationTypesPatch200One> | SeveralAssociationTypesPatch200One)) => {
  return http.patch('*/api/rest/v1/association-types', async (info) => {await delay(1000);
  
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getSeveralAssociationTypesPatchResponseMock()),
      { status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
  })
}

export const getAssociationTypesPostMockHandler = (overrideResponse?: void | ((info: Parameters<Parameters<typeof http.post>[1]>[0]) => Promise<void> | void)) => {
  return http.post('*/api/rest/v1/association-types', async (info) => {await delay(1000);
  if (typeof overrideResponse === 'function') {await overrideResponse(info); }
    return new HttpResponse(null,
      { status: 201,
        
      })
  })
}

export const getAssociationTypesGetMockHandler = (overrideResponse?: AssociationTypesGet200 | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Promise<AssociationTypesGet200> | AssociationTypesGet200)) => {
  return http.get('*/api/rest/v1/association-types/:code', async (info) => {await delay(1000);
  
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getAssociationTypesGetResponseMock()),
      { status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
  })
}

export const getAssociationTypesPatchMockHandler = (overrideResponse?: void | ((info: Parameters<Parameters<typeof http.patch>[1]>[0]) => Promise<void> | void)) => {
  return http.patch('*/api/rest/v1/association-types/:code', async (info) => {await delay(1000);
  if (typeof overrideResponse === 'function') {await overrideResponse(info); }
    return new HttpResponse(null,
      { status: 201,
        
      })
  })
}
export const getAssociationTypeMock = () => [
  getAssociationTypesGetListMockHandler(),
  getSeveralAssociationTypesPatchMockHandler(),
  getAssociationTypesPostMockHandler(),
  getAssociationTypesGetMockHandler(),
  getAssociationTypesPatchMockHandler()
]
