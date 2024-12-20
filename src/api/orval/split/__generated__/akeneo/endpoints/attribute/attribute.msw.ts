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
  GetAttributes200One,
  GetAttributesCode200,
  PatchAttributes200One
} from '../../model'

export const getGetAttributesResponseMock = (): GetAttributes200One => ({_links: faker.helpers.arrayElement([{first: faker.helpers.arrayElement([{href: faker.helpers.arrayElement([faker.string.alpha(20), undefined])}, undefined]), next: faker.helpers.arrayElement([{href: faker.helpers.arrayElement([faker.string.alpha(20), undefined])}, undefined]), previous: faker.helpers.arrayElement([{href: faker.helpers.arrayElement([faker.string.alpha(20), undefined])}, undefined]), self: faker.helpers.arrayElement([{href: faker.helpers.arrayElement([faker.string.alpha(20), undefined])}, undefined])}, undefined]), current_page: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]),..._embedded: faker.helpers.arrayElement([{items: faker.helpers.arrayElement([Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({_links: faker.helpers.arrayElement([{self: faker.helpers.arrayElement([{href: faker.helpers.arrayElement([faker.string.alpha(20), undefined])}, undefined])}, undefined]),allowed_extensions: faker.helpers.arrayElement([Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => (faker.string.alpha(20))), undefined]), available_locales: faker.helpers.arrayElement([Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => (faker.string.alpha(20))), undefined]), code: faker.string.alpha(20), date_max: faker.helpers.arrayElement([`${faker.date.past().toISOString().split('.')[0]}Z`, undefined]), date_min: faker.helpers.arrayElement([`${faker.date.past().toISOString().split('.')[0]}Z`, undefined]), decimals_allowed: faker.helpers.arrayElement([faker.datatype.boolean(), undefined]), default_metric_unit: faker.helpers.arrayElement([faker.string.alpha(20), undefined]), default_value: faker.helpers.arrayElement([faker.datatype.boolean(), undefined]), group: faker.string.alpha(20), group_labels: faker.helpers.arrayElement([{localeCode: faker.helpers.arrayElement([faker.string.alpha(20), undefined])}, undefined]), labels: faker.helpers.arrayElement([{localeCode: faker.helpers.arrayElement([faker.string.alpha(20), undefined])}, undefined]), localizable: faker.helpers.arrayElement([faker.datatype.boolean(), undefined]), max_characters: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), max_file_size: faker.helpers.arrayElement([faker.string.alpha(20), undefined]), metric_family: faker.helpers.arrayElement([faker.string.alpha(20), undefined]), negative_allowed: faker.helpers.arrayElement([faker.datatype.boolean(), undefined]), number_max: faker.helpers.arrayElement([faker.string.alpha(20), undefined]), number_min: faker.helpers.arrayElement([faker.string.alpha(20), undefined]), reference_data_name: faker.helpers.arrayElement([faker.string.alpha(20), undefined]), scopable: faker.helpers.arrayElement([faker.datatype.boolean(), undefined]), sort_order: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), table_configuration: faker.helpers.arrayElement([Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({code: faker.string.alpha(20), data_type: faker.helpers.arrayElement(['select','text','number','boolean'] as const), is_required_for_completeness: faker.helpers.arrayElement([faker.datatype.boolean(), undefined]), labels: faker.helpers.arrayElement([{localeCode: faker.helpers.arrayElement([faker.string.alpha(20), undefined])}, undefined]), validations: faker.helpers.arrayElement([{decimals_allowed: faker.helpers.arrayElement([faker.datatype.boolean(), undefined]), max: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), max_length: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), min: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined])}, undefined])})), undefined]), type: faker.helpers.arrayElement(['pim_catalog_identifier','pim_catalog_metric','pim_catalog_number','pim_catalog_reference_data_multi_select','pim_catalog_reference_data_simple_select','pim_catalog_simpleselect','pim_catalog_multiselect','pim_catalog_date','pim_catalog_textarea','pim_catalog_text','pim_catalog_file','pim_catalog_image','pim_catalog_price_collection','pim_catalog_boolean','akeneo_reference_entity','akeneo_reference_entity_collection','pim_catalog_asset_collection'] as const), unique: faker.helpers.arrayElement([faker.datatype.boolean(), undefined]), useable_as_grid_filter: faker.helpers.arrayElement([faker.datatype.boolean(), undefined]), validation_regexp: faker.helpers.arrayElement([faker.string.alpha(20), undefined]), validation_rule: faker.helpers.arrayElement([faker.string.alpha(20), undefined]), wysiwyg_enabled: faker.helpers.arrayElement([faker.datatype.boolean(), undefined])})), undefined])}, undefined])})

