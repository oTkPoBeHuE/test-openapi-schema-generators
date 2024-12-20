/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Akeneo PIM REST API
 * OpenAPI spec version: 1.0.0
 */
import type { PatchPamAssetsBodyReferenceFilesItem } from './patchPamAssetsBodyReferenceFilesItem';
import type { PatchPamAssetsBodyVariationFilesItem } from './patchPamAssetsBodyVariationFilesItem';

export type PatchPamAssetsBody = {
  /** Codes of the PAM asset categories in which the asset is classified */
  categories?: string[];
  /** PAM asset code */
  code: string;
  /** Description of the PAM asset */
  description?: string;
  /** Date on which the PAM asset expire */
  end_of_use?: string;
  /** Whether the asset is localized or not, meaning if you want to have different reference files for each of your locale */
  localizable?: boolean;
  /** Reference files of the PAM asset */
  reference_files?: PatchPamAssetsBodyReferenceFilesItem[];
  /** Tags of the PAM asset */
  tags?: string[];
  /** Variations of the PAM asset */
  variation_files?: PatchPamAssetsBodyVariationFilesItem[];
};
