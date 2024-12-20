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
  GetProductModelDraftCode200,
  GetProductModels200One,
  GetProductModelsCode200,
  PatchProductModels200One
} from '../../model'

export const getGetProductModelsResponseMock = (): GetProductModels200One => ({_links: faker.helpers.arrayElement([{first: faker.helpers.arrayElement([{href: faker.helpers.arrayElement([faker.string.alpha(20), undefined])}, undefined]), next: faker.helpers.arrayElement([{href: faker.helpers.arrayElement([faker.string.alpha(20), undefined])}, undefined]), previous: faker.helpers.arrayElement([{href: faker.helpers.arrayElement([faker.string.alpha(20), undefined])}, undefined]), self: faker.helpers.arrayElement([{href: faker.helpers.arrayElement([faker.string.alpha(20), undefined])}, undefined])}, undefined]), current_page: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]),..._embedded: faker.helpers.arrayElement([{items: faker.helpers.arrayElement([Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({_links: faker.helpers.arrayElement([{self: faker.helpers.arrayElement([{href: faker.helpers.arrayElement([faker.string.alpha(20), undefined])}, undefined])}, undefined]),associations: faker.helpers.arrayElement([{associationTypeCode: faker.helpers.arrayElement([{groups: faker.helpers.arrayElement([Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => (faker.string.alpha(20))), undefined]), product_models: faker.helpers.arrayElement([Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => (faker.string.alpha(20))), undefined]), products: faker.helpers.arrayElement([Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => (faker.string.alpha(20))), undefined])}, undefined])}, undefined]), categories: faker.helpers.arrayElement([Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => (faker.string.alpha(20))), undefined]), code: faker.string.alpha(20), created: faker.helpers.arrayElement([faker.string.alpha(20), undefined]), family: faker.helpers.arrayElement([faker.string.alpha(20), undefined]), family_variant: faker.string.alpha(20), metadata: faker.helpers.arrayElement([{workflow_status: faker.helpers.arrayElement([faker.helpers.arrayElement(['read_only','draft_in_progress','proposal_waiting_for_approval','working_copy'] as const), undefined])}, undefined]), parent: faker.helpers.arrayElement([faker.string.alpha(20), undefined]), quality_scores: faker.helpers.arrayElement([{}, undefined]), quantified_associations: faker.helpers.arrayElement([{quantifiedAssociationTypeCode: faker.helpers.arrayElement([{product_models: faker.helpers.arrayElement([Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({code: faker.helpers.arrayElement([faker.string.alpha(20), undefined]), quantity: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined])})), undefined]), products: faker.helpers.arrayElement([Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({identifier: faker.helpers.arrayElement([faker.string.alpha(20), undefined]), quantity: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined])})), undefined])}, undefined])}, undefined]), updated: faker.helpers.arrayElement([faker.string.alpha(20), undefined]), values: faker.helpers.arrayElement([{attributeCode: faker.helpers.arrayElement([Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({data: faker.helpers.arrayElement([{}, undefined]), locale: faker.helpers.arrayElement([faker.string.alpha(20), undefined]), scope: faker.helpers.arrayElement([faker.string.alpha(20), undefined])})), undefined])}, undefined])})), undefined])}, undefined])})

export const getPatchProductModelsResponseMock = (overrideResponse: Partial< PatchProductModels200One > = {}): PatchProductModels200One => ({code: faker.helpers.arrayElement([faker.string.alpha(20), undefined]), identifier: faker.helpers.arrayElement([faker.string.alpha(20), undefined]), line: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), message: faker.helpers.arrayElement([faker.string.alpha(20), undefined]), status_code: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), ...overrideResponse})

export const getGetProductModelsCodeResponseMock = (): GetProductModelsCode200 => ({"associations":{"PACK":{"groups":[],"product_models":[],"products":["sunglass"]}},"categories":["summer_collection"],"code":"model-biker-jacket-leather","created":"2024-12-15T12:31:08.233Z","family":"clothing","family_variant":"clothing_material_size","parent":"model-biker-jacket","quality_scores":[{"data":"A","locale":"en_US","scope":"ecommerce"},{"data":"B","locale":"fr_FR","scope":"ecommerce"},{"data":"D","locale":"en_US","scope":"tablet"},{"data":"E","locale":"fr_FR","scope":"tablet"}],"quantified_associations":{"PRODUCT_SET":{"product_models":[{"code":"model-biker-jacket-leather","quantity":2}],"products":[{"identifier":"top","quantity":2},{"identifier":"cap","quantity":1}]}},"updated":"2024-12-15T12:31:08.233Z","values":{"collection":[{"data":["summer_2017"],"locale":null,"scope":null}],"color":[{"data":"antique_white","locale":null,"scope":null}],"description":[{"data":"Biker jacket","locale":"en_US","scope":"ecommerce"}],"material":[{"data":"leather","locale":null,"scope":null}],"name":[{"data":"Biker jacket","locale":"en_US","scope":null}],"variation_name":[{"data":"Biker jacket leather","locale":"en_US","scope":null}]}})

