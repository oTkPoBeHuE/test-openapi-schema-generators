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
 * This endpoint allows you to create a new media file and associate it to a media file attribute value of an asset.
 * @summary Create a new media file for an asset
 */
export const postAssetMediaFilesHeader = zod.object({
  "Content-type": zod.string()
})

export const postAssetMediaFilesBody = zod.object({
  "file": zod.string()
})

/**
 * This endpoint allows you to download a given media file that is associated with an asset.
 * @summary Download the media file associated to an asset
 */
export const getAssetMediaFilesCodeParams = zod.object({
  "code": zod.string()
})

