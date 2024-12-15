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
import type {
  AssociationTypesGet200
} from '../../model/associationTypesGet200'
import type {
  AssociationTypesGet401One
} from '../../model/associationTypesGet401One'
import type {
  AssociationTypesGet403One
} from '../../model/associationTypesGet403One'
import type {
  AssociationTypesGet404One
} from '../../model/associationTypesGet404One'
import type {
  AssociationTypesGet406One
} from '../../model/associationTypesGet406One'
import type {
  AssociationTypesGetList200One
} from '../../model/associationTypesGetList200One'
import type {
  AssociationTypesGetList401One
} from '../../model/associationTypesGetList401One'
import type {
  AssociationTypesGetList403One
} from '../../model/associationTypesGetList403One'
import type {
  AssociationTypesGetList406One
} from '../../model/associationTypesGetList406One'
import type {
  AssociationTypesGetListParams
} from '../../model/associationTypesGetListParams'
import type {
  AssociationTypesPatch400One
} from '../../model/associationTypesPatch400One'
import type {
  AssociationTypesPatch401One
} from '../../model/associationTypesPatch401One'
import type {
  AssociationTypesPatch403One
} from '../../model/associationTypesPatch403One'
import type {
  AssociationTypesPatch415One
} from '../../model/associationTypesPatch415One'
import type {
  AssociationTypesPatch422One
} from '../../model/associationTypesPatch422One'
import type {
  AssociationTypesPatchBody
} from '../../model/associationTypesPatchBody'
import type {
  AssociationTypesPost400One
} from '../../model/associationTypesPost400One'
import type {
  AssociationTypesPost401One
} from '../../model/associationTypesPost401One'
import type {
  AssociationTypesPost403One
} from '../../model/associationTypesPost403One'
import type {
  AssociationTypesPost415One
} from '../../model/associationTypesPost415One'
import type {
  AssociationTypesPost422One
} from '../../model/associationTypesPost422One'
import type {
  AssociationTypesPostBody
} from '../../model/associationTypesPostBody'
import type {
  SeveralAssociationTypesPatch200One
} from '../../model/severalAssociationTypesPatch200One'
import type {
  SeveralAssociationTypesPatch401One
} from '../../model/severalAssociationTypesPatch401One'
import type {
  SeveralAssociationTypesPatch403One
} from '../../model/severalAssociationTypesPatch403One'
import type {
  SeveralAssociationTypesPatch413One
} from '../../model/severalAssociationTypesPatch413One'
import type {
  SeveralAssociationTypesPatch415One
} from '../../model/severalAssociationTypesPatch415One'
import type {
  SeveralAssociationTypesPatchBody
} from '../../model/severalAssociationTypesPatchBody'



/**
 * This endpoint allows you to get a list of association types. Association types are paginated and sorted by code.
 * @summary Get a list of association types
 */
export type associationTypesGetListResponse = {
  data: AssociationTypesGetList200One;
  status: number;
  headers: Headers;
}

export const getAssociationTypesGetListUrl = (params?: AssociationTypesGetListParams,) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString())
    }
  });

  return normalizedParams.size ? `/api/rest/v1/association-types?${normalizedParams.toString()}` : `/api/rest/v1/association-types`
}

export const associationTypesGetList = async (params?: AssociationTypesGetListParams, options?: RequestInit): Promise<associationTypesGetListResponse> => {
  
  const res = await fetch(getAssociationTypesGetListUrl(params),
  {      
    ...options,
    method: 'GET'
    
    
  }

  )
  const data = await res.json()

  return { status: res.status, data, headers: res.headers }
}



export const getAssociationTypesGetListQueryKey = (params?: AssociationTypesGetListParams,) => {
    return [`/api/rest/v1/association-types`, ...(params ? [params]: [])] as const;
    }

    
