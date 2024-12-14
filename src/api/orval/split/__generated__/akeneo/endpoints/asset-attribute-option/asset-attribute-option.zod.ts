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
 * This endpoint allows you to get a list of attribute options for a given asset family.
 * @summary Get a list of attribute options of a given attribute for a given asset family
 */
export const getAssetFamilyAttributesAttributeCodeOptionsParams = zod.object({
  "asset_family_code": zod.string(),
  "attribute_code": zod.string()
})

export const getAssetFamilyAttributesAttributeCodeOptionsResponseItem = zod.object({
  "code": zod.string(),
  "labels": zod.object({
  "localeCode": zod.string().optional()
}).optional()
})
export const getAssetFamilyAttributesAttributeCodeOptionsResponse = zod.array(getAssetFamilyAttributesAttributeCodeOptionsResponseItem)

/**
 * This endpoint allows you to get the information about a given asset attribute option.
 * @summary Get an attribute option for a given attribute of a given asset family
 */
export const getAssetAttributesAttributeCodeOptionsCodeParams = zod.object({
  "asset_family_code": zod.string(),
  "attribute_code": zod.string(),
  "code": zod.string()
})

export const getAssetAttributesAttributeCodeOptionsCodeResponse = zod.object({
  "code": zod.string(),
  "labels": zod.object({
  "localeCode": zod.string().optional()
}).optional()
})

/**
 * This endpoint allows you to update a given option for a given attribute and a given asset family. Learn more about the <a href="/documentation/update.html#update-behavior">Update behavior</a>. Note that if the option does not already exist for the given attribute of the given asset family, it creates it.
 * @summary Update/create an asset attribute option for a given asset family
 */
export const patchAssetAttributesAttributeCodeOptionsCodeParams = zod.object({
  "asset_family_code": zod.string(),
  "attribute_code": zod.string(),
  "code": zod.string()
})

export const patchAssetAttributesAttributeCodeOptionsCodeBody = zod.object({
  "code": zod.string(),
  "labels": zod.object({
  "localeCode": zod.string().optional()
}).optional()
})
