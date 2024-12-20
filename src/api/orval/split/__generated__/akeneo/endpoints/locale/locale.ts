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
  GetLocales200One
} from '../../model/getLocales200One'
import type {
  GetLocales401One
} from '../../model/getLocales401One'
import type {
  GetLocales403One
} from '../../model/getLocales403One'
import type {
  GetLocales406One
} from '../../model/getLocales406One'
import type {
  GetLocalesCode200
} from '../../model/getLocalesCode200'
import type {
  GetLocalesCode401One
} from '../../model/getLocalesCode401One'
import type {
  GetLocalesCode403One
} from '../../model/getLocalesCode403One'
import type {
  GetLocalesCode404One
} from '../../model/getLocalesCode404One'
import type {
  GetLocalesCode406One
} from '../../model/getLocalesCode406One'
import type {
  GetLocalesParams
} from '../../model/getLocalesParams'



/**
 * This endpoint allows you to get a list of locales. Locales are paginated and sorted by code.
 * @summary Get a list of locales
 */
export type getLocalesResponse = {
  data: GetLocales200One;
  status: number;
  headers: Headers;
}

export const getGetLocalesUrl = (params?: GetLocalesParams,) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString())
    }
  });

  return normalizedParams.size ? `/api/rest/v1/locales?${normalizedParams.toString()}` : `/api/rest/v1/locales`
}

export const getLocales = async (params?: GetLocalesParams, options?: RequestInit): Promise<getLocalesResponse> => {
  
  const res = await fetch(getGetLocalesUrl(params),
  {      
    ...options,
    method: 'GET'
    
    
  }

  )
  const data = await res.json()

  return { status: res.status, data, headers: res.headers }
}



export const getGetLocalesQueryKey = (params?: GetLocalesParams,) => {
    return [`/api/rest/v1/locales`, ...(params ? [params]: [])] as const;
    }

    
export const getGetLocalesQueryOptions = <TData = Awaited<ReturnType<typeof getLocales>>, TError = GetLocales401One | GetLocales403One | GetLocales406One>(params?: GetLocalesParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getLocales>>, TError, TData>>, fetch?: RequestInit}
) => {

const {query: queryOptions, fetch: fetchOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetLocalesQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getLocales>>> = ({ signal }) => getLocales(params, { signal, ...fetchOptions });

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getLocales>>, TError, TData> & { queryKey: DataTag<QueryKey, TData> }
}

export type GetLocalesQueryResult = NonNullable<Awaited<ReturnType<typeof getLocales>>>
export type GetLocalesQueryError = GetLocales401One | GetLocales403One | GetLocales406One


export function useGetLocales<TData = Awaited<ReturnType<typeof getLocales>>, TError = GetLocales401One | GetLocales403One | GetLocales406One>(
 params: undefined |  GetLocalesParams, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getLocales>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getLocales>>,
          TError,
          TData
        > , 'initialData'
      >, fetch?: RequestInit}

  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetLocales<TData = Awaited<ReturnType<typeof getLocales>>, TError = GetLocales401One | GetLocales403One | GetLocales406One>(
 params?: GetLocalesParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getLocales>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getLocales>>,
          TError,
          TData
        > , 'initialData'
      >, fetch?: RequestInit}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetLocales<TData = Awaited<ReturnType<typeof getLocales>>, TError = GetLocales401One | GetLocales403One | GetLocales406One>(
 params?: GetLocalesParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getLocales>>, TError, TData>>, fetch?: RequestInit}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
/**
 * @summary Get a list of locales
 */

export function useGetLocales<TData = Awaited<ReturnType<typeof getLocales>>, TError = GetLocales401One | GetLocales403One | GetLocales406One>(
 params?: GetLocalesParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getLocales>>, TError, TData>>, fetch?: RequestInit}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> } {

  const queryOptions = getGetLocalesQueryOptions(params,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



/**
 * This endpoint allows you to get the information about a given locale.
 * @summary Get a locale
 */
export type getLocalesCodeResponse = {
  data: GetLocalesCode200;
  status: number;
  headers: Headers;
}

export const getGetLocalesCodeUrl = (code: string,) => {


  return `/api/rest/v1/locales/${code}`
}

export const getLocalesCode = async (code: string, options?: RequestInit): Promise<getLocalesCodeResponse> => {
  
  const res = await fetch(getGetLocalesCodeUrl(code),
  {      
    ...options,
    method: 'GET'
    
    
  }

  )
  const data = await res.json()

  return { status: res.status, data, headers: res.headers }
}



export const getGetLocalesCodeQueryKey = (code: string,) => {
    return [`/api/rest/v1/locales/${code}`] as const;
    }

    
export const getGetLocalesCodeQueryOptions = <TData = Awaited<ReturnType<typeof getLocalesCode>>, TError = GetLocalesCode401One | GetLocalesCode403One | GetLocalesCode404One | GetLocalesCode406One>(code: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getLocalesCode>>, TError, TData>>, fetch?: RequestInit}
) => {

const {query: queryOptions, fetch: fetchOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetLocalesCodeQueryKey(code);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getLocalesCode>>> = ({ signal }) => getLocalesCode(code, { signal, ...fetchOptions });

      

      

   return  { queryKey, queryFn, enabled: !!(code), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getLocalesCode>>, TError, TData> & { queryKey: DataTag<QueryKey, TData> }
}

export type GetLocalesCodeQueryResult = NonNullable<Awaited<ReturnType<typeof getLocalesCode>>>
export type GetLocalesCodeQueryError = GetLocalesCode401One | GetLocalesCode403One | GetLocalesCode404One | GetLocalesCode406One


export function useGetLocalesCode<TData = Awaited<ReturnType<typeof getLocalesCode>>, TError = GetLocalesCode401One | GetLocalesCode403One | GetLocalesCode404One | GetLocalesCode406One>(
 code: string, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getLocalesCode>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getLocalesCode>>,
          TError,
          TData
        > , 'initialData'
      >, fetch?: RequestInit}

  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetLocalesCode<TData = Awaited<ReturnType<typeof getLocalesCode>>, TError = GetLocalesCode401One | GetLocalesCode403One | GetLocalesCode404One | GetLocalesCode406One>(
 code: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getLocalesCode>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getLocalesCode>>,
          TError,
          TData
        > , 'initialData'
      >, fetch?: RequestInit}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetLocalesCode<TData = Awaited<ReturnType<typeof getLocalesCode>>, TError = GetLocalesCode401One | GetLocalesCode403One | GetLocalesCode404One | GetLocalesCode406One>(
 code: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getLocalesCode>>, TError, TData>>, fetch?: RequestInit}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
/**
 * @summary Get a locale
 */

export function useGetLocalesCode<TData = Awaited<ReturnType<typeof getLocalesCode>>, TError = GetLocalesCode401One | GetLocalesCode403One | GetLocalesCode404One | GetLocalesCode406One>(
 code: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getLocalesCode>>, TError, TData>>, fetch?: RequestInit}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> } {

  const queryOptions = getGetLocalesCodeQueryOptions(code,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



