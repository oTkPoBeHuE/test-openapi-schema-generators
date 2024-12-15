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
  GetMediaFiles200One,
  GetMediaFilesCode200
} from '../../model'

export const getGetMediaFilesResponseMock = (): GetMediaFiles200One => ({_links: faker.helpers.arrayElement([{first: faker.helpers.arrayElement([{href: faker.helpers.arrayElement([faker.string.alpha(20), undefined])}, undefined]), next: faker.helpers.arrayElement([{href: faker.helpers.arrayElement([faker.string.alpha(20), undefined])}, undefined]), previous: faker.helpers.arrayElement([{href: faker.helpers.arrayElement([faker.string.alpha(20), undefined])}, undefined]), self: faker.helpers.arrayElement([{href: faker.helpers.arrayElement([faker.string.alpha(20), undefined])}, undefined])}, undefined]), current_page: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]),..._embedded: faker.helpers.arrayElement([{items: faker.helpers.arrayElement([Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({_links: faker.helpers.arrayElement([{download: faker.helpers.arrayElement([{href: faker.helpers.arrayElement([faker.string.alpha(20), undefined])}, undefined]), self: faker.helpers.arrayElement([{href: faker.helpers.arrayElement([faker.string.alpha(20), undefined])}, undefined])}, undefined]),code: faker.helpers.arrayElement([faker.string.alpha(20), undefined]), extension: faker.helpers.arrayElement([faker.string.alpha(20), undefined]), mime_type: faker.helpers.arrayElement([faker.string.alpha(20), undefined]), original_filename: faker.helpers.arrayElement([faker.string.alpha(20), undefined]), size: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined])})), undefined])}, undefined])})

export const getGetMediaFilesCodeResponseMock = (): GetMediaFilesCode200 => ({"_links":{"download":{"href":"https://demo.akeneo.com/api/rest/v1/media-files/7/5/8/e/758e39d48ea7b42a55091434fd3d8b6cf3189b7f_10806799_1356.jpg/download"}},"code":"7/5/8/e/758e39d48ea7b42a55091434fd3d8b6cf3189b7f_10806799_1356.jpg","extension":"jpg","mime_type":"image/jpeg","original_filename":"10806799-1356.jpg","size":16070})


export const getGetMediaFilesMockHandler = (overrideResponse?: GetMediaFiles200One | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Promise<GetMediaFiles200One> | GetMediaFiles200One)) => {
  return http.get('*/api/rest/v1/media-files', async (info) => {await delay(1000);
  
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getGetMediaFilesResponseMock()),
      { status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
  })
}

export const getPostMediaFilesMockHandler = (overrideResponse?: void | ((info: Parameters<Parameters<typeof http.post>[1]>[0]) => Promise<void> | void)) => {
  return http.post('*/api/rest/v1/media-files', async (info) => {await delay(1000);
  if (typeof overrideResponse === 'function') {await overrideResponse(info); }
    return new HttpResponse(null,
      { status: 201,
        
      })
  })
}

export const getGetMediaFilesCodeMockHandler = (overrideResponse?: GetMediaFilesCode200 | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Promise<GetMediaFilesCode200> | GetMediaFilesCode200)) => {
  return http.get('*/api/rest/v1/media-files/:code', async (info) => {await delay(1000);
  
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getGetMediaFilesCodeResponseMock()),
      { status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
  })
}

export const getGetMediaFilesCodeDownloadMockHandler = (overrideResponse?: void | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Promise<void> | void)) => {
  return http.get('*/api/rest/v1/media-files/:code/download', async (info) => {await delay(1000);
  if (typeof overrideResponse === 'function') {await overrideResponse(info); }
    return new HttpResponse(null,
      { status: 200,
        
      })
  })
}
export const getProductMediaFileMock = () => [
  getGetMediaFilesMockHandler(),
  getPostMediaFilesMockHandler(),
  getGetMediaFilesCodeMockHandler(),
  getGetMediaFilesCodeDownloadMockHandler()
]
