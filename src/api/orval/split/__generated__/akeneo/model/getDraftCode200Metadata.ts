/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Akeneo PIM REST API
 * OpenAPI spec version: 1.0.0
 */
import type { GetDraftCode200MetadataWorkflowStatus } from './getDraftCode200MetadataWorkflowStatus';

/**
 * More information around the product (only available since the v2.0 in the Enterprise Edition)
 */
export type GetDraftCode200Metadata = {
  /** Status of the product regarding the user permissions */
  workflow_status?: GetDraftCode200MetadataWorkflowStatus;
};
