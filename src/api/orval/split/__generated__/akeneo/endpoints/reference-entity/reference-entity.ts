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
  GetReferenceEntities200One
} from '../../model/getReferenceEntities200One'
import type {
  GetReferenceEntities401One
} from '../../model/getReferenceEntities401One'
import type {
  GetReferenceEntities406One
} from '../../model/getReferenceEntities406One'
import type {
  GetReferenceEntitiesCode200
} from '../../model/getReferenceEntitiesCode200'
import type {
  GetReferenceEntitiesCode401One
} from '../../model/getReferenceEntitiesCode401One'
import type {
  GetReferenceEntitiesCode404One
} from '../../model/getReferenceEntitiesCode404One'
import type {
  GetReferenceEntitiesCode406One
} from '../../model/getReferenceEntitiesCode406One'
import type {
  GetReferenceEntitiesParams
} from '../../model/getReferenceEntitiesParams'
import type {
  PatchReferenceEntityCode401One
} from '../../model/patchReferenceEntityCode401One'
import type {
  PatchReferenceEntityCode415One
} from '../../model/patchReferenceEntityCode415One'
import type {
  PatchReferenceEntityCode422One
} from '../../model/patchReferenceEntityCode422One'
import type {
  PatchReferenceEntityCodeBody
} from '../../model/patchReferenceEntityCodeBody'



/**
 * This endpoint allows you to get a list of reference entities. Reference entities are paginated.
 * @summary Get list of reference entities
 */