export const getGetProductModelDraftCodeResponseMock = (): GetProductModelDraftCode200 => ({"associations":{"PACK":{"groups":[],"product_models":[],"products":["sunglass"]}},"categories":["summer_collection"],"code":"model-biker-jacket-leather","created":"2024-12-15T12:31:08.233Z","family":"clothing","family_variant":"clothing_material_size","parent":"model-biker-jacket","quality_scores":[{"data":"A","locale":"en_US","scope":"ecommerce"},{"data":"B","locale":"fr_FR","scope":"ecommerce"},{"data":"D","locale":"en_US","scope":"tablet"},{"data":"E","locale":"fr_FR","scope":"tablet"}],"quantified_associations":{"PRODUCT_SET":{"product_models":[{"code":"model-biker-jacket-leather","quantity":2}],"products":[{"identifier":"top","quantity":2},{"identifier":"cap","quantity":1}]}},"updated":"2024-12-15T12:31:08.233Z","values":{"collection":[{"data":["summer_2017"],"locale":null,"scope":null}],"color":[{"data":"antique_white","locale":null,"scope":null}],"description":[{"data":"Biker jacket","locale":"en_US","scope":"ecommerce"}],"material":[{"data":"leather","locale":null,"scope":null}],"name":[{"data":"Biker jacket","locale":"en_US","scope":null}],"variation_name":[{"data":"Biker jacket leather","locale":"en_US","scope":null}]}})


export const getGetProductModelsMockHandler = (overrideResponse?: GetProductModels200One | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Promise<GetProductModels200One> | GetProductModels200One)) => {
  return http.get('*/api/rest/v1/product-models', async (info) => {await delay(1000);
  
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getGetProductModelsResponseMock()),
      { status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
  })
}

export const getPatchProductModelsMockHandler = (overrideResponse?: PatchProductModels200One | ((info: Parameters<Parameters<typeof http.patch>[1]>[0]) => Promise<PatchProductModels200One> | PatchProductModels200One)) => {
  return http.patch('*/api/rest/v1/product-models', async (info) => {await delay(1000);
  
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getPatchProductModelsResponseMock()),
      { status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
  })
}

export const getPostProductModelsMockHandler = (overrideResponse?: void | ((info: Parameters<Parameters<typeof http.post>[1]>[0]) => Promise<void> | void)) => {
  return http.post('*/api/rest/v1/product-models', async (info) => {await delay(1000);
  if (typeof overrideResponse === 'function') {await overrideResponse(info); }
    return new HttpResponse(null,
      { status: 201,
        
      })
  })
}

export const getDeleteProductModelsCodeMockHandler = (overrideResponse?: void | ((info: Parameters<Parameters<typeof http.delete>[1]>[0]) => Promise<void> | void)) => {
  return http.delete('*/api/rest/v1/product-models/:code', async (info) => {await delay(1000);
  if (typeof overrideResponse === 'function') {await overrideResponse(info); }
    return new HttpResponse(null,
      { status: 204,
        
      })
  })
}

export const getGetProductModelsCodeMockHandler = (overrideResponse?: GetProductModelsCode200 | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Promise<GetProductModelsCode200> | GetProductModelsCode200)) => {
  return http.get('*/api/rest/v1/product-models/:code', async (info) => {await delay(1000);
  
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getGetProductModelsCodeResponseMock()),
      { status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
  })
}

export const getPatchProductModelsCodeMockHandler = (overrideResponse?: void | ((info: Parameters<Parameters<typeof http.patch>[1]>[0]) => Promise<void> | void)) => {
  return http.patch('*/api/rest/v1/product-models/:code', async (info) => {await delay(1000);
  if (typeof overrideResponse === 'function') {await overrideResponse(info); }
    return new HttpResponse(null,
      { status: 201,
        
      })
  })
}

export const getGetProductModelDraftCodeMockHandler = (overrideResponse?: GetProductModelDraftCode200 | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Promise<GetProductModelDraftCode200> | GetProductModelDraftCode200)) => {
  return http.get('*/api/rest/v1/product-models/:code/draft', async (info) => {await delay(1000);
  
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getGetProductModelDraftCodeResponseMock()),
      { status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
  })
}

export const getPostProductModelProposalMockHandler = (overrideResponse?: void | ((info: Parameters<Parameters<typeof http.post>[1]>[0]) => Promise<void> | void)) => {
  return http.post('*/api/rest/v1/product-models/:code/proposal', async (info) => {await delay(1000);
  if (typeof overrideResponse === 'function') {await overrideResponse(info); }
    return new HttpResponse(null,
      { status: 201,
        
      })
  })
}
export const getProductModelMock = () => [
  getGetProductModelsMockHandler(),
  getPatchProductModelsMockHandler(),
  getPostProductModelsMockHandler(),
  getDeleteProductModelsCodeMockHandler(),
  getGetProductModelsCodeMockHandler(),
  getPatchProductModelsCodeMockHandler(),
  getGetProductModelDraftCodeMockHandler(),
  getPostProductModelProposalMockHandler()
]
