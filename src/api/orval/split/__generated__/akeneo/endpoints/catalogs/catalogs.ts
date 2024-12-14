/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Akeneo PIM REST API
 * OpenAPI spec version: 1.0.0
 */
import {
  useMutation,
  useQuery
} from '@tanstack/react-query'
import type {
  DataTag,
  DefinedInitialDataOptions,
  DefinedUseQueryResult,
  MutationFunction,
  QueryFunction,
  QueryKey,
  UndefinedInitialDataOptions,
  UseMutationOptions,
  UseMutationResult,
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
  DeleteAppCatalog401One
} from '../../model/deleteAppCatalog401One'
import type {
  DeleteAppCatalog403One
} from '../../model/deleteAppCatalog403One'
import type {
  DeleteAppCatalog404One
} from '../../model/deleteAppCatalog404One'
import type {
  GetAppCatalog200
} from '../../model/getAppCatalog200'
import type {
  GetAppCatalog401One
} from '../../model/getAppCatalog401One'
import type {
  GetAppCatalog403One
} from '../../model/getAppCatalog403One'
import type {
  GetAppCatalog404One
} from '../../model/getAppCatalog404One'
import type {
  GetAppCatalogs200
} from '../../model/getAppCatalogs200'
import type {
  GetAppCatalogs401One
} from '../../model/getAppCatalogs401One'
import type {
  GetAppCatalogs403One
} from '../../model/getAppCatalogs403One'
import type {
  GetAppCatalogsParams
} from '../../model/getAppCatalogsParams'
import type {
  PatchAppCatalog200
} from '../../model/patchAppCatalog200'
import type {
  PatchAppCatalog401One
} from '../../model/patchAppCatalog401One'
import type {
  PatchAppCatalog403One
} from '../../model/patchAppCatalog403One'
import type {
  PatchAppCatalog404One
} from '../../model/patchAppCatalog404One'
import type {
  PatchAppCatalog415One
} from '../../model/patchAppCatalog415One'
import type {
  PatchAppCatalog422
} from '../../model/patchAppCatalog422'
import type {
  PostAppCatalog201
} from '../../model/postAppCatalog201'
import type {
  PostAppCatalog401One
} from '../../model/postAppCatalog401One'
import type {
  PostAppCatalog403One
} from '../../model/postAppCatalog403One'
import type {
  PostAppCatalog415One
} from '../../model/postAppCatalog415One'
import type {
  PostAppCatalog422
} from '../../model/postAppCatalog422'
import type {
  PostAppCatalogBodyBody
} from '../../model/postAppCatalogBodyBody'



/**
 * This endpoint allows you to get the list of catalogs you owned.
 * @summary Get the list of owned catalogs
 */
