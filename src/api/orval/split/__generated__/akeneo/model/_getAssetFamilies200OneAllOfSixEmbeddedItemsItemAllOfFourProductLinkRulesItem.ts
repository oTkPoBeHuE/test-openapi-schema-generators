/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Akeneo PIM REST API
 * OpenAPI spec version: 1.0.0
 */
import type { _GetAssetFamilies200OneAllOfSixEmbeddedItemsItemAllOfFourProductLinkRulesItemAssignAssetsToItem } from './_getAssetFamilies200OneAllOfSixEmbeddedItemsItemAllOfFourProductLinkRulesItemAssignAssetsToItem';
import type { _GetAssetFamilies200OneAllOfSixEmbeddedItemsItemAllOfFourProductLinkRulesItemProductSelectionsItem } from './_getAssetFamilies200OneAllOfSixEmbeddedItemsItemAllOfFourProductLinkRulesItemProductSelectionsItem';

export type _GetAssetFamilies200OneAllOfSixEmbeddedItemsItemAllOfFourProductLinkRulesItem = {
  /** The product value in which your assets will be assigned. More details <a href='/concepts/asset-manager.html#product-value-assignment'>here</a>. */
  assign_assets_to?: _GetAssetFamilies200OneAllOfSixEmbeddedItemsItemAllOfFourProductLinkRulesItemAssignAssetsToItem[];
  /** The product selection to which the assets of the asset family to be automatically linked. More details <a href='/concepts/asset-manager.html#product-selection'>here</a>. */
  product_selections?: _GetAssetFamilies200OneAllOfSixEmbeddedItemsItemAllOfFourProductLinkRulesItemProductSelectionsItem[];
};
