/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Akeneo PIM REST API
 * OpenAPI spec version: 1.0.0
 */
import type { ChannelsPostBodyConversionUnits } from './channelsPostBodyConversionUnits';
import type { ChannelsPostBodyLabels } from './channelsPostBodyLabels';

export type ChannelsPostBody = {
  /** Code of the category tree linked to the channel */
  category_tree: string;
  /** Channel code */
  code: string;
  /** Units to which the given metric attributes should be converted when exporting products */
  conversion_units?: ChannelsPostBodyConversionUnits;
  /** Codes of activated currencies for the channel */
  currencies: string[];
  /** Channel labels for each locale */
  labels?: ChannelsPostBodyLabels;
  /** Codes of activated locales for the channel */
  locales: string[];
};
