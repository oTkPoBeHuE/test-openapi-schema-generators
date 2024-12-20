/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Akeneo PIM REST API
 * OpenAPI spec version: 1.0.0
 */
import type { _GetAssetFamilies200OneAllOfSixEmbeddedItemsItemAllOfFourNamingConventionSource } from './_getAssetFamilies200OneAllOfSixEmbeddedItemsItemAllOfFourNamingConventionSource';

/**
 * The naming convention ran over the asset code or the main media filename upon each asset creation, in order to automatically set several values in asset attributes. To learn more and see the format of this property, take a look at <a href='/concepts/asset-manager.html#focus-on-the-naming-convention'>here</a>.
 */
export type _GetAssetFamilies200OneAllOfSixEmbeddedItemsItemAllOfFourNamingConvention = {
  /** Whether the asset should be created if the naming convention failed to apply. More details <a href='/concepts/asset-manager.html#abort-asset-creation-on-error'>here</a>. */
  abort_asset_creation_on_error?: boolean;
  /** The regular expression that should be applied on the source. More details <a href='/concepts/asset-manager.html#pattern'>here</a>. */
  pattern?: string;
  /** The string on which the naming convention should be applied. More details <a href='/concepts/asset-manager.html#source'>here</a>. */
  source?: _GetAssetFamilies200OneAllOfSixEmbeddedItemsItemAllOfFourNamingConventionSource;
};
