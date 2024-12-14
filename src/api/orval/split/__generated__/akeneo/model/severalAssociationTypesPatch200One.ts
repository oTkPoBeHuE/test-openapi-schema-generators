/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Akeneo PIM REST API
 * OpenAPI spec version: 1.0.0
 */

export type SeveralAssociationTypesPatch200One = {
  /** Resource code, only filled when the resource is not a product */
  code?: string;
  /** Resource identifier, only filled when the resource is a product */
  identifier?: string;
  /** Line number */
  line?: number;
  /** Message explaining the error */
  message?: string;
  /** HTTP status code, see <a href="/documentation/responses.html#client-errors">Client errors</a> to understand the meaning of each code */
  status_code?: number;
};