export const getPatchAttributesResponseMock = (overrideResponse: Partial< PatchAttributes200One > = {}): PatchAttributes200One => ({code: faker.helpers.arrayElement([faker.string.alpha(20), undefined]), identifier: faker.helpers.arrayElement([faker.string.alpha(20), undefined]), line: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), message: faker.helpers.arrayElement([faker.string.alpha(20), undefined]), status_code: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), ...overrideResponse})

export const getGetAttributesCodeResponseMock = (): GetAttributesCode200 => ({"allowed_extensions":[],"available_locales":[],"code":"release_date","date_max":"2024-12-15T12:31:08.230Z","date_min":"2024-12-15T12:31:08.230Z","decimals_allowed":null,"default_metric_unit":null,"default_value":null,"group":"marketing","group_labels":{"en_US":"Marketing","fr_FR":"Marketing"},"labels":{"en_US":"Sale date","fr_FR":"Date des soldes"},"localizable":false,"max_characters":null,"max_file_size":null,"metric_family":null,"minimum_input_length":null,"negative_allowed":null,"number_max":null,"number_min":null,"reference_data_name":null,"scopable":false,"sort_order":1,"type":"pim_catalog_date","unique":false,"useable_as_grid_filter":true,"validation_regexp":null,"validation_rule":null,"wysiwyg_enabled":null})


export const getGetAttributesMockHandler = (overrideResponse?: GetAttributes200One | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Promise<GetAttributes200One> | GetAttributes200One)) => {
  return http.get('*/api/rest/v1/attributes', async (info) => {await delay(1000);
  
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getGetAttributesResponseMock()),
      { status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
  })
}

export const getPatchAttributesMockHandler = (overrideResponse?: PatchAttributes200One | ((info: Parameters<Parameters<typeof http.patch>[1]>[0]) => Promise<PatchAttributes200One> | PatchAttributes200One)) => {
  return http.patch('*/api/rest/v1/attributes', async (info) => {await delay(1000);
  
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getPatchAttributesResponseMock()),
      { status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
  })
}

export const getPostAttributesMockHandler = (overrideResponse?: void | ((info: Parameters<Parameters<typeof http.post>[1]>[0]) => Promise<void> | void)) => {
  return http.post('*/api/rest/v1/attributes', async (info) => {await delay(1000);
  if (typeof overrideResponse === 'function') {await overrideResponse(info); }
    return new HttpResponse(null,
      { status: 201,
        
      })
  })
}

export const getGetAttributesCodeMockHandler = (overrideResponse?: GetAttributesCode200 | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Promise<GetAttributesCode200> | GetAttributesCode200)) => {
  return http.get('*/api/rest/v1/attributes/:code', async (info) => {await delay(1000);
  
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getGetAttributesCodeResponseMock()),
      { status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
  })
}

export const getPatchAttributesCodeMockHandler = (overrideResponse?: void | ((info: Parameters<Parameters<typeof http.patch>[1]>[0]) => Promise<void> | void)) => {
  return http.patch('*/api/rest/v1/attributes/:code', async (info) => {await delay(1000);
  if (typeof overrideResponse === 'function') {await overrideResponse(info); }
    return new HttpResponse(null,
      { status: 201,
        
      })
  })
}
export const getAttributeMock = () => [
  getGetAttributesMockHandler(),
  getPatchAttributesMockHandler(),
  getPostAttributesMockHandler(),
  getGetAttributesCodeMockHandler(),
  getPatchAttributesCodeMockHandler()
]
