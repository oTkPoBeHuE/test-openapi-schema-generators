/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Akeneo PIM REST API
 * OpenAPI spec version: 1.0.0
 */

/**
 * Status of the product model regarding the user permissions
 */
export type ProductModelListAllOfFourMetadataWorkflowStatus = typeof ProductModelListAllOfFourMetadataWorkflowStatus[keyof typeof ProductModelListAllOfFourMetadataWorkflowStatus];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const ProductModelListAllOfFourMetadataWorkflowStatus = {
  read_only: 'read_only',
  draft_in_progress: 'draft_in_progress',
  proposal_waiting_for_approval: 'proposal_waiting_for_approval',
  working_copy: 'working_copy',
} as const;