export const getAppCatalogs = (
    params?: GetAppCatalogsParams, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<GetAppCatalogs200>> => {
    
    return axios.default.get(
      `/api/rest/v1/catalogs`,{
    ...options,
        params: {...params, ...options?.params},}
    );
  }


export const getGetAppCatalogsQueryKey = (params?: GetAppCatalogsParams,) => {
    return [`/api/rest/v1/catalogs`, ...(params ? [params]: [])] as const;
    }

    
export const getGetAppCatalogsQueryOptions = <TData = Awaited<ReturnType<typeof getAppCatalogs>>, TError = AxiosError<GetAppCatalogs401One | GetAppCatalogs403One>>(params?: GetAppCatalogsParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getAppCatalogs>>, TError, TData>>, axios?: AxiosRequestConfig}
) => {

const {query: queryOptions, axios: axiosOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetAppCatalogsQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getAppCatalogs>>> = ({ signal }) => getAppCatalogs(params, { signal, ...axiosOptions });

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getAppCatalogs>>, TError, TData> & { queryKey: DataTag<QueryKey, TData> }
}

export type GetAppCatalogsQueryResult = NonNullable<Awaited<ReturnType<typeof getAppCatalogs>>>
export type GetAppCatalogsQueryError = AxiosError<GetAppCatalogs401One | GetAppCatalogs403One>


export function useGetAppCatalogs<TData = Awaited<ReturnType<typeof getAppCatalogs>>, TError = AxiosError<GetAppCatalogs401One | GetAppCatalogs403One>>(
 params: undefined |  GetAppCatalogsParams, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getAppCatalogs>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getAppCatalogs>>,
          TError,
          TData
        > , 'initialData'
      >, axios?: AxiosRequestConfig}

  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetAppCatalogs<TData = Awaited<ReturnType<typeof getAppCatalogs>>, TError = AxiosError<GetAppCatalogs401One | GetAppCatalogs403One>>(
 params?: GetAppCatalogsParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getAppCatalogs>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getAppCatalogs>>,
          TError,
          TData
        > , 'initialData'
      >, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetAppCatalogs<TData = Awaited<ReturnType<typeof getAppCatalogs>>, TError = AxiosError<GetAppCatalogs401One | GetAppCatalogs403One>>(
 params?: GetAppCatalogsParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getAppCatalogs>>, TError, TData>>, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
/**
 * @summary Get the list of owned catalogs
 */

export function useGetAppCatalogs<TData = Awaited<ReturnType<typeof getAppCatalogs>>, TError = AxiosError<GetAppCatalogs401One | GetAppCatalogs403One>>(
 params?: GetAppCatalogsParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getAppCatalogs>>, TError, TData>>, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> } {

  const queryOptions = getGetAppCatalogsQueryOptions(params,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



/**
 * This endpoint allows you to create a new catalog.
 * @summary Create a new catalog
 */
export const postAppCatalog = (
    postAppCatalogBodyBody: PostAppCatalogBodyBody, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<PostAppCatalog201>> => {
    
    return axios.default.post(
      `/api/rest/v1/catalogs`,
      postAppCatalogBodyBody,options
    );
  }



export const getPostAppCatalogMutationOptions = <TError = AxiosError<PostAppCatalog401One | PostAppCatalog403One | PostAppCatalog415One | PostAppCatalog422>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postAppCatalog>>, TError,{data: PostAppCatalogBodyBody}, TContext>, axios?: AxiosRequestConfig}
): UseMutationOptions<Awaited<ReturnType<typeof postAppCatalog>>, TError,{data: PostAppCatalogBodyBody}, TContext> => {
const {mutation: mutationOptions, axios: axiosOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postAppCatalog>>, {data: PostAppCatalogBodyBody}> = (props) => {
          const {data} = props ?? {};

          return  postAppCatalog(data,axiosOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostAppCatalogMutationResult = NonNullable<Awaited<ReturnType<typeof postAppCatalog>>>
    export type PostAppCatalogMutationBody = PostAppCatalogBodyBody
    export type PostAppCatalogMutationError = AxiosError<PostAppCatalog401One | PostAppCatalog403One | PostAppCatalog415One | PostAppCatalog422>

    /**
 * @summary Create a new catalog
 */
export const usePostAppCatalog = <TError = AxiosError<PostAppCatalog401One | PostAppCatalog403One | PostAppCatalog415One | PostAppCatalog422>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postAppCatalog>>, TError,{data: PostAppCatalogBodyBody}, TContext>, axios?: AxiosRequestConfig}
): UseMutationResult<
        Awaited<ReturnType<typeof postAppCatalog>>,
        TError,
        {data: PostAppCatalogBodyBody},
        TContext
      > => {

      const mutationOptions = getPostAppCatalogMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * This endpoint allows you to delete a catalog.
 * @summary Delete a catalog
 */
export const deleteAppCatalog = (
    id: string, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<void>> => {
    
    return axios.default.delete(
      `/api/rest/v1/catalogs/${id}`,options
    );
  }



export const getDeleteAppCatalogMutationOptions = <TError = AxiosError<DeleteAppCatalog401One | DeleteAppCatalog403One | DeleteAppCatalog404One>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteAppCatalog>>, TError,{id: string}, TContext>, axios?: AxiosRequestConfig}
): UseMutationOptions<Awaited<ReturnType<typeof deleteAppCatalog>>, TError,{id: string}, TContext> => {
const {mutation: mutationOptions, axios: axiosOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof deleteAppCatalog>>, {id: string}> = (props) => {
          const {id} = props ?? {};

          return  deleteAppCatalog(id,axiosOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type DeleteAppCatalogMutationResult = NonNullable<Awaited<ReturnType<typeof deleteAppCatalog>>>
    
    export type DeleteAppCatalogMutationError = AxiosError<DeleteAppCatalog401One | DeleteAppCatalog403One | DeleteAppCatalog404One>

    /**
 * @summary Delete a catalog
 */
export const useDeleteAppCatalog = <TError = AxiosError<DeleteAppCatalog401One | DeleteAppCatalog403One | DeleteAppCatalog404One>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteAppCatalog>>, TError,{id: string}, TContext>, axios?: AxiosRequestConfig}
): UseMutationResult<
        Awaited<ReturnType<typeof deleteAppCatalog>>,
        TError,
        {id: string},
        TContext
      > => {

      const mutationOptions = getDeleteAppCatalogMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * This endpoint allows you to get the information about a catalog.
 * @summary Get a catalog
 */
export const getAppCatalog = (
    id: string, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<GetAppCatalog200>> => {
    
    return axios.default.get(
      `/api/rest/v1/catalogs/${id}`,options
    );
  }


export const getGetAppCatalogQueryKey = (id: string,) => {
    return [`/api/rest/v1/catalogs/${id}`] as const;
    }

    
export const getGetAppCatalogQueryOptions = <TData = Awaited<ReturnType<typeof getAppCatalog>>, TError = AxiosError<GetAppCatalog401One | GetAppCatalog403One | GetAppCatalog404One>>(id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getAppCatalog>>, TError, TData>>, axios?: AxiosRequestConfig}
) => {

const {query: queryOptions, axios: axiosOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetAppCatalogQueryKey(id);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getAppCatalog>>> = ({ signal }) => getAppCatalog(id, { signal, ...axiosOptions });

      

      

   return  { queryKey, queryFn, enabled: !!(id), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getAppCatalog>>, TError, TData> & { queryKey: DataTag<QueryKey, TData> }
}

export type GetAppCatalogQueryResult = NonNullable<Awaited<ReturnType<typeof getAppCatalog>>>
export type GetAppCatalogQueryError = AxiosError<GetAppCatalog401One | GetAppCatalog403One | GetAppCatalog404One>


export function useGetAppCatalog<TData = Awaited<ReturnType<typeof getAppCatalog>>, TError = AxiosError<GetAppCatalog401One | GetAppCatalog403One | GetAppCatalog404One>>(
 id: string, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getAppCatalog>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getAppCatalog>>,
          TError,
          TData
        > , 'initialData'
      >, axios?: AxiosRequestConfig}

  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetAppCatalog<TData = Awaited<ReturnType<typeof getAppCatalog>>, TError = AxiosError<GetAppCatalog401One | GetAppCatalog403One | GetAppCatalog404One>>(
 id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getAppCatalog>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getAppCatalog>>,
          TError,
          TData
        > , 'initialData'
      >, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetAppCatalog<TData = Awaited<ReturnType<typeof getAppCatalog>>, TError = AxiosError<GetAppCatalog401One | GetAppCatalog403One | GetAppCatalog404One>>(
 id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getAppCatalog>>, TError, TData>>, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
/**
 * @summary Get a catalog
 */

export function useGetAppCatalog<TData = Awaited<ReturnType<typeof getAppCatalog>>, TError = AxiosError<GetAppCatalog401One | GetAppCatalog403One | GetAppCatalog404One>>(
 id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getAppCatalog>>, TError, TData>>, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> } {

  const queryOptions = getGetAppCatalogQueryOptions(id,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



/**
 * This endpoint allows you to update a catalog.
 * @summary Update a catalog
 */
export const patchAppCatalog = (
    id: string,
    postAppCatalogBodyBody: PostAppCatalogBodyBody, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<PatchAppCatalog200>> => {
    
    return axios.default.patch(
      `/api/rest/v1/catalogs/${id}`,
      postAppCatalogBodyBody,options
    );
  }



export const getPatchAppCatalogMutationOptions = <TError = AxiosError<PatchAppCatalog401One | PatchAppCatalog403One | PatchAppCatalog404One | PatchAppCatalog415One | PatchAppCatalog422>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof patchAppCatalog>>, TError,{id: string;data: PostAppCatalogBodyBody}, TContext>, axios?: AxiosRequestConfig}
): UseMutationOptions<Awaited<ReturnType<typeof patchAppCatalog>>, TError,{id: string;data: PostAppCatalogBodyBody}, TContext> => {
const {mutation: mutationOptions, axios: axiosOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof patchAppCatalog>>, {id: string;data: PostAppCatalogBodyBody}> = (props) => {
          const {id,data} = props ?? {};

          return  patchAppCatalog(id,data,axiosOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PatchAppCatalogMutationResult = NonNullable<Awaited<ReturnType<typeof patchAppCatalog>>>
    export type PatchAppCatalogMutationBody = PostAppCatalogBodyBody
    export type PatchAppCatalogMutationError = AxiosError<PatchAppCatalog401One | PatchAppCatalog403One | PatchAppCatalog404One | PatchAppCatalog415One | PatchAppCatalog422>

    /**
 * @summary Update a catalog
 */
export const usePatchAppCatalog = <TError = AxiosError<PatchAppCatalog401One | PatchAppCatalog403One | PatchAppCatalog404One | PatchAppCatalog415One | PatchAppCatalog422>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof patchAppCatalog>>, TError,{id: string;data: PostAppCatalogBodyBody}, TContext>, axios?: AxiosRequestConfig}
): UseMutationResult<
        Awaited<ReturnType<typeof patchAppCatalog>>,
        TError,
        {id: string;data: PostAppCatalogBodyBody},
        TContext
      > => {

      const mutationOptions = getPatchAppCatalogMutationOptions(options);

      return useMutation(mutationOptions);
    }
    