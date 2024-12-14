/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Akeneo PIM REST API
 * OpenAPI spec version: 1.0.0
 */
import type { GetEndpoints200OneAuthentication } from './getEndpoints200OneAuthentication';
import type { GetEndpoints200OneRoutes } from './getEndpoints200OneRoutes';

export type GetEndpoints200One = {
  /** Endpoint to get the authentication token */
  authentication?: GetEndpoints200OneAuthentication;
  /** Host name */
  host?: string;
  /** All the availables endpoints */
  routes?: GetEndpoints200OneRoutes;
};