/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Akeneo PIM REST API
 * OpenAPI spec version: 1.0.0
 */
import type { ProductMetadataWorkflowStatus } from './productMetadataWorkflowStatus';

/**
 * More information around the product (only available since the v2.0 in the Enterprise Edition)
 */
export type ProductMetadata = {
  /** Status of the product regarding the user permissions */
  workflow_status?: ProductMetadataWorkflowStatus;
};
