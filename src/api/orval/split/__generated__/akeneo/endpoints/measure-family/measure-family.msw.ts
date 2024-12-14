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
  MeasureFamiliesGet200,
  MeasureFamiliesGetList200One
} from '../../model'

export const getMeasureFamiliesGetListResponseMock = (): MeasureFamiliesGetList200One => ({_links: faker.helpers.arrayElement([{first: faker.helpers.arrayElement([{href: faker.helpers.arrayElement([faker.string.alpha(20), undefined])}, undefined]), next: faker.helpers.arrayElement([{href: faker.helpers.arrayElement([faker.string.alpha(20), undefined])}, undefined]), previous: faker.helpers.arrayElement([{href: faker.helpers.arrayElement([faker.string.alpha(20), undefined])}, undefined]), self: faker.helpers.arrayElement([{href: faker.helpers.arrayElement([faker.string.alpha(20), undefined])}, undefined])}, undefined]), current_page: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]),..._embedded: faker.helpers.arrayElement([{items: faker.helpers.arrayElement([Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({_links: faker.helpers.arrayElement([{self: faker.helpers.arrayElement([{href: faker.helpers.arrayElement([faker.string.alpha(20), undefined])}, undefined])}, undefined]),code: faker.string.alpha(20), standard: faker.helpers.arrayElement([faker.string.alpha(20), undefined]), units: faker.helpers.arrayElement([Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({code: faker.helpers.arrayElement([faker.string.alpha(20), undefined]), convert: faker.helpers.arrayElement([{}, undefined]), symbol: faker.helpers.arrayElement([faker.string.alpha(20), undefined])})), undefined])})), undefined])}, undefined])})

export const getMeasureFamiliesGetResponseMock = (): MeasureFamiliesGet200 => ({"code":"Area","standard":"SQUARE_METER","units":[{"code":"SQUARE_MILLIMETER","convert":{"mul":"0.001"},"symbol":"mm²"},{"code":"SQUARE_CENTIMETER","convert":{"mul":"0.001"},"symbol":"cm²"}]})


export const getMeasureFamiliesGetListMockHandler = (overrideResponse?: MeasureFamiliesGetList200One | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Promise<MeasureFamiliesGetList200One> | MeasureFamiliesGetList200One)) => {
  return http.get('*/api/rest/v1/measure-families', async (info) => {await delay(1000);
  
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getMeasureFamiliesGetListResponseMock()),
      { status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
  })
}

export const getMeasureFamiliesGetMockHandler = (overrideResponse?: MeasureFamiliesGet200 | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Promise<MeasureFamiliesGet200> | MeasureFamiliesGet200)) => {
  return http.get('*/api/rest/v1/measure-families/:code', async (info) => {await delay(1000);
  
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getMeasureFamiliesGetResponseMock()),
      { status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
  })
}
export const getMeasureFamilyMock = () => [
  getMeasureFamiliesGetListMockHandler(),
  getMeasureFamiliesGetMockHandler()
]
