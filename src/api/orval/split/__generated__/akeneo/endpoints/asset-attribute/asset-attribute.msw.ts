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
  GetAssetFamiliesCodeAttributes200Item,
  GetAssetFamilyAttributesCode200
} from '../../model'

export const getGetAssetFamiliesCodeAttributesResponseMock = (): GetAssetFamiliesCodeAttributes200Item[] => (Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({allowed_extensions: faker.helpers.arrayElement([Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => (faker.string.alpha(20))), undefined]), code: faker.string.alpha(20), decimals_allowed: faker.helpers.arrayElement([faker.datatype.boolean(), undefined]), is_read_only: faker.helpers.arrayElement([faker.datatype.boolean(), undefined]), is_required_for_completeness: faker.helpers.arrayElement([faker.datatype.boolean(), undefined]), is_rich_text_editor: faker.helpers.arrayElement([faker.datatype.boolean(), undefined]), is_textarea: faker.helpers.arrayElement([faker.datatype.boolean(), undefined]), labels: faker.helpers.arrayElement([{localeCode: faker.helpers.arrayElement([faker.string.alpha(20), undefined])}, undefined]), max_characters: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), max_file_size: faker.helpers.arrayElement([faker.string.alpha(20), undefined]), max_value: faker.helpers.arrayElement([faker.string.alpha(20), undefined]), media_type: faker.helpers.arrayElement(['image','pdf','youtube','vimeo','other'] as const), min_value: faker.helpers.arrayElement([faker.string.alpha(20), undefined]), prefix: faker.helpers.arrayElement([faker.string.alpha(20), undefined]), suffix: faker.helpers.arrayElement([faker.string.alpha(20), undefined]), type: faker.helpers.arrayElement(['text','media_link','number','media_file','single_option','multiple_options','reference_entity_single_link','reference_entity_multiple_links','boolean'] as const), validation_regexp: faker.helpers.arrayElement([faker.string.alpha(20), undefined]), validation_rule: faker.helpers.arrayElement([faker.helpers.arrayElement(['email','url','regexp','none'] as const), undefined]), value_per_channel: faker.helpers.arrayElement([faker.datatype.boolean(), undefined]), value_per_locale: faker.helpers.arrayElement([faker.datatype.boolean(), undefined])})))

export const getGetAssetFamilyAttributesCodeResponseMock = (): GetAssetFamilyAttributesCode200 => ({"code":"model_is_wearing_size","is_required_for_completeness":true,"labels":{"en_US":"Model is wearing size","fr_FR":"Le mannequin porte la taille"},"type":"single_option","value_per_channel":false,"value_per_locale":false})


export const getGetAssetFamiliesCodeAttributesMockHandler = (overrideResponse?: GetAssetFamiliesCodeAttributes200Item[] | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Promise<GetAssetFamiliesCodeAttributes200Item[]> | GetAssetFamiliesCodeAttributes200Item[])) => {
  return http.get('*/api/rest/v1/asset-families/:assetFamilyCode/attributes', async (info) => {await delay(1000);
  
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getGetAssetFamiliesCodeAttributesResponseMock()),
      { status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
  })
}

export const getGetAssetFamilyAttributesCodeMockHandler = (overrideResponse?: GetAssetFamilyAttributesCode200 | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Promise<GetAssetFamilyAttributesCode200> | GetAssetFamilyAttributesCode200)) => {
  return http.get('*/api/rest/v1/asset-families/:assetFamilyCode/attributes/:code', async (info) => {await delay(1000);
  
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getGetAssetFamilyAttributesCodeResponseMock()),
      { status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
  })
}

export const getPatchAssetFamilyAttributesCodeMockHandler = (overrideResponse?: void | ((info: Parameters<Parameters<typeof http.patch>[1]>[0]) => Promise<void> | void)) => {
  return http.patch('*/api/rest/v1/asset-families/:assetFamilyCode/attributes/:code', async (info) => {await delay(1000);
  if (typeof overrideResponse === 'function') {await overrideResponse(info); }
    return new HttpResponse(null,
      { status: 201,
        
      })
  })
}
export const getAssetAttributeMock = () => [
  getGetAssetFamiliesCodeAttributesMockHandler(),
  getGetAssetFamilyAttributesCodeMockHandler(),
  getPatchAssetFamilyAttributesCodeMockHandler()
]
