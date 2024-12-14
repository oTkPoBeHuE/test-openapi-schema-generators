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
  GetReferenceEntityAttributesAttributeCodeOptions200Item
} from '../../model/getReferenceEntityAttributesAttributeCodeOptions200Item'
import type {
  GetReferenceEntityAttributesAttributeCodeOptions401One
} from '../../model/getReferenceEntityAttributesAttributeCodeOptions401One'
import type {
  GetReferenceEntityAttributesAttributeCodeOptions406One
} from '../../model/getReferenceEntityAttributesAttributeCodeOptions406One'
import type {
  GetReferenceEntityAttributesAttributeCodeOptionsCode200
} from '../../model/getReferenceEntityAttributesAttributeCodeOptionsCode200'
import type {
  GetReferenceEntityAttributesAttributeCodeOptionsCode401One
} from '../../model/getReferenceEntityAttributesAttributeCodeOptionsCode401One'
import type {
  GetReferenceEntityAttributesAttributeCodeOptionsCode404One
} from '../../model/getReferenceEntityAttributesAttributeCodeOptionsCode404One'
import type {
  GetReferenceEntityAttributesAttributeCodeOptionsCode406One
} from '../../model/getReferenceEntityAttributesAttributeCodeOptionsCode406One'
import type {
  PatchReferenceEntityAttributesAttributeCodeOptionsCode401One
} from '../../model/patchReferenceEntityAttributesAttributeCodeOptionsCode401One'
import type {
  PatchReferenceEntityAttributesAttributeCodeOptionsCode415One
} from '../../model/patchReferenceEntityAttributesAttributeCodeOptionsCode415One'
import type {
  PatchReferenceEntityAttributesAttributeCodeOptionsCode422One
} from '../../model/patchReferenceEntityAttributesAttributeCodeOptionsCode422One'
import type {
  PatchReferenceEntityAttributesAttributeCodeOptionsCodeBody
} from '../../model/patchReferenceEntityAttributesAttributeCodeOptionsCodeBody'



/**
 * This endpoint allows you to get a list of attribute options for a given reference entity.
 * @summary Get a list of attribute options of a given attribute for a given reference entity
 */
