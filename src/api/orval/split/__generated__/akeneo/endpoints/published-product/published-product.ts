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
import type {
  GetPublishedProducts200One
} from '../../model/getPublishedProducts200One'
import type {
  GetPublishedProducts400One
} from '../../model/getPublishedProducts400One'
import type {
  GetPublishedProducts401One
} from '../../model/getPublishedProducts401One'
import type {
  GetPublishedProducts403One
} from '../../model/getPublishedProducts403One'
import type {
  GetPublishedProducts406One
} from '../../model/getPublishedProducts406One'
import type {
  GetPublishedProducts422One
} from '../../model/getPublishedProducts422One'
import type {
  GetPublishedProductsCode200
} from '../../model/getPublishedProductsCode200'
import type {
  GetPublishedProductsCode401One
} from '../../model/getPublishedProductsCode401One'
import type {
  GetPublishedProductsCode403One
} from '../../model/getPublishedProductsCode403One'
import type {
  GetPublishedProductsCode404One
} from '../../model/getPublishedProductsCode404One'
import type {
  GetPublishedProductsCode406One
} from '../../model/getPublishedProductsCode406One'
import type {
  GetPublishedProductsParams
} from '../../model/getPublishedProductsParams'



/**
 * This endpoint allows you to get a list of published products. Published products are paginated and they can be filtered.
 * @summary Get list of published products
 */
export type getPublishedProductsResponse = {
  data: GetPublishedProducts200One;
  status: number;
  headers: Headers;
}

export const getGetPublishedProductsUrl = (params?: GetPublishedProductsParams,) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString())
    }
  });

  return normalizedParams.size ? `/api/rest/v1/published-products?${normalizedParams.toString()}` : `/api/rest/v1/published-products`
}

export const getPublishedProducts = async (params?: GetPublishedProductsParams, options?: RequestInit): Promise<getPublishedProductsResponse> => {
  
  const res = await fetch(getGetPublishedProductsUrl(params),
  {      
    ...options,
    method: 'GET'
    
    
  }

  )
  const data = await res.json()

  return { status: res.status, data, headers: res.headers }
}



export const getGetPublishedProductsQueryKey = (params?: GetPublishedProductsParams,) => {
    return [`/api/rest/v1/published-products`, ...(params ? [params]: [])] as const;
    }

    
