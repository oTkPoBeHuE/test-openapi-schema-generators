/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Akeneo PIM REST API
 * OpenAPI spec version: 1.0.0
 */
import type { GetProductsPaginationType } from './getProductsPaginationType';

export type GetProductsParams = {
/**
 * Filter products, for more details see the <a href="/documentation/filter.html">Filters</a> section
 */
search?: string;
/**
 * Filter product values to return scopable attributes for the given channel as well as the non localizable/non scopable attributes, for more details see the <a href="/documentation/filter.html#via-channel">Filter product values via channel</a> section
 */
scope?: string;
/**
 * Filter product values to return localizable attributes for the given locales as well as the non localizable/non scopable attributes, for more details see the <a href="/documentation/filter.html#via-locale">Filter product values via locale</a> section
 */
locales?: string;
/**
 * Filter product values to only return those concerning the given attributes, for more details see the <a href="/documentation/filter.html#filter-product-values">Filter on product values</a> section
 */
attributes?: string;
/**
 * Pagination method type, see <a href="/documentation/pagination.html">Pagination</a> section
 */
pagination_type?: GetProductsPaginationType;
/**
 * Number of the page to retrieve when using the `page` pagination method type. <strong>Should never be set manually</strong>, see <a href="/documentation/pagination.html#pagination">Pagination</a> section
 */
page?: number;
/**
 * Cursor when using the `search_after` pagination method type. <strong>Should never be set manually</strong>, see <a href="/documentation/pagination.html">Pagination</a> section
 */
search_after?: string;
/**
 * Number of results by page, see <a href="/documentation/pagination.html">Pagination</a> section
 */
limit?: number;
/**
 * Return the count of items in the response. Be carefull with that, on a big catalog, it can decrease performance in a significative way
 */
with_count?: boolean;
/**
 * Return labels of attribute options in the response. (Only available since the 5.0 version)
 */
with_attribute_options?: boolean;
/**
 * Return product quality scores in the response. (Only available since the 5.0 version)
 */
with_quality_scores?: boolean;
/**
 * Return product completenesses in the response. (Only available since the 6.0 version)
 */
with_completenesses?: boolean;
};
