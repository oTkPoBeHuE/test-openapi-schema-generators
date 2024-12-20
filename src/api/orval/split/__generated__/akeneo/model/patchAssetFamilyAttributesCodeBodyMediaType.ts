/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Akeneo PIM REST API
 * OpenAPI spec version: 1.0.0
 */

/**
 * For the `media_link` attribute type, it is the type of the media behind the url, to allow its preview in the PIM. For the `media_file` attribute type, it is the type of the file.
 */
export type PatchAssetFamilyAttributesCodeBodyMediaType = typeof PatchAssetFamilyAttributesCodeBodyMediaType[keyof typeof PatchAssetFamilyAttributesCodeBodyMediaType];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PatchAssetFamilyAttributesCodeBodyMediaType = {
  image: 'image',
  pdf: 'pdf',
  youtube: 'youtube',
  vimeo: 'vimeo',
  other: 'other',
} as const;