export const getGetPublishedProductsQueryOptions = <TData = Awaited<ReturnType<typeof getPublishedProducts>>, TError = GetPublishedProducts400One | GetPublishedProducts401One | GetPublishedProducts403One | GetPublishedProducts406One | GetPublishedProducts422One>(params?: GetPublishedProductsParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getPublishedProducts>>, TError, TData>>, fetch?: RequestInit}
) => {

const {query: queryOptions, fetch: fetchOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetPublishedProductsQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getPublishedProducts>>> = ({ signal }) => getPublishedProducts(params, { signal, ...fetchOptions });

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getPublishedProducts>>, TError, TData> & { queryKey: DataTag<QueryKey, TData> }
}

export type GetPublishedProductsQueryResult = NonNullable<Awaited<ReturnType<typeof getPublishedProducts>>>
export type GetPublishedProductsQueryError = GetPublishedProducts400One | GetPublishedProducts401One | GetPublishedProducts403One | GetPublishedProducts406One | GetPublishedProducts422One


export function useGetPublishedProducts<TData = Awaited<ReturnType<typeof getPublishedProducts>>, TError = GetPublishedProducts400One | GetPublishedProducts401One | GetPublishedProducts403One | GetPublishedProducts406One | GetPublishedProducts422One>(
 params: undefined |  GetPublishedProductsParams, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getPublishedProducts>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getPublishedProducts>>,
          TError,
          TData
        > , 'initialData'
      >, fetch?: RequestInit}

  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetPublishedProducts<TData = Awaited<ReturnType<typeof getPublishedProducts>>, TError = GetPublishedProducts400One | GetPublishedProducts401One | GetPublishedProducts403One | GetPublishedProducts406One | GetPublishedProducts422One>(
 params?: GetPublishedProductsParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getPublishedProducts>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getPublishedProducts>>,
          TError,
          TData
        > , 'initialData'
      >, fetch?: RequestInit}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetPublishedProducts<TData = Awaited<ReturnType<typeof getPublishedProducts>>, TError = GetPublishedProducts400One | GetPublishedProducts401One | GetPublishedProducts403One | GetPublishedProducts406One | GetPublishedProducts422One>(
 params?: GetPublishedProductsParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getPublishedProducts>>, TError, TData>>, fetch?: RequestInit}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
/**
 * @summary Get list of published products
 */

export function useGetPublishedProducts<TData = Awaited<ReturnType<typeof getPublishedProducts>>, TError = GetPublishedProducts400One | GetPublishedProducts401One | GetPublishedProducts403One | GetPublishedProducts406One | GetPublishedProducts422One>(
 params?: GetPublishedProductsParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getPublishedProducts>>, TError, TData>>, fetch?: RequestInit}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> } {

  const queryOptions = getGetPublishedProductsQueryOptions(params,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



/**
 * This endpoint allows you to get the information about a given published product.
 * @summary Get a published product
 */
export type getPublishedProductsCodeResponse = {
  data: GetPublishedProductsCode200;
  status: number;
  headers: Headers;
}

export const getGetPublishedProductsCodeUrl = (code: string,) => {


  return `/api/rest/v1/published-products/${code}`
}

export const getPublishedProductsCode = async (code: string, options?: RequestInit): Promise<getPublishedProductsCodeResponse> => {
  
  const res = await fetch(getGetPublishedProductsCodeUrl(code),
  {      
    ...options,
    method: 'GET'
    
    
  }

  )
  const data = await res.json()

  return { status: res.status, data, headers: res.headers }
}



export const getGetPublishedProductsCodeQueryKey = (code: string,) => {
    return [`/api/rest/v1/published-products/${code}`] as const;
    }

    
export const getGetPublishedProductsCodeQueryOptions = <TData = Awaited<ReturnType<typeof getPublishedProductsCode>>, TError = GetPublishedProductsCode401One | GetPublishedProductsCode403One | GetPublishedProductsCode404One | GetPublishedProductsCode406One>(code: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getPublishedProductsCode>>, TError, TData>>, fetch?: RequestInit}
) => {

const {query: queryOptions, fetch: fetchOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetPublishedProductsCodeQueryKey(code);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getPublishedProductsCode>>> = ({ signal }) => getPublishedProductsCode(code, { signal, ...fetchOptions });

      

      

   return  { queryKey, queryFn, enabled: !!(code), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getPublishedProductsCode>>, TError, TData> & { queryKey: DataTag<QueryKey, TData> }
}

export type GetPublishedProductsCodeQueryResult = NonNullable<Awaited<ReturnType<typeof getPublishedProductsCode>>>
export type GetPublishedProductsCodeQueryError = GetPublishedProductsCode401One | GetPublishedProductsCode403One | GetPublishedProductsCode404One | GetPublishedProductsCode406One


export function useGetPublishedProductsCode<TData = Awaited<ReturnType<typeof getPublishedProductsCode>>, TError = GetPublishedProductsCode401One | GetPublishedProductsCode403One | GetPublishedProductsCode404One | GetPublishedProductsCode406One>(
 code: string, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getPublishedProductsCode>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getPublishedProductsCode>>,
          TError,
          TData
        > , 'initialData'
      >, fetch?: RequestInit}

  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetPublishedProductsCode<TData = Awaited<ReturnType<typeof getPublishedProductsCode>>, TError = GetPublishedProductsCode401One | GetPublishedProductsCode403One | GetPublishedProductsCode404One | GetPublishedProductsCode406One>(
 code: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getPublishedProductsCode>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getPublishedProductsCode>>,
          TError,
          TData
        > , 'initialData'
      >, fetch?: RequestInit}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetPublishedProductsCode<TData = Awaited<ReturnType<typeof getPublishedProductsCode>>, TError = GetPublishedProductsCode401One | GetPublishedProductsCode403One | GetPublishedProductsCode404One | GetPublishedProductsCode406One>(
 code: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getPublishedProductsCode>>, TError, TData>>, fetch?: RequestInit}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
/**
 * @summary Get a published product
 */

export function useGetPublishedProductsCode<TData = Awaited<ReturnType<typeof getPublishedProductsCode>>, TError = GetPublishedProductsCode401One | GetPublishedProductsCode403One | GetPublishedProductsCode404One | GetPublishedProductsCode406One>(
 code: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getPublishedProductsCode>>, TError, TData>>, fetch?: RequestInit}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> } {

  const queryOptions = getGetPublishedProductsCodeQueryOptions(code,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



