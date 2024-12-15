/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Akeneo PIM REST API
 * OpenAPI spec version: 1.0.0
 */
import type { AttributeGroupLabels } from './attributeGroupLabels';
import type { AttributeLabels } from './attributeLabels';
import type { AttributeTableConfigurationItem } from './attributeTableConfigurationItem';
import type { AttributeType } from './attributeType';

export interface Attribute {
  /** Extensions allowed when the attribute type is `pim_catalog_file` or `pim_catalog_image` */
  allowed_extensions?: string[];
  /** To make the attribute locale specfic, specify here for which locales it is specific */
  available_locales?: string[];
  /** Attribute code */
  code: string;
  /** Maximum date allowed when the attribute type is `pim_catalog_date` */
  date_max?: string;
  /** Minimum date allowed when the attribute type is `pim_catalog_date` */
  date_min?: string;
  /** Whether decimals are allowed when the attribute type is `pim_catalog_metric`, `pim_catalog_price` or `pim_catalog_number` */
  decimals_allowed?: boolean;
  /** Default metric unit when the attribute type is `pim_catalog_metric` */
  default_metric_unit?: string;
  /** Default value for a Yes/No attribute, applied when creating a new product or product model (only available since the 5.0) */
  default_value?: boolean;
  /** Attribute group */
  group: string;
  /** Group labels for each locale */
  group_labels?: AttributeGroupLabels;
  /** Attribute labels for each locale */
  labels?: AttributeLabels;
  /** Whether the attribute is localizable, i.e. can have one value by locale */
  localizable?: boolean;
  /** Number maximum of characters allowed for the value of the attribute when the attribute type is `pim_catalog_text`, `pim_catalog_textarea` or `pim_catalog_identifier` */
  max_characters?: number;
  /** Max file size in MB when the attribute type is `pim_catalog_file` or `pim_catalog_image` */
  max_file_size?: string;
  /** Metric family when the attribute type is `pim_catalog_metric` */
  metric_family?: string;
  /** Whether negative values are allowed when the attribute type is `pim_catalog_metric` or `pim_catalog_number` */
  negative_allowed?: boolean;
  /** Maximum integer value allowed when the attribute type is `pim_catalog_metric`, `pim_catalog_price` or `pim_catalog_number` */
  number_max?: string;
  /** Minimum integer value allowed when the attribute type is `pim_catalog_metric`, `pim_catalog_price` or `pim_catalog_number` */
  number_min?: string;
  /** Reference entity code when the attribute type is `akeneo_reference_entity` or `akeneo_reference_entity_collection` OR Asset family code when the attribute type is `pim_catalog_asset_collection` */
  reference_data_name?: string;
  /** Whether the attribute is scopable, i.e. can have one value by channel */
  scopable?: boolean;
  /** Order of the attribute in its group */
  sort_order?: number;
  /** Configuration of the Table attribute (columns) */
  table_configuration?: AttributeTableConfigurationItem[];
  /** Attribute type. See <a href='/concepts/catalog-structure.html#attribute'>type</a> section for more details. */
  type: AttributeType;
  /** Whether two values for the attribute cannot be the same */
  unique?: boolean;
  /** Whether the attribute can be used as a filter for the product grid in the PIM user interface */
  useable_as_grid_filter?: boolean;
  /** Regexp expression used to validate any attribute value when the attribute type is `pim_catalog_text` or `pim_catalog_identifier` */
  validation_regexp?: string;
  /** Validation rule type used to validate any attribute value when the attribute type is `pim_catalog_text` or `pim_catalog_identifier` */
  validation_rule?: string;
  /** Whether the WYSIWYG interface is shown when the attribute type is `pim_catalog_textarea` */
  wysiwyg_enabled?: boolean;
}