export const getAssociationTypesGetListQueryOptions = <TData = Awaited<ReturnType<typeof associationTypesGetList>>, TError = AssociationTypesGetList401One | AssociationTypesGetList403One | AssociationTypesGetList406One>(params?: AssociationTypesGetListParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof associationTypesGetList>>, TError, TData>>, fetch?: RequestInit}
) => {

const {query: queryOptions, fetch: fetchOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getAssociationTypesGetListQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof associationTypesGetList>>> = ({ signal }) => associationTypesGetList(params, { signal, ...fetchOptions });

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof associationTypesGetList>>, TError, TData> & { queryKey: DataTag<QueryKey, TData> }
}

export type AssociationTypesGetListQueryResult = NonNullable<Awaited<ReturnType<typeof associationTypesGetList>>>
export type AssociationTypesGetListQueryError = AssociationTypesGetList401One | AssociationTypesGetList403One | AssociationTypesGetList406One


export function useAssociationTypesGetList<TData = Awaited<ReturnType<typeof associationTypesGetList>>, TError = AssociationTypesGetList401One | AssociationTypesGetList403One | AssociationTypesGetList406One>(
 params: undefined |  AssociationTypesGetListParams, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof associationTypesGetList>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof associationTypesGetList>>,
          TError,
          TData
        > , 'initialData'
      >, fetch?: RequestInit}

  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useAssociationTypesGetList<TData = Awaited<ReturnType<typeof associationTypesGetList>>, TError = AssociationTypesGetList401One | AssociationTypesGetList403One | AssociationTypesGetList406One>(
 params?: AssociationTypesGetListParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof associationTypesGetList>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof associationTypesGetList>>,
          TError,
          TData
        > , 'initialData'
      >, fetch?: RequestInit}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useAssociationTypesGetList<TData = Awaited<ReturnType<typeof associationTypesGetList>>, TError = AssociationTypesGetList401One | AssociationTypesGetList403One | AssociationTypesGetList406One>(
 params?: AssociationTypesGetListParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof associationTypesGetList>>, TError, TData>>, fetch?: RequestInit}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
/**
 * @summary Get a list of association types
 */

export function useAssociationTypesGetList<TData = Awaited<ReturnType<typeof associationTypesGetList>>, TError = AssociationTypesGetList401One | AssociationTypesGetList403One | AssociationTypesGetList406One>(
 params?: AssociationTypesGetListParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof associationTypesGetList>>, TError, TData>>, fetch?: RequestInit}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> } {

  const queryOptions = getAssociationTypesGetListQueryOptions(params,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



/**
 * This endpoint allows you to update and/or create several association types at once.
 * @summary Update/create several association types
 */
export type severalAssociationTypesPatchResponse = {
  data: SeveralAssociationTypesPatch200One;
  status: number;
  headers: Headers;
}

export const getSeveralAssociationTypesPatchUrl = () => {


  return `/api/rest/v1/association-types`
}

export const severalAssociationTypesPatch = async (severalAssociationTypesPatchBody: SeveralAssociationTypesPatchBody, options?: RequestInit): Promise<severalAssociationTypesPatchResponse> => {
  
  const res = await fetch(getSeveralAssociationTypesPatchUrl(),
  {      
    ...options,
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      severalAssociationTypesPatchBody,)
  }

  )
  const data = await res.json()

  return { status: res.status, data, headers: res.headers }
}




export const getSeveralAssociationTypesPatchMutationOptions = <TError = SeveralAssociationTypesPatch401One | SeveralAssociationTypesPatch403One | SeveralAssociationTypesPatch413One | SeveralAssociationTypesPatch415One,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof severalAssociationTypesPatch>>, TError,{data: SeveralAssociationTypesPatchBody}, TContext>, fetch?: RequestInit}
): UseMutationOptions<Awaited<ReturnType<typeof severalAssociationTypesPatch>>, TError,{data: SeveralAssociationTypesPatchBody}, TContext> => {
const {mutation: mutationOptions, fetch: fetchOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof severalAssociationTypesPatch>>, {data: SeveralAssociationTypesPatchBody}> = (props) => {
          const {data} = props ?? {};

          return  severalAssociationTypesPatch(data,fetchOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type SeveralAssociationTypesPatchMutationResult = NonNullable<Awaited<ReturnType<typeof severalAssociationTypesPatch>>>
    export type SeveralAssociationTypesPatchMutationBody = SeveralAssociationTypesPatchBody
    export type SeveralAssociationTypesPatchMutationError = SeveralAssociationTypesPatch401One | SeveralAssociationTypesPatch403One | SeveralAssociationTypesPatch413One | SeveralAssociationTypesPatch415One

    /**
 * @summary Update/create several association types
 */
export const useSeveralAssociationTypesPatch = <TError = SeveralAssociationTypesPatch401One | SeveralAssociationTypesPatch403One | SeveralAssociationTypesPatch413One | SeveralAssociationTypesPatch415One,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof severalAssociationTypesPatch>>, TError,{data: SeveralAssociationTypesPatchBody}, TContext>, fetch?: RequestInit}
): UseMutationResult<
        Awaited<ReturnType<typeof severalAssociationTypesPatch>>,
        TError,
        {data: SeveralAssociationTypesPatchBody},
        TContext
      > => {

      const mutationOptions = getSeveralAssociationTypesPatchMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * This endpoint allows you to create a new association type.
 * @summary Create a new association type
 */
export type associationTypesPostResponse = {
  data: void;
  status: number;
  headers: Headers;
}

export const getAssociationTypesPostUrl = () => {


  return `/api/rest/v1/association-types`
}

export const associationTypesPost = async (associationTypesPostBody: AssociationTypesPostBody, options?: RequestInit): Promise<associationTypesPostResponse> => {
  
  const res = await fetch(getAssociationTypesPostUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      associationTypesPostBody,)
  }

  )
  const data = await res.json()

  return { status: res.status, data, headers: res.headers }
}




export const getAssociationTypesPostMutationOptions = <TError = AssociationTypesPost400One | AssociationTypesPost401One | AssociationTypesPost403One | AssociationTypesPost415One | AssociationTypesPost422One,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof associationTypesPost>>, TError,{data: AssociationTypesPostBody}, TContext>, fetch?: RequestInit}
): UseMutationOptions<Awaited<ReturnType<typeof associationTypesPost>>, TError,{data: AssociationTypesPostBody}, TContext> => {
const {mutation: mutationOptions, fetch: fetchOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof associationTypesPost>>, {data: AssociationTypesPostBody}> = (props) => {
          const {data} = props ?? {};

          return  associationTypesPost(data,fetchOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type AssociationTypesPostMutationResult = NonNullable<Awaited<ReturnType<typeof associationTypesPost>>>
    export type AssociationTypesPostMutationBody = AssociationTypesPostBody
    export type AssociationTypesPostMutationError = AssociationTypesPost400One | AssociationTypesPost401One | AssociationTypesPost403One | AssociationTypesPost415One | AssociationTypesPost422One

    /**
 * @summary Create a new association type
 */
export const useAssociationTypesPost = <TError = AssociationTypesPost400One | AssociationTypesPost401One | AssociationTypesPost403One | AssociationTypesPost415One | AssociationTypesPost422One,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof associationTypesPost>>, TError,{data: AssociationTypesPostBody}, TContext>, fetch?: RequestInit}
): UseMutationResult<
        Awaited<ReturnType<typeof associationTypesPost>>,
        TError,
        {data: AssociationTypesPostBody},
        TContext
      > => {

      const mutationOptions = getAssociationTypesPostMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * This endpoint allows you to get the information about a given association type.
 * @summary Get an association type
 */
export type associationTypesGetResponse = {
  data: AssociationTypesGet200;
  status: number;
  headers: Headers;
}

export const getAssociationTypesGetUrl = (code: string,) => {


  return `/api/rest/v1/association-types/${code}`
}

export const associationTypesGet = async (code: string, options?: RequestInit): Promise<associationTypesGetResponse> => {
  
  const res = await fetch(getAssociationTypesGetUrl(code),
  {      
    ...options,
    method: 'GET'
    
    
  }

  )
  const data = await res.json()

  return { status: res.status, data, headers: res.headers }
}



export const getAssociationTypesGetQueryKey = (code: string,) => {
    return [`/api/rest/v1/association-types/${code}`] as const;
    }

    
export const getAssociationTypesGetQueryOptions = <TData = Awaited<ReturnType<typeof associationTypesGet>>, TError = AssociationTypesGet401One | AssociationTypesGet403One | AssociationTypesGet404One | AssociationTypesGet406One>(code: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof associationTypesGet>>, TError, TData>>, fetch?: RequestInit}
) => {

const {query: queryOptions, fetch: fetchOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getAssociationTypesGetQueryKey(code);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof associationTypesGet>>> = ({ signal }) => associationTypesGet(code, { signal, ...fetchOptions });

      

      

   return  { queryKey, queryFn, enabled: !!(code), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof associationTypesGet>>, TError, TData> & { queryKey: DataTag<QueryKey, TData> }
}

export type AssociationTypesGetQueryResult = NonNullable<Awaited<ReturnType<typeof associationTypesGet>>>
export type AssociationTypesGetQueryError = AssociationTypesGet401One | AssociationTypesGet403One | AssociationTypesGet404One | AssociationTypesGet406One


export function useAssociationTypesGet<TData = Awaited<ReturnType<typeof associationTypesGet>>, TError = AssociationTypesGet401One | AssociationTypesGet403One | AssociationTypesGet404One | AssociationTypesGet406One>(
 code: string, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof associationTypesGet>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof associationTypesGet>>,
          TError,
          TData
        > , 'initialData'
      >, fetch?: RequestInit}

  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useAssociationTypesGet<TData = Awaited<ReturnType<typeof associationTypesGet>>, TError = AssociationTypesGet401One | AssociationTypesGet403One | AssociationTypesGet404One | AssociationTypesGet406One>(
 code: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof associationTypesGet>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof associationTypesGet>>,
          TError,
          TData
        > , 'initialData'
      >, fetch?: RequestInit}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useAssociationTypesGet<TData = Awaited<ReturnType<typeof associationTypesGet>>, TError = AssociationTypesGet401One | AssociationTypesGet403One | AssociationTypesGet404One | AssociationTypesGet406One>(
 code: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof associationTypesGet>>, TError, TData>>, fetch?: RequestInit}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
/**
 * @summary Get an association type
 */

export function useAssociationTypesGet<TData = Awaited<ReturnType<typeof associationTypesGet>>, TError = AssociationTypesGet401One | AssociationTypesGet403One | AssociationTypesGet404One | AssociationTypesGet406One>(
 code: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof associationTypesGet>>, TError, TData>>, fetch?: RequestInit}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> } {

  const queryOptions = getAssociationTypesGetQueryOptions(code,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



/**
 * This endpoint allows you to update a given association type. Know more about <a href="/documentation/update.html#update-behavior">Update behavior</a>. Note that if no association type exists for the given code, it creates it.
 * @summary Update/create an association type
 */
export type associationTypesPatchResponse = {
  data: void;
  status: number;
  headers: Headers;
}

export const getAssociationTypesPatchUrl = (code: string,) => {


  return `/api/rest/v1/association-types/${code}`
}

export const associationTypesPatch = async (code: string,
    associationTypesPatchBody: AssociationTypesPatchBody, options?: RequestInit): Promise<associationTypesPatchResponse> => {
  
  const res = await fetch(getAssociationTypesPatchUrl(code),
  {      
    ...options,
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      associationTypesPatchBody,)
  }

  )
  const data = await res.json()

  return { status: res.status, data, headers: res.headers }
}




export const getAssociationTypesPatchMutationOptions = <TError = AssociationTypesPatch400One | AssociationTypesPatch401One | AssociationTypesPatch403One | AssociationTypesPatch415One | AssociationTypesPatch422One,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof associationTypesPatch>>, TError,{code: string;data: AssociationTypesPatchBody}, TContext>, fetch?: RequestInit}
): UseMutationOptions<Awaited<ReturnType<typeof associationTypesPatch>>, TError,{code: string;data: AssociationTypesPatchBody}, TContext> => {
const {mutation: mutationOptions, fetch: fetchOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof associationTypesPatch>>, {code: string;data: AssociationTypesPatchBody}> = (props) => {
          const {code,data} = props ?? {};

          return  associationTypesPatch(code,data,fetchOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type AssociationTypesPatchMutationResult = NonNullable<Awaited<ReturnType<typeof associationTypesPatch>>>
    export type AssociationTypesPatchMutationBody = AssociationTypesPatchBody
    export type AssociationTypesPatchMutationError = AssociationTypesPatch400One | AssociationTypesPatch401One | AssociationTypesPatch403One | AssociationTypesPatch415One | AssociationTypesPatch422One

    /**
 * @summary Update/create an association type
 */
export const useAssociationTypesPatch = <TError = AssociationTypesPatch400One | AssociationTypesPatch401One | AssociationTypesPatch403One | AssociationTypesPatch415One | AssociationTypesPatch422One,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof associationTypesPatch>>, TError,{code: string;data: AssociationTypesPatchBody}, TContext>, fetch?: RequestInit}
): UseMutationResult<
        Awaited<ReturnType<typeof associationTypesPatch>>,
        TError,
        {code: string;data: AssociationTypesPatchBody},
        TContext
      > => {

      const mutationOptions = getAssociationTypesPatchMutationOptions(options);

      return useMutation(mutationOptions);
    }
    