/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Akeneo PIM REST API
 * OpenAPI spec version: 1.0.0
 */

/**
 * Status of the product regarding the user permissions
 */
export type PatchProductsUuidUuidBodyMetadataWorkflowStatus = typeof PatchProductsUuidUuidBodyMetadataWorkflowStatus[keyof typeof PatchProductsUuidUuidBodyMetadataWorkflowStatus];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PatchProductsUuidUuidBodyMetadataWorkflowStatus = {
  read_only: 'read_only',
  draft_in_progress: 'draft_in_progress',
  proposal_waiting_for_approval: 'proposal_waiting_for_approval',
  working_copy: 'working_copy',
} as const;
