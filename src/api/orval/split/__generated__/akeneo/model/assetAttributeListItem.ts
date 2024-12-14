/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Akeneo PIM REST API
 * OpenAPI spec version: 1.0.0
 */
import type { AssetAttributeListItemLabels } from './assetAttributeListItemLabels';
import type { AssetAttributeListItemMediaType } from './assetAttributeListItemMediaType';
import type { AssetAttributeListItemType } from './assetAttributeListItemType';
import type { AssetAttributeListItemValidationRule } from './assetAttributeListItemValidationRule';

export type AssetAttributeListItem = {
  /** Extensions allowed when the attribute type is `media_file` */
  allowed_extensions?: string[];
  /** Attribute code */
  code: string;
  /** Whether decimals are allowed when the attribute type is `number` */
  decimals_allowed?: boolean;
  /** Whether the attribute should be in read only mode only in the UI, but you can still update it with the API */
  is_read_only?: boolean;
  /** Whether the attribute should be part of the record's completeness calculation */
  is_required_for_completeness?: boolean;
  /** Whether the UI should display a rich text editor instead of a simple text area when the attribute type is `text` */
  is_rich_text_editor?: boolean;
  /** Whether the UI should display a text area instead of a simple field when the attribute type is `text` */
  is_textarea?: boolean;
  /** Attribute labels for each locale */
  labels?: AssetAttributeListItemLabels;
  /** Maximum number of characters allowed for the value of the attribute when the attribute type is `text` */
  max_characters?: number;
  /** Max file size in MB when the attribute type is `media_file` */
  max_file_size?: string;
  /** Maximum value allowed when the attribute type is `number` */
  max_value?: string;
  /** For the `media_link` attribute type, it is the type of the media behind the url, to allow its preview in the PIM. For the `media_file` attribute type, it is the type of the file. */
  media_type: AssetAttributeListItemMediaType;
  /** Minimum value allowed when the attribute type is `number` */
  min_value?: string;
  /** Prefix of the `media_link` attribute type. The common url root that prefixes the link to the media */
  prefix?: string;
  /** Suffix of the `media_link` attribute type. The common url suffix for the media */
  suffix?: string;
  /** Attribute type. See <a href='/concepts/asset-manager.html#asset-attribute'>type</a> section for more details. */
  type: AssetAttributeListItemType;
  /** Regexp expression used to validate the attribute value when the attribute type is `text` */
  validation_regexp?: string;
  /** Validation rule type used to validate the attribute value when the attribute type is `text` */
  validation_rule?: AssetAttributeListItemValidationRule;
  /** Whether the attribute is scopable, i.e. can have one value by channel */
  value_per_channel?: boolean;
  /** Whether the attribute is localizable, i.e. can have one value by locale */
  value_per_locale?: boolean;
};