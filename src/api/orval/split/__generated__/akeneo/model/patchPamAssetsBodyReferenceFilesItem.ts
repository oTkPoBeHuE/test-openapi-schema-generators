/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Akeneo PIM REST API
 * OpenAPI spec version: 1.0.0
 */
import type { _PatchPamAssetsBodyReferenceFilesItemLink } from './_patchPamAssetsBodyReferenceFilesItemLink';

export type PatchPamAssetsBodyReferenceFilesItem = {
  /** Links to get and download the reference file */
  _link?: _PatchPamAssetsBodyReferenceFilesItemLink;
  /** Code of the reference file */
  code?: string;
  /** Locale code of the reference file */
  locale?: string;
};
