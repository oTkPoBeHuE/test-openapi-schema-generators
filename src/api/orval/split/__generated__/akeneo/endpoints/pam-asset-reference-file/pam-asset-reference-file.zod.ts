/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Akeneo PIM REST API
 * OpenAPI spec version: 1.0.0
 */
import {
  z as zod
} from 'zod'

/**
 * This endpoint allows you to get the information about a reference file of a given PAM asset.
 * @summary Get a reference file
 */
export const getReferenceFilesLocaleCodeParams = zod.object({
  "asset_code": zod.string(),
  "locale_code": zod.string()
})

export const getReferenceFilesLocaleCodeResponse = zod.object({
  "_link": zod.object({
  "download": zod.object({
  "href": zod.string().optional()
}).optional()
}).optional(),
  "code": zod.string().optional(),
  "locale": zod.string().optional()
})

/**
 * This endpoint allows you to upload a new reference file for a given PAM asset and locale. It will also automatically generate all the variation files corresponding to this reference file.
 * @summary Upload a new reference file
 */
export const postReferenceFilesLocaleCodeParams = zod.object({
  "asset_code": zod.string(),
  "locale_code": zod.string()
})

export const postReferenceFilesLocaleCodeHeader = zod.object({
  "Content-type": zod.string()
})

export const postReferenceFilesLocaleCodeBody = zod.object({
  "file": zod.string()
})

/**
 * This endpoint allows you to download a given reference file.
 * @summary Download a reference file
 */
export const getReferenceFilesChannelCodeLocaleCodeDownloadParams = zod.object({
  "asset_code": zod.string(),
  "locale_code": zod.string()
})