export const getReferenceEntities = (
    params?: GetReferenceEntitiesParams, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<GetReferenceEntities200One>> => {
    
    return axios.default.get(
      `/api/rest/v1/reference-entities`,{
    ...options,
        params: {...params, ...options?.params},}
    );
  }


export const getGetReferenceEntitiesQueryKey = (params?: GetReferenceEntitiesParams,) => {
    return [`/api/rest/v1/reference-entities`, ...(params ? [params]: [])] as const;
    }

    
export const getGetReferenceEntitiesQueryOptions = <TData = Awaited<ReturnType<typeof getReferenceEntities>>, TError = AxiosError<GetReferenceEntities401One | GetReferenceEntities406One>>(params?: GetReferenceEntitiesParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getReferenceEntities>>, TError, TData>>, axios?: AxiosRequestConfig}
) => {

const {query: queryOptions, axios: axiosOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetReferenceEntitiesQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getReferenceEntities>>> = ({ signal }) => getReferenceEntities(params, { signal, ...axiosOptions });

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getReferenceEntities>>, TError, TData> & { queryKey: DataTag<QueryKey, TData> }
}

export type GetReferenceEntitiesQueryResult = NonNullable<Awaited<ReturnType<typeof getReferenceEntities>>>
export type GetReferenceEntitiesQueryError = AxiosError<GetReferenceEntities401One | GetReferenceEntities406One>


export function useGetReferenceEntities<TData = Awaited<ReturnType<typeof getReferenceEntities>>, TError = AxiosError<GetReferenceEntities401One | GetReferenceEntities406One>>(
 params: undefined |  GetReferenceEntitiesParams, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getReferenceEntities>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getReferenceEntities>>,
          TError,
          TData
        > , 'initialData'
      >, axios?: AxiosRequestConfig}

  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetReferenceEntities<TData = Awaited<ReturnType<typeof getReferenceEntities>>, TError = AxiosError<GetReferenceEntities401One | GetReferenceEntities406One>>(
 params?: GetReferenceEntitiesParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getReferenceEntities>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getReferenceEntities>>,
          TError,
          TData
        > , 'initialData'
      >, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetReferenceEntities<TData = Awaited<ReturnType<typeof getReferenceEntities>>, TError = AxiosError<GetReferenceEntities401One | GetReferenceEntities406One>>(
 params?: GetReferenceEntitiesParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getReferenceEntities>>, TError, TData>>, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
/**
 * @summary Get list of reference entities
 */

export function useGetReferenceEntities<TData = Awaited<ReturnType<typeof getReferenceEntities>>, TError = AxiosError<GetReferenceEntities401One | GetReferenceEntities406One>>(
 params?: GetReferenceEntitiesParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getReferenceEntities>>, TError, TData>>, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> } {

  const queryOptions = getGetReferenceEntitiesQueryOptions(params,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



/**
 * This endpoint allows you to get the information about a given reference entity.
 * @summary Get a reference entity
 */
export const getReferenceEntitiesCode = (
    code: string, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<GetReferenceEntitiesCode200>> => {
    
    return axios.default.get(
      `/api/rest/v1/reference-entities/${code}`,options
    );
  }


export const getGetReferenceEntitiesCodeQueryKey = (code: string,) => {
    return [`/api/rest/v1/reference-entities/${code}`] as const;
    }

    
export const getGetReferenceEntitiesCodeQueryOptions = <TData = Awaited<ReturnType<typeof getReferenceEntitiesCode>>, TError = AxiosError<GetReferenceEntitiesCode401One | GetReferenceEntitiesCode404One | GetReferenceEntitiesCode406One>>(code: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getReferenceEntitiesCode>>, TError, TData>>, axios?: AxiosRequestConfig}
) => {

const {query: queryOptions, axios: axiosOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetReferenceEntitiesCodeQueryKey(code);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getReferenceEntitiesCode>>> = ({ signal }) => getReferenceEntitiesCode(code, { signal, ...axiosOptions });

      

      

   return  { queryKey, queryFn, enabled: !!(code), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getReferenceEntitiesCode>>, TError, TData> & { queryKey: DataTag<QueryKey, TData> }
}

export type GetReferenceEntitiesCodeQueryResult = NonNullable<Awaited<ReturnType<typeof getReferenceEntitiesCode>>>
export type GetReferenceEntitiesCodeQueryError = AxiosError<GetReferenceEntitiesCode401One | GetReferenceEntitiesCode404One | GetReferenceEntitiesCode406One>


export function useGetReferenceEntitiesCode<TData = Awaited<ReturnType<typeof getReferenceEntitiesCode>>, TError = AxiosError<GetReferenceEntitiesCode401One | GetReferenceEntitiesCode404One | GetReferenceEntitiesCode406One>>(
 code: string, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getReferenceEntitiesCode>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getReferenceEntitiesCode>>,
          TError,
          TData
        > , 'initialData'
      >, axios?: AxiosRequestConfig}

  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetReferenceEntitiesCode<TData = Awaited<ReturnType<typeof getReferenceEntitiesCode>>, TError = AxiosError<GetReferenceEntitiesCode401One | GetReferenceEntitiesCode404One | GetReferenceEntitiesCode406One>>(
 code: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getReferenceEntitiesCode>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getReferenceEntitiesCode>>,
          TError,
          TData
        > , 'initialData'
      >, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetReferenceEntitiesCode<TData = Awaited<ReturnType<typeof getReferenceEntitiesCode>>, TError = AxiosError<GetReferenceEntitiesCode401One | GetReferenceEntitiesCode404One | GetReferenceEntitiesCode406One>>(
 code: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getReferenceEntitiesCode>>, TError, TData>>, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
/**
 * @summary Get a reference entity
 */

export function useGetReferenceEntitiesCode<TData = Awaited<ReturnType<typeof getReferenceEntitiesCode>>, TError = AxiosError<GetReferenceEntitiesCode401One | GetReferenceEntitiesCode404One | GetReferenceEntitiesCode406One>>(
 code: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getReferenceEntitiesCode>>, TError, TData>>, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> } {

  const queryOptions = getGetReferenceEntitiesCodeQueryOptions(code,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



/**
 * This endpoint allows you to update a given reference entity. Note that if the reference entity does not already exist, it creates it.
 * @summary Update/create a reference entity
 */
export const patchReferenceEntityCode = (
    code: string,
    patchReferenceEntityCodeBody: PatchReferenceEntityCodeBody, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<void>> => {
    
    return axios.default.patch(
      `/api/rest/v1/reference-entities/${code}`,
      patchReferenceEntityCodeBody,options
    );
  }



export const getPatchReferenceEntityCodeMutationOptions = <TError = AxiosError<PatchReferenceEntityCode401One | PatchReferenceEntityCode415One | PatchReferenceEntityCode422One>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof patchReferenceEntityCode>>, TError,{code: string;data: PatchReferenceEntityCodeBody}, TContext>, axios?: AxiosRequestConfig}
): UseMutationOptions<Awaited<ReturnType<typeof patchReferenceEntityCode>>, TError,{code: string;data: PatchReferenceEntityCodeBody}, TContext> => {
const {mutation: mutationOptions, axios: axiosOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof patchReferenceEntityCode>>, {code: string;data: PatchReferenceEntityCodeBody}> = (props) => {
          const {code,data} = props ?? {};

          return  patchReferenceEntityCode(code,data,axiosOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PatchReferenceEntityCodeMutationResult = NonNullable<Awaited<ReturnType<typeof patchReferenceEntityCode>>>
    export type PatchReferenceEntityCodeMutationBody = PatchReferenceEntityCodeBody
    export type PatchReferenceEntityCodeMutationError = AxiosError<PatchReferenceEntityCode401One | PatchReferenceEntityCode415One | PatchReferenceEntityCode422One>

    /**
 * @summary Update/create a reference entity
 */
export const usePatchReferenceEntityCode = <TError = AxiosError<PatchReferenceEntityCode401One | PatchReferenceEntityCode415One | PatchReferenceEntityCode422One>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof patchReferenceEntityCode>>, TError,{code: string;data: PatchReferenceEntityCodeBody}, TContext>, axios?: AxiosRequestConfig}
): UseMutationResult<
        Awaited<ReturnType<typeof patchReferenceEntityCode>>,
        TError,
        {code: string;data: PatchReferenceEntityCodeBody},
        TContext
      > => {

      const mutationOptions = getPatchReferenceEntityCodeMutationOptions(options);

      return useMutation(mutationOptions);
    }
    