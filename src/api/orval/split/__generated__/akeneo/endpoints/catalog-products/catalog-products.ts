/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Akeneo PIM REST API
 * OpenAPI spec version: 1.0.0
 */
import {
  useQuery
} from '@tanstack/react-query'
import type {
  DataTag,
  DefinedInitialDataOptions,
  DefinedUseQueryResult,
  QueryFunction,
  QueryKey,
  UndefinedInitialDataOptions,
  UseQueryOptions,
  UseQueryResult
} from '@tanstack/react-query'
import * as axios from 'axios';
import type {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse
} from 'axios'
import type {
  GetAppCatalogProductUuids200
} from '../../model/getAppCatalogProductUuids200'
import type {
  GetAppCatalogProductUuids401One
} from '../../model/getAppCatalogProductUuids401One'
import type {
  GetAppCatalogProductUuids403One
} from '../../model/getAppCatalogProductUuids403One'
import type {
  GetAppCatalogProductUuids404One
} from '../../model/getAppCatalogProductUuids404One'
import type {
  GetAppCatalogProductUuidsParams
} from '../../model/getAppCatalogProductUuidsParams'
import type {
  GetAppCatalogProducts200
} from '../../model/getAppCatalogProducts200'
import type {
  GetAppCatalogProducts401One
} from '../../model/getAppCatalogProducts401One'
import type {
  GetAppCatalogProducts403One
} from '../../model/getAppCatalogProducts403One'
import type {
  GetAppCatalogProducts404One
} from '../../model/getAppCatalogProducts404One'
import type {
  GetAppCatalogProductsParams
} from '../../model/getAppCatalogProductsParams'
import type {
  GetAppCatalogProductsUuid401One
} from '../../model/getAppCatalogProductsUuid401One'
import type {
  GetAppCatalogProductsUuid403One
} from '../../model/getAppCatalogProductsUuid403One'
import type {
  GetAppCatalogProductsUuid404One
} from '../../model/getAppCatalogProductsUuid404One'



/**
 * This endpoint allows you to get the list of uuids of products contained in a catalog. Please, note that a disabled catalog can return an HTTP 200 with a payload containing an error message, for more details see the <a href="apps/catalogs.html#troubleshooting">App Catalog</a> section.
 * @summary Get the list of product uuids
 */
export const getAppCatalogProductUuids = (
    id: string,
    params?: GetAppCatalogProductUuidsParams, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<GetAppCatalogProductUuids200>> => {
    
    return axios.default.get(
      `/api/rest/v1/catalogs/${id}/product-uuids`,{
    ...options,
        params: {...params, ...options?.params},}
    );
  }


export const getGetAppCatalogProductUuidsQueryKey = (id: string,
    params?: GetAppCatalogProductUuidsParams,) => {
    return [`/api/rest/v1/catalogs/${id}/product-uuids`, ...(params ? [params]: [])] as const;
    }

    
export const getGetAppCatalogProductUuidsQueryOptions = <TData = Awaited<ReturnType<typeof getAppCatalogProductUuids>>, TError = AxiosError<GetAppCatalogProductUuids401One | GetAppCatalogProductUuids403One | GetAppCatalogProductUuids404One>>(id: string,
    params?: GetAppCatalogProductUuidsParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getAppCatalogProductUuids>>, TError, TData>>, axios?: AxiosRequestConfig}
) => {

const {query: queryOptions, axios: axiosOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetAppCatalogProductUuidsQueryKey(id,params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getAppCatalogProductUuids>>> = ({ signal }) => getAppCatalogProductUuids(id,params, { signal, ...axiosOptions });

      

      

   return  { queryKey, queryFn, enabled: !!(id), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getAppCatalogProductUuids>>, TError, TData> & { queryKey: DataTag<QueryKey, TData> }
}

export type GetAppCatalogProductUuidsQueryResult = NonNullable<Awaited<ReturnType<typeof getAppCatalogProductUuids>>>
export type GetAppCatalogProductUuidsQueryError = AxiosError<GetAppCatalogProductUuids401One | GetAppCatalogProductUuids403One | GetAppCatalogProductUuids404One>


export function useGetAppCatalogProductUuids<TData = Awaited<ReturnType<typeof getAppCatalogProductUuids>>, TError = AxiosError<GetAppCatalogProductUuids401One | GetAppCatalogProductUuids403One | GetAppCatalogProductUuids404One>>(
 id: string,
    params: undefined |  GetAppCatalogProductUuidsParams, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getAppCatalogProductUuids>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getAppCatalogProductUuids>>,
          TError,
          TData
        > , 'initialData'
      >, axios?: AxiosRequestConfig}

  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetAppCatalogProductUuids<TData = Awaited<ReturnType<typeof getAppCatalogProductUuids>>, TError = AxiosError<GetAppCatalogProductUuids401One | GetAppCatalogProductUuids403One | GetAppCatalogProductUuids404One>>(
 id: string,
    params?: GetAppCatalogProductUuidsParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getAppCatalogProductUuids>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getAppCatalogProductUuids>>,
          TError,
          TData
        > , 'initialData'
      >, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetAppCatalogProductUuids<TData = Awaited<ReturnType<typeof getAppCatalogProductUuids>>, TError = AxiosError<GetAppCatalogProductUuids401One | GetAppCatalogProductUuids403One | GetAppCatalogProductUuids404One>>(
 id: string,
    params?: GetAppCatalogProductUuidsParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getAppCatalogProductUuids>>, TError, TData>>, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
/**
 * @summary Get the list of product uuids
 */

export function useGetAppCatalogProductUuids<TData = Awaited<ReturnType<typeof getAppCatalogProductUuids>>, TError = AxiosError<GetAppCatalogProductUuids401One | GetAppCatalogProductUuids403One | GetAppCatalogProductUuids404One>>(
 id: string,
    params?: GetAppCatalogProductUuidsParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getAppCatalogProductUuids>>, TError, TData>>, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> } {

  const queryOptions = getGetAppCatalogProductUuidsQueryOptions(id,params,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



/**
 * This endpoint allows you to get the list of products related to a catalog. Products are paginated and they can be filtered. In the Enterprise Edition, permissions based on your app settings are applied to the set of products you request. Please, note that a disabled catalog can return an HTTP 200 with a payload containing an error message, for more details see the <a href="apps/catalogs.html#troubleshooting">App Catalog</a> section.
 * @summary Get the list of products related to a catalog
 */
export const getAppCatalogProducts = (
    id: string,
    params?: GetAppCatalogProductsParams, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<GetAppCatalogProducts200>> => {
    
    return axios.default.get(
      `/api/rest/v1/catalogs/${id}/products`,{
    ...options,
        params: {...params, ...options?.params},}
    );
  }


export const getGetAppCatalogProductsQueryKey = (id: string,
    params?: GetAppCatalogProductsParams,) => {
    return [`/api/rest/v1/catalogs/${id}/products`, ...(params ? [params]: [])] as const;
    }

    
export const getGetAppCatalogProductsQueryOptions = <TData = Awaited<ReturnType<typeof getAppCatalogProducts>>, TError = AxiosError<GetAppCatalogProducts401One | GetAppCatalogProducts403One | GetAppCatalogProducts404One>>(id: string,
    params?: GetAppCatalogProductsParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getAppCatalogProducts>>, TError, TData>>, axios?: AxiosRequestConfig}
) => {

const {query: queryOptions, axios: axiosOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetAppCatalogProductsQueryKey(id,params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getAppCatalogProducts>>> = ({ signal }) => getAppCatalogProducts(id,params, { signal, ...axiosOptions });

      

      

   return  { queryKey, queryFn, enabled: !!(id), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getAppCatalogProducts>>, TError, TData> & { queryKey: DataTag<QueryKey, TData> }
}

export type GetAppCatalogProductsQueryResult = NonNullable<Awaited<ReturnType<typeof getAppCatalogProducts>>>
export type GetAppCatalogProductsQueryError = AxiosError<GetAppCatalogProducts401One | GetAppCatalogProducts403One | GetAppCatalogProducts404One>


export function useGetAppCatalogProducts<TData = Awaited<ReturnType<typeof getAppCatalogProducts>>, TError = AxiosError<GetAppCatalogProducts401One | GetAppCatalogProducts403One | GetAppCatalogProducts404One>>(
 id: string,
    params: undefined |  GetAppCatalogProductsParams, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getAppCatalogProducts>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getAppCatalogProducts>>,
          TError,
          TData
        > , 'initialData'
      >, axios?: AxiosRequestConfig}

  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetAppCatalogProducts<TData = Awaited<ReturnType<typeof getAppCatalogProducts>>, TError = AxiosError<GetAppCatalogProducts401One | GetAppCatalogProducts403One | GetAppCatalogProducts404One>>(
 id: string,
    params?: GetAppCatalogProductsParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getAppCatalogProducts>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getAppCatalogProducts>>,
          TError,
          TData
        > , 'initialData'
      >, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetAppCatalogProducts<TData = Awaited<ReturnType<typeof getAppCatalogProducts>>, TError = AxiosError<GetAppCatalogProducts401One | GetAppCatalogProducts403One | GetAppCatalogProducts404One>>(
 id: string,
    params?: GetAppCatalogProductsParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getAppCatalogProducts>>, TError, TData>>, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
/**
 * @summary Get the list of products related to a catalog
 */

export function useGetAppCatalogProducts<TData = Awaited<ReturnType<typeof getAppCatalogProducts>>, TError = AxiosError<GetAppCatalogProducts401One | GetAppCatalogProducts403One | GetAppCatalogProducts404One>>(
 id: string,
    params?: GetAppCatalogProductsParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getAppCatalogProducts>>, TError, TData>>, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> } {

  const queryOptions = getGetAppCatalogProductsQueryOptions(id,params,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



/**
 * This endpoint allows you to get a specific product related to a catalog. In the Enterprise Edition, permissions based on your app settings are applied on the product you request. Please, note that a disabled catalog can return an HTTP 200 with a payload containing an error message, for more details see the <a href="apps/catalogs.html#troubleshooting">App Catalog</a> section.
 * @summary Get a product related to a catalog
 */
export const getAppCatalogProductsUuid = (
    id: string,
    uuid: string, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<void>> => {
    
    return axios.default.get(
      `/api/rest/v1/catalogs/${id}/products/${uuid}`,options
    );
  }


export const getGetAppCatalogProductsUuidQueryKey = (id: string,
    uuid: string,) => {
    return [`/api/rest/v1/catalogs/${id}/products/${uuid}`] as const;
    }

    
export const getGetAppCatalogProductsUuidQueryOptions = <TData = Awaited<ReturnType<typeof getAppCatalogProductsUuid>>, TError = AxiosError<GetAppCatalogProductsUuid401One | GetAppCatalogProductsUuid403One | GetAppCatalogProductsUuid404One>>(id: string,
    uuid: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getAppCatalogProductsUuid>>, TError, TData>>, axios?: AxiosRequestConfig}
) => {

const {query: queryOptions, axios: axiosOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetAppCatalogProductsUuidQueryKey(id,uuid);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getAppCatalogProductsUuid>>> = ({ signal }) => getAppCatalogProductsUuid(id,uuid, { signal, ...axiosOptions });

      

      

   return  { queryKey, queryFn, enabled: !!(id && uuid), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getAppCatalogProductsUuid>>, TError, TData> & { queryKey: DataTag<QueryKey, TData> }
}

export type GetAppCatalogProductsUuidQueryResult = NonNullable<Awaited<ReturnType<typeof getAppCatalogProductsUuid>>>
export type GetAppCatalogProductsUuidQueryError = AxiosError<GetAppCatalogProductsUuid401One | GetAppCatalogProductsUuid403One | GetAppCatalogProductsUuid404One>


export function useGetAppCatalogProductsUuid<TData = Awaited<ReturnType<typeof getAppCatalogProductsUuid>>, TError = AxiosError<GetAppCatalogProductsUuid401One | GetAppCatalogProductsUuid403One | GetAppCatalogProductsUuid404One>>(
 id: string,
    uuid: string, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getAppCatalogProductsUuid>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getAppCatalogProductsUuid>>,
          TError,
          TData
        > , 'initialData'
      >, axios?: AxiosRequestConfig}

  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetAppCatalogProductsUuid<TData = Awaited<ReturnType<typeof getAppCatalogProductsUuid>>, TError = AxiosError<GetAppCatalogProductsUuid401One | GetAppCatalogProductsUuid403One | GetAppCatalogProductsUuid404One>>(
 id: string,
    uuid: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getAppCatalogProductsUuid>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getAppCatalogProductsUuid>>,
          TError,
          TData
        > , 'initialData'
      >, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetAppCatalogProductsUuid<TData = Awaited<ReturnType<typeof getAppCatalogProductsUuid>>, TError = AxiosError<GetAppCatalogProductsUuid401One | GetAppCatalogProductsUuid403One | GetAppCatalogProductsUuid404One>>(
 id: string,
    uuid: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getAppCatalogProductsUuid>>, TError, TData>>, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
/**
 * @summary Get a product related to a catalog
 */

export function useGetAppCatalogProductsUuid<TData = Awaited<ReturnType<typeof getAppCatalogProductsUuid>>, TError = AxiosError<GetAppCatalogProductsUuid401One | GetAppCatalogProductsUuid403One | GetAppCatalogProductsUuid404One>>(
 id: string,
    uuid: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getAppCatalogProductsUuid>>, TError, TData>>, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> } {

  const queryOptions = getGetAppCatalogProductsUuidQueryOptions(id,uuid,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



