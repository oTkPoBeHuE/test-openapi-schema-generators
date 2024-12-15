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
 * This endpoint allows you to create a new media file and associate it to the image of a reference entity, or to the main image or to an attribute value of a record.
 * @summary Create a new media file for a reference entity or a record
 */
export const postReferenceEntityMediaFilesHeader = zod.object({
  "Content-type": zod.string()
})

export const postReferenceEntityMediaFilesBody = zod.object({
  "file": zod.string()
})

/**
 * This endpoint allows you to download a given media file that is associated with a reference entity or a record.
 * @summary Download the media file associated to a reference entity or a record
 */
export const getReferenceEntityMediaFilesCodeParams = zod.object({
  "code": zod.string()
})
