/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Akeneo PIM REST API
 * OpenAPI spec version: 1.0.0
 */

export type AttributeGroupsGetListParams = {
/**
 * Filter attribute groups, for more details see the <a href="/documentation/filter.html#filter-attribute-groups">Filters</a> section.
 */
search?: string;
/**
 * Number of the page to retrieve when using the `page` pagination method type. <strong>Should never be set manually</strong>, see <a href="/documentation/pagination.html#pagination">Pagination</a> section
 */
page?: number;
/**
 * Number of results by page, see <a href="/documentation/pagination.html">Pagination</a> section
 */
limit?: number;
/**
 * Return the count of items in the response. Be carefull with that, on a big catalog, it can decrease performance in a significative way
 */
with_count?: boolean;
};
