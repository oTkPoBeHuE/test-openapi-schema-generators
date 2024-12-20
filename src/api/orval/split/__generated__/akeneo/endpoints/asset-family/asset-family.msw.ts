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
  GetAssetFamilies200One,
  GetAssetFamilyCode200
} from '../../model'

export const getGetAssetFamiliesResponseMock = (): GetAssetFamilies200One => ({_links: faker.helpers.arrayElement([{first: faker.helpers.arrayElement([{href: faker.helpers.arrayElement([faker.string.alpha(20), undefined])}, undefined]), next: faker.helpers.arrayElement([{href: faker.helpers.arrayElement([faker.string.alpha(20), undefined])}, undefined]), self: faker.helpers.arrayElement([{href: faker.helpers.arrayElement([faker.string.alpha(20), undefined])}, undefined])}, undefined]),..._embedded: faker.helpers.arrayElement([{items: faker.helpers.arrayElement([Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({_links: faker.helpers.arrayElement([{self: faker.helpers.arrayElement([{href: faker.helpers.arrayElement([faker.string.alpha(20), undefined])}, undefined])}, undefined]),attribute_as_main_media: faker.helpers.arrayElement([faker.string.alpha(20), undefined]), code: faker.string.alpha(20), labels: faker.helpers.arrayElement([{localeCode: faker.helpers.arrayElement([faker.string.alpha(20), undefined])}, undefined]), naming_convention: faker.helpers.arrayElement([{abort_asset_creation_on_error: faker.helpers.arrayElement([faker.datatype.boolean(), undefined]), pattern: faker.helpers.arrayElement([faker.string.alpha(20), undefined]), source: faker.helpers.arrayElement([{}, undefined])}, undefined]), product_link_rules: faker.helpers.arrayElement([Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({assign_assets_to: faker.helpers.arrayElement([Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({attribute: faker.string.alpha(20), channel: faker.helpers.arrayElement([faker.string.alpha(20), undefined]), locale: faker.helpers.arrayElement([faker.string.alpha(20), undefined]), mode: faker.string.alpha(20)})), undefined]), product_selections: faker.helpers.arrayElement([Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({channel: faker.helpers.arrayElement([faker.string.alpha(20), undefined]), field: faker.string.alpha(20), locale: faker.helpers.arrayElement([faker.string.alpha(20), undefined]), operator: faker.string.alpha(20), value: faker.string.alpha(20)})), undefined])})), undefined]), transformations: faker.helpers.arrayElement([Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({filename_prefix: faker.helpers.arrayElement([faker.string.alpha(20), undefined]), filename_suffix: faker.helpers.arrayElement([faker.string.alpha(20), undefined]), label: faker.string.alpha(20), operations: {parameters: faker.helpers.arrayElement([{colorspace: faker.helpers.arrayElement([faker.string.alpha(20), undefined]), height: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), quality: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), ratio: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), 'resolution-unit': faker.helpers.arrayElement([faker.string.alpha(20), undefined]), 'resolution-x': faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), 'resolution-y': faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), width: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined])}, undefined]), type: faker.helpers.arrayElement([faker.string.alpha(20), undefined])}, source: {attribute: faker.string.alpha(20), channel: faker.string.alpha(20), locale: faker.string.alpha(20)}, target: {attribute: faker.string.alpha(20), channel: faker.string.alpha(20), locale: faker.string.alpha(20)}})), undefined])})), undefined])}, undefined])})

export const getGetAssetFamilyCodeResponseMock = (): GetAssetFamilyCode200 => ({"attribute_as_main_media":"main_image","code":"model_pictures","labels":{"en_US":"Model pictures","fr_FR":"Photographies en pied"},"naming_convention":{"abort_asset_creation_on_error":true,"pattern":"/(?P<product_ref>.*)-.*/","source":{"channel":null,"locale":null,"property":"code"}},"product_link_rules":[{"assign_assets_to":[{"attribute":"model_pictures","mode":"replace"}],"product_selections":[{"field":"sku","operator":"EQUALS","value":"{{product_ref}}"}]}],"transformations":[{"filename_suffix":"_thumbnailBW","label":"Thumbnail plus black and white transformation","operations":[{"parameters":{"height":150,"width":150},"type":"thumbnail"},{"parameters":{"colorspace":"grey"},"type":"colorspace"}],"source":{"attribute":"main_image","channel":null,"locale":null},"target":{"attribute":"thumbnail","channel":null,"locale":null}}]})


export const getGetAssetFamiliesMockHandler = (overrideResponse?: GetAssetFamilies200One | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Promise<GetAssetFamilies200One> | GetAssetFamilies200One)) => {
  return http.get('*/api/rest/v1/asset-families', async (info) => {await delay(1000);
  
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getGetAssetFamiliesResponseMock()),
      { status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
  })
}

export const getGetAssetFamilyCodeMockHandler = (overrideResponse?: GetAssetFamilyCode200 | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Promise<GetAssetFamilyCode200> | GetAssetFamilyCode200)) => {
  return http.get('*/api/rest/v1/asset-families/:code', async (info) => {await delay(1000);
  
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getGetAssetFamilyCodeResponseMock()),
      { status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
  })
}

export const getPatchAssetFamilyCodeMockHandler = (overrideResponse?: void | ((info: Parameters<Parameters<typeof http.patch>[1]>[0]) => Promise<void> | void)) => {
  return http.patch('*/api/rest/v1/asset-families/:code', async (info) => {await delay(1000);
  if (typeof overrideResponse === 'function') {await overrideResponse(info); }
    return new HttpResponse(null,
      { status: 201,
        
      })
  })
}
export const getAssetFamilyMock = () => [
  getGetAssetFamiliesMockHandler(),
  getGetAssetFamilyCodeMockHandler(),
  getPatchAssetFamilyCodeMockHandler()
]
