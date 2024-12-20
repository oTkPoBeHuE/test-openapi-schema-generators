/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Akeneo PIM REST API
 * OpenAPI spec version: 1.0.0
 */
import type { PatchReferenceEntityRecordsBodyItemValues } from './patchReferenceEntityRecordsBodyItemValues';

export type PatchReferenceEntityRecordsBodyItem = {
  /** Code of the record */
  code: string;
  /** Date of creation. */
  created?: string;
  /** Date of the last update. */
  updated?: string;
  /** Record attributes values, see <a href='/concepts/reference-entities.html#focus-on-the-reference-entity-record-values'>Reference entity record values</a> section for more details */
  values?: PatchReferenceEntityRecordsBodyItemValues;
};
