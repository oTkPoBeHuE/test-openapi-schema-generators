/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Akeneo PIM REST API
 * OpenAPI spec version: 1.0.0
 */
import type { PatchAssetFamilyCodeBodyProductLinkRulesItemAssignAssetsToItem } from './patchAssetFamilyCodeBodyProductLinkRulesItemAssignAssetsToItem';
import type { PatchAssetFamilyCodeBodyProductLinkRulesItemProductSelectionsItem } from './patchAssetFamilyCodeBodyProductLinkRulesItemProductSelectionsItem';

export type PatchAssetFamilyCodeBodyProductLinkRulesItem = {
  /** The product value in which your assets will be assigned. More details <a href='/concepts/asset-manager.html#product-value-assignment'>here</a>. */
  assign_assets_to?: PatchAssetFamilyCodeBodyProductLinkRulesItemAssignAssetsToItem[];
  /** The product selection to which the assets of the asset family to be automatically linked. More details <a href='/concepts/asset-manager.html#product-selection'>here</a>. */
  product_selections?: PatchAssetFamilyCodeBodyProductLinkRulesItemProductSelectionsItem[];
};
