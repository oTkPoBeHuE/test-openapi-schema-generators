/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Akeneo PIM REST API
 * OpenAPI spec version: 1.0.0
 */
import type { PatchAssetFamilyCodeBodyLabels } from './patchAssetFamilyCodeBodyLabels';
import type { PatchAssetFamilyCodeBodyNamingConvention } from './patchAssetFamilyCodeBodyNamingConvention';
import type { PatchAssetFamilyCodeBodyProductLinkRulesItem } from './patchAssetFamilyCodeBodyProductLinkRulesItem';
import type { PatchAssetFamilyCodeBodyTransformationsItem } from './patchAssetFamilyCodeBodyTransformationsItem';

export type PatchAssetFamilyCodeBody = {
  /** Attribute code that is used as the main media of the asset family. */
  attribute_as_main_media?: string;
  /** Asset family code */
  code: string;
  /** Asset family labels for each locale */
  labels?: PatchAssetFamilyCodeBodyLabels;
  /** The naming convention ran over the asset code or the main media filename upon each asset creation, in order to automatically set several values in asset attributes. To learn more and see the format of this property, take a look at <a href='/concepts/asset-manager.html#focus-on-the-naming-convention'>here</a>. */
  naming_convention?: PatchAssetFamilyCodeBodyNamingConvention;
  /** The rules that will be run after the asset creation, in order to automatically link the assets of this family to a set of products. To understand the format of this property, see <a href='/concepts/asset-manager.html#focus-on-the-product-link-rule'>here</a>. */
  product_link_rules?: PatchAssetFamilyCodeBodyProductLinkRulesItem[];
  /** The transformations to perform on source files in order to generate new files into your asset attributes (only available since v4.0). To understand the format of this property, see <a href='/concepts/asset-manager.html#focus-on-the-transformations'>here</a>. */
  transformations?: PatchAssetFamilyCodeBodyTransformationsItem[];
};
