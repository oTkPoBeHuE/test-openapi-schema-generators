/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Akeneo PIM REST API
 * OpenAPI spec version: 1.0.0
 */

/**
 * Status of the product model regarding the user permissions
 */
export type GetProductModelsCode200MetadataWorkflowStatus = typeof GetProductModelsCode200MetadataWorkflowStatus[keyof typeof GetProductModelsCode200MetadataWorkflowStatus];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetProductModelsCode200MetadataWorkflowStatus = {
  read_only: 'read_only',
  draft_in_progress: 'draft_in_progress',
  proposal_waiting_for_approval: 'proposal_waiting_for_approval',
  working_copy: 'working_copy',
} as const;