export const getReferenceEntityAttributesAttributeCodeOptions = (
    referenceEntityCode: string,
    attributeCode: string, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<GetReferenceEntityAttributesAttributeCodeOptions200Item[]>> => {
    
    return axios.default.get(
      `/api/rest/v1/reference-entities/${referenceEntityCode}/attributes/${attributeCode}/options`,options
    );
  }


export const getGetReferenceEntityAttributesAttributeCodeOptionsQueryKey = (referenceEntityCode: string,
    attributeCode: string,) => {
    return [`/api/rest/v1/reference-entities/${referenceEntityCode}/attributes/${attributeCode}/options`] as const;
    }

    
export const getGetReferenceEntityAttributesAttributeCodeOptionsQueryOptions = <TData = Awaited<ReturnType<typeof getReferenceEntityAttributesAttributeCodeOptions>>, TError = AxiosError<GetReferenceEntityAttributesAttributeCodeOptions401One | GetReferenceEntityAttributesAttributeCodeOptions406One>>(referenceEntityCode: string,
    attributeCode: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getReferenceEntityAttributesAttributeCodeOptions>>, TError, TData>>, axios?: AxiosRequestConfig}
) => {

const {query: queryOptions, axios: axiosOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetReferenceEntityAttributesAttributeCodeOptionsQueryKey(referenceEntityCode,attributeCode);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getReferenceEntityAttributesAttributeCodeOptions>>> = ({ signal }) => getReferenceEntityAttributesAttributeCodeOptions(referenceEntityCode,attributeCode, { signal, ...axiosOptions });

      

      

   return  { queryKey, queryFn, enabled: !!(referenceEntityCode && attributeCode), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getReferenceEntityAttributesAttributeCodeOptions>>, TError, TData> & { queryKey: DataTag<QueryKey, TData> }
}

export type GetReferenceEntityAttributesAttributeCodeOptionsQueryResult = NonNullable<Awaited<ReturnType<typeof getReferenceEntityAttributesAttributeCodeOptions>>>
export type GetReferenceEntityAttributesAttributeCodeOptionsQueryError = AxiosError<GetReferenceEntityAttributesAttributeCodeOptions401One | GetReferenceEntityAttributesAttributeCodeOptions406One>


export function useGetReferenceEntityAttributesAttributeCodeOptions<TData = Awaited<ReturnType<typeof getReferenceEntityAttributesAttributeCodeOptions>>, TError = AxiosError<GetReferenceEntityAttributesAttributeCodeOptions401One | GetReferenceEntityAttributesAttributeCodeOptions406One>>(
 referenceEntityCode: string,
    attributeCode: string, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getReferenceEntityAttributesAttributeCodeOptions>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getReferenceEntityAttributesAttributeCodeOptions>>,
          TError,
          TData
        > , 'initialData'
      >, axios?: AxiosRequestConfig}

  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetReferenceEntityAttributesAttributeCodeOptions<TData = Awaited<ReturnType<typeof getReferenceEntityAttributesAttributeCodeOptions>>, TError = AxiosError<GetReferenceEntityAttributesAttributeCodeOptions401One | GetReferenceEntityAttributesAttributeCodeOptions406One>>(
 referenceEntityCode: string,
    attributeCode: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getReferenceEntityAttributesAttributeCodeOptions>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getReferenceEntityAttributesAttributeCodeOptions>>,
          TError,
          TData
        > , 'initialData'
      >, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetReferenceEntityAttributesAttributeCodeOptions<TData = Awaited<ReturnType<typeof getReferenceEntityAttributesAttributeCodeOptions>>, TError = AxiosError<GetReferenceEntityAttributesAttributeCodeOptions401One | GetReferenceEntityAttributesAttributeCodeOptions406One>>(
 referenceEntityCode: string,
    attributeCode: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getReferenceEntityAttributesAttributeCodeOptions>>, TError, TData>>, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
/**
 * @summary Get a list of attribute options of a given attribute for a given reference entity
 */

export function useGetReferenceEntityAttributesAttributeCodeOptions<TData = Awaited<ReturnType<typeof getReferenceEntityAttributesAttributeCodeOptions>>, TError = AxiosError<GetReferenceEntityAttributesAttributeCodeOptions401One | GetReferenceEntityAttributesAttributeCodeOptions406One>>(
 referenceEntityCode: string,
    attributeCode: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getReferenceEntityAttributesAttributeCodeOptions>>, TError, TData>>, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> } {

  const queryOptions = getGetReferenceEntityAttributesAttributeCodeOptionsQueryOptions(referenceEntityCode,attributeCode,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



/**
 * This endpoint allows you to get the information about a given attribute option.
 * @summary Get an attribute option for a given attribute of a given reference entity
 */
export const getReferenceEntityAttributesAttributeCodeOptionsCode = (
    referenceEntityCode: string,
    attributeCode: string,
    code: string, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<GetReferenceEntityAttributesAttributeCodeOptionsCode200>> => {
    
    return axios.default.get(
      `/api/rest/v1/reference-entities/${referenceEntityCode}/attributes/${attributeCode}/options/${code}`,options
    );
  }


export const getGetReferenceEntityAttributesAttributeCodeOptionsCodeQueryKey = (referenceEntityCode: string,
    attributeCode: string,
    code: string,) => {
    return [`/api/rest/v1/reference-entities/${referenceEntityCode}/attributes/${attributeCode}/options/${code}`] as const;
    }

    
export const getGetReferenceEntityAttributesAttributeCodeOptionsCodeQueryOptions = <TData = Awaited<ReturnType<typeof getReferenceEntityAttributesAttributeCodeOptionsCode>>, TError = AxiosError<GetReferenceEntityAttributesAttributeCodeOptionsCode401One | GetReferenceEntityAttributesAttributeCodeOptionsCode404One | GetReferenceEntityAttributesAttributeCodeOptionsCode406One>>(referenceEntityCode: string,
    attributeCode: string,
    code: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getReferenceEntityAttributesAttributeCodeOptionsCode>>, TError, TData>>, axios?: AxiosRequestConfig}
) => {

const {query: queryOptions, axios: axiosOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetReferenceEntityAttributesAttributeCodeOptionsCodeQueryKey(referenceEntityCode,attributeCode,code);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getReferenceEntityAttributesAttributeCodeOptionsCode>>> = ({ signal }) => getReferenceEntityAttributesAttributeCodeOptionsCode(referenceEntityCode,attributeCode,code, { signal, ...axiosOptions });

      

      

   return  { queryKey, queryFn, enabled: !!(referenceEntityCode && attributeCode && code), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getReferenceEntityAttributesAttributeCodeOptionsCode>>, TError, TData> & { queryKey: DataTag<QueryKey, TData> }
}

export type GetReferenceEntityAttributesAttributeCodeOptionsCodeQueryResult = NonNullable<Awaited<ReturnType<typeof getReferenceEntityAttributesAttributeCodeOptionsCode>>>
export type GetReferenceEntityAttributesAttributeCodeOptionsCodeQueryError = AxiosError<GetReferenceEntityAttributesAttributeCodeOptionsCode401One | GetReferenceEntityAttributesAttributeCodeOptionsCode404One | GetReferenceEntityAttributesAttributeCodeOptionsCode406One>


export function useGetReferenceEntityAttributesAttributeCodeOptionsCode<TData = Awaited<ReturnType<typeof getReferenceEntityAttributesAttributeCodeOptionsCode>>, TError = AxiosError<GetReferenceEntityAttributesAttributeCodeOptionsCode401One | GetReferenceEntityAttributesAttributeCodeOptionsCode404One | GetReferenceEntityAttributesAttributeCodeOptionsCode406One>>(
 referenceEntityCode: string,
    attributeCode: string,
    code: string, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getReferenceEntityAttributesAttributeCodeOptionsCode>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getReferenceEntityAttributesAttributeCodeOptionsCode>>,
          TError,
          TData
        > , 'initialData'
      >, axios?: AxiosRequestConfig}

  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetReferenceEntityAttributesAttributeCodeOptionsCode<TData = Awaited<ReturnType<typeof getReferenceEntityAttributesAttributeCodeOptionsCode>>, TError = AxiosError<GetReferenceEntityAttributesAttributeCodeOptionsCode401One | GetReferenceEntityAttributesAttributeCodeOptionsCode404One | GetReferenceEntityAttributesAttributeCodeOptionsCode406One>>(
 referenceEntityCode: string,
    attributeCode: string,
    code: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getReferenceEntityAttributesAttributeCodeOptionsCode>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getReferenceEntityAttributesAttributeCodeOptionsCode>>,
          TError,
          TData
        > , 'initialData'
      >, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetReferenceEntityAttributesAttributeCodeOptionsCode<TData = Awaited<ReturnType<typeof getReferenceEntityAttributesAttributeCodeOptionsCode>>, TError = AxiosError<GetReferenceEntityAttributesAttributeCodeOptionsCode401One | GetReferenceEntityAttributesAttributeCodeOptionsCode404One | GetReferenceEntityAttributesAttributeCodeOptionsCode406One>>(
 referenceEntityCode: string,
    attributeCode: string,
    code: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getReferenceEntityAttributesAttributeCodeOptionsCode>>, TError, TData>>, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
/**
 * @summary Get an attribute option for a given attribute of a given reference entity
 */

export function useGetReferenceEntityAttributesAttributeCodeOptionsCode<TData = Awaited<ReturnType<typeof getReferenceEntityAttributesAttributeCodeOptionsCode>>, TError = AxiosError<GetReferenceEntityAttributesAttributeCodeOptionsCode401One | GetReferenceEntityAttributesAttributeCodeOptionsCode404One | GetReferenceEntityAttributesAttributeCodeOptionsCode406One>>(
 referenceEntityCode: string,
    attributeCode: string,
    code: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getReferenceEntityAttributesAttributeCodeOptionsCode>>, TError, TData>>, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> } {

  const queryOptions = getGetReferenceEntityAttributesAttributeCodeOptionsCodeQueryOptions(referenceEntityCode,attributeCode,code,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



/**
 * This endpoint allows you to update a given option for a given attribute and a given reference entity. Learn more about <a href="/documentation/update.html#patch-reference-entity-record-values">Update behavior</a>. Note that if the option does not already exist for the given attribute of the given reference entity, it creates it.
 * @summary Update/create a reference entity attribute option
 */
export const patchReferenceEntityAttributesAttributeCodeOptionsCode = (
    referenceEntityCode: string,
    attributeCode: string,
    code: string,
    patchReferenceEntityAttributesAttributeCodeOptionsCodeBody: PatchReferenceEntityAttributesAttributeCodeOptionsCodeBody, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<void>> => {
    
    return axios.default.patch(
      `/api/rest/v1/reference-entities/${referenceEntityCode}/attributes/${attributeCode}/options/${code}`,
      patchReferenceEntityAttributesAttributeCodeOptionsCodeBody,options
    );
  }



export const getPatchReferenceEntityAttributesAttributeCodeOptionsCodeMutationOptions = <TError = AxiosError<PatchReferenceEntityAttributesAttributeCodeOptionsCode401One | PatchReferenceEntityAttributesAttributeCodeOptionsCode415One | PatchReferenceEntityAttributesAttributeCodeOptionsCode422One>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof patchReferenceEntityAttributesAttributeCodeOptionsCode>>, TError,{referenceEntityCode: string;attributeCode: string;code: string;data: PatchReferenceEntityAttributesAttributeCodeOptionsCodeBody}, TContext>, axios?: AxiosRequestConfig}
): UseMutationOptions<Awaited<ReturnType<typeof patchReferenceEntityAttributesAttributeCodeOptionsCode>>, TError,{referenceEntityCode: string;attributeCode: string;code: string;data: PatchReferenceEntityAttributesAttributeCodeOptionsCodeBody}, TContext> => {
const {mutation: mutationOptions, axios: axiosOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof patchReferenceEntityAttributesAttributeCodeOptionsCode>>, {referenceEntityCode: string;attributeCode: string;code: string;data: PatchReferenceEntityAttributesAttributeCodeOptionsCodeBody}> = (props) => {
          const {referenceEntityCode,attributeCode,code,data} = props ?? {};

          return  patchReferenceEntityAttributesAttributeCodeOptionsCode(referenceEntityCode,attributeCode,code,data,axiosOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PatchReferenceEntityAttributesAttributeCodeOptionsCodeMutationResult = NonNullable<Awaited<ReturnType<typeof patchReferenceEntityAttributesAttributeCodeOptionsCode>>>
    export type PatchReferenceEntityAttributesAttributeCodeOptionsCodeMutationBody = PatchReferenceEntityAttributesAttributeCodeOptionsCodeBody
    export type PatchReferenceEntityAttributesAttributeCodeOptionsCodeMutationError = AxiosError<PatchReferenceEntityAttributesAttributeCodeOptionsCode401One | PatchReferenceEntityAttributesAttributeCodeOptionsCode415One | PatchReferenceEntityAttributesAttributeCodeOptionsCode422One>

    /**
 * @summary Update/create a reference entity attribute option
 */
export const usePatchReferenceEntityAttributesAttributeCodeOptionsCode = <TError = AxiosError<PatchReferenceEntityAttributesAttributeCodeOptionsCode401One | PatchReferenceEntityAttributesAttributeCodeOptionsCode415One | PatchReferenceEntityAttributesAttributeCodeOptionsCode422One>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof patchReferenceEntityAttributesAttributeCodeOptionsCode>>, TError,{referenceEntityCode: string;attributeCode: string;code: string;data: PatchReferenceEntityAttributesAttributeCodeOptionsCodeBody}, TContext>, axios?: AxiosRequestConfig}
): UseMutationResult<
        Awaited<ReturnType<typeof patchReferenceEntityAttributesAttributeCodeOptionsCode>>,
        TError,
        {referenceEntityCode: string;attributeCode: string;code: string;data: PatchReferenceEntityAttributesAttributeCodeOptionsCodeBody},
        TContext
      > => {

      const mutationOptions = getPatchReferenceEntityAttributesAttributeCodeOptionsCodeMutationOptions(options);

      return useMutation(mutationOptions);
    }
    