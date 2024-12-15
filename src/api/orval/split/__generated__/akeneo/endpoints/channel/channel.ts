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
  ChannelsPatch400One
} from '../../model/channelsPatch400One'
import type {
  ChannelsPatch401One
} from '../../model/channelsPatch401One'
import type {
  ChannelsPatch403One
} from '../../model/channelsPatch403One'
import type {
  ChannelsPatch415One
} from '../../model/channelsPatch415One'
import type {
  ChannelsPatch422One
} from '../../model/channelsPatch422One'
import type {
  ChannelsPatchBody
} from '../../model/channelsPatchBody'
import type {
  ChannelsPost400One
} from '../../model/channelsPost400One'
import type {
  ChannelsPost401One
} from '../../model/channelsPost401One'
import type {
  ChannelsPost403One
} from '../../model/channelsPost403One'
import type {
  ChannelsPost415One
} from '../../model/channelsPost415One'
import type {
  ChannelsPost422One
} from '../../model/channelsPost422One'
import type {
  ChannelsPostBody
} from '../../model/channelsPostBody'
import type {
  GetChannels200One
} from '../../model/getChannels200One'
import type {
  GetChannels401One
} from '../../model/getChannels401One'
import type {
  GetChannels403One
} from '../../model/getChannels403One'
import type {
  GetChannels406One
} from '../../model/getChannels406One'
import type {
  GetChannelsCode200
} from '../../model/getChannelsCode200'
import type {
  GetChannelsCode401One
} from '../../model/getChannelsCode401One'
import type {
  GetChannelsCode403One
} from '../../model/getChannelsCode403One'
import type {
  GetChannelsCode404One
} from '../../model/getChannelsCode404One'
import type {
  GetChannelsCode406One
} from '../../model/getChannelsCode406One'
import type {
  GetChannelsParams
} from '../../model/getChannelsParams'
import type {
  SeveralChannelsPatch200One
} from '../../model/severalChannelsPatch200One'
import type {
  SeveralChannelsPatch401One
} from '../../model/severalChannelsPatch401One'
import type {
  SeveralChannelsPatch403One
} from '../../model/severalChannelsPatch403One'
import type {
  SeveralChannelsPatch413One
} from '../../model/severalChannelsPatch413One'
import type {
  SeveralChannelsPatch415One
} from '../../model/severalChannelsPatch415One'
import type {
  SeveralChannelsPatchBody
} from '../../model/severalChannelsPatchBody'



/**
 * This endpoint allows you to get a list of channels. Channels are paginated and sorted by code.
 * @summary Get a list of channels
 */
export type getChannelsResponse = {
  data: GetChannels200One;
  status: number;
  headers: Headers;
}

export const getGetChannelsUrl = (params?: GetChannelsParams,) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString())
    }
  });

  return normalizedParams.size ? `/api/rest/v1/channels?${normalizedParams.toString()}` : `/api/rest/v1/channels`
}

export const getChannels = async (params?: GetChannelsParams, options?: RequestInit): Promise<getChannelsResponse> => {
  
  const res = await fetch(getGetChannelsUrl(params),
  {      
    ...options,
    method: 'GET'
    
    
  }

  )
  const data = await res.json()

  return { status: res.status, data, headers: res.headers }
}



export const getGetChannelsQueryKey = (params?: GetChannelsParams,) => {
    return [`/api/rest/v1/channels`, ...(params ? [params]: [])] as const;
    }

    
export const getGetChannelsQueryOptions = <TData = Awaited<ReturnType<typeof getChannels>>, TError = GetChannels401One | GetChannels403One | GetChannels406One>(params?: GetChannelsParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getChannels>>, TError, TData>>, fetch?: RequestInit}
) => {

const {query: queryOptions, fetch: fetchOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetChannelsQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getChannels>>> = ({ signal }) => getChannels(params, { signal, ...fetchOptions });

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getChannels>>, TError, TData> & { queryKey: DataTag<QueryKey, TData> }
}

export type GetChannelsQueryResult = NonNullable<Awaited<ReturnType<typeof getChannels>>>
export type GetChannelsQueryError = GetChannels401One | GetChannels403One | GetChannels406One


export function useGetChannels<TData = Awaited<ReturnType<typeof getChannels>>, TError = GetChannels401One | GetChannels403One | GetChannels406One>(
 params: undefined |  GetChannelsParams, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getChannels>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getChannels>>,
          TError,
          TData
        > , 'initialData'
      >, fetch?: RequestInit}

  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetChannels<TData = Awaited<ReturnType<typeof getChannels>>, TError = GetChannels401One | GetChannels403One | GetChannels406One>(
 params?: GetChannelsParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getChannels>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getChannels>>,
          TError,
          TData
        > , 'initialData'
      >, fetch?: RequestInit}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetChannels<TData = Awaited<ReturnType<typeof getChannels>>, TError = GetChannels401One | GetChannels403One | GetChannels406One>(
 params?: GetChannelsParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getChannels>>, TError, TData>>, fetch?: RequestInit}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
/**
 * @summary Get a list of channels
 */

export function useGetChannels<TData = Awaited<ReturnType<typeof getChannels>>, TError = GetChannels401One | GetChannels403One | GetChannels406One>(
 params?: GetChannelsParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getChannels>>, TError, TData>>, fetch?: RequestInit}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> } {

  const queryOptions = getGetChannelsQueryOptions(params,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



/**
 * This endpoint allows you to update and/or create several channels at once.
 * @summary Update/create several channels
 */
export type severalChannelsPatchResponse = {
  data: SeveralChannelsPatch200One;
  status: number;
  headers: Headers;
}

export const getSeveralChannelsPatchUrl = () => {


  return `/api/rest/v1/channels`
}

export const severalChannelsPatch = async (severalChannelsPatchBody: SeveralChannelsPatchBody, options?: RequestInit): Promise<severalChannelsPatchResponse> => {
  
  const res = await fetch(getSeveralChannelsPatchUrl(),
  {      
    ...options,
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      severalChannelsPatchBody,)
  }

  )
  const data = await res.json()

  return { status: res.status, data, headers: res.headers }
}




export const getSeveralChannelsPatchMutationOptions = <TError = SeveralChannelsPatch401One | SeveralChannelsPatch403One | SeveralChannelsPatch413One | SeveralChannelsPatch415One,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof severalChannelsPatch>>, TError,{data: SeveralChannelsPatchBody}, TContext>, fetch?: RequestInit}
): UseMutationOptions<Awaited<ReturnType<typeof severalChannelsPatch>>, TError,{data: SeveralChannelsPatchBody}, TContext> => {
const {mutation: mutationOptions, fetch: fetchOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof severalChannelsPatch>>, {data: SeveralChannelsPatchBody}> = (props) => {
          const {data} = props ?? {};

          return  severalChannelsPatch(data,fetchOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type SeveralChannelsPatchMutationResult = NonNullable<Awaited<ReturnType<typeof severalChannelsPatch>>>
    export type SeveralChannelsPatchMutationBody = SeveralChannelsPatchBody
    export type SeveralChannelsPatchMutationError = SeveralChannelsPatch401One | SeveralChannelsPatch403One | SeveralChannelsPatch413One | SeveralChannelsPatch415One

    /**
 * @summary Update/create several channels
 */
export const useSeveralChannelsPatch = <TError = SeveralChannelsPatch401One | SeveralChannelsPatch403One | SeveralChannelsPatch413One | SeveralChannelsPatch415One,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof severalChannelsPatch>>, TError,{data: SeveralChannelsPatchBody}, TContext>, fetch?: RequestInit}
): UseMutationResult<
        Awaited<ReturnType<typeof severalChannelsPatch>>,
        TError,
        {data: SeveralChannelsPatchBody},
        TContext
      > => {

      const mutationOptions = getSeveralChannelsPatchMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * This endpoint allows you to create a new channel.
 * @summary Create a new channel
 */
export type channelsPostResponse = {
  data: void;
  status: number;
  headers: Headers;
}

export const getChannelsPostUrl = () => {


  return `/api/rest/v1/channels`
}

export const channelsPost = async (channelsPostBody: ChannelsPostBody, options?: RequestInit): Promise<channelsPostResponse> => {
  
  const res = await fetch(getChannelsPostUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      channelsPostBody,)
  }

  )
  const data = await res.json()

  return { status: res.status, data, headers: res.headers }
}




export const getChannelsPostMutationOptions = <TError = ChannelsPost400One | ChannelsPost401One | ChannelsPost403One | ChannelsPost415One | ChannelsPost422One,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof channelsPost>>, TError,{data: ChannelsPostBody}, TContext>, fetch?: RequestInit}
): UseMutationOptions<Awaited<ReturnType<typeof channelsPost>>, TError,{data: ChannelsPostBody}, TContext> => {
const {mutation: mutationOptions, fetch: fetchOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof channelsPost>>, {data: ChannelsPostBody}> = (props) => {
          const {data} = props ?? {};

          return  channelsPost(data,fetchOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type ChannelsPostMutationResult = NonNullable<Awaited<ReturnType<typeof channelsPost>>>
    export type ChannelsPostMutationBody = ChannelsPostBody
    export type ChannelsPostMutationError = ChannelsPost400One | ChannelsPost401One | ChannelsPost403One | ChannelsPost415One | ChannelsPost422One

    /**
 * @summary Create a new channel
 */
export const useChannelsPost = <TError = ChannelsPost400One | ChannelsPost401One | ChannelsPost403One | ChannelsPost415One | ChannelsPost422One,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof channelsPost>>, TError,{data: ChannelsPostBody}, TContext>, fetch?: RequestInit}
): UseMutationResult<
        Awaited<ReturnType<typeof channelsPost>>,
        TError,
        {data: ChannelsPostBody},
        TContext
      > => {

      const mutationOptions = getChannelsPostMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * This endpoint allows you to get the information about a given channel.
 * @summary Get a channel
 */
export type getChannelsCodeResponse = {
  data: GetChannelsCode200;
  status: number;
  headers: Headers;
}

export const getGetChannelsCodeUrl = (code: string,) => {


  return `/api/rest/v1/channels/${code}`
}

export const getChannelsCode = async (code: string, options?: RequestInit): Promise<getChannelsCodeResponse> => {
  
  const res = await fetch(getGetChannelsCodeUrl(code),
  {      
    ...options,
    method: 'GET'
    
    
  }

  )
  const data = await res.json()

  return { status: res.status, data, headers: res.headers }
}



export const getGetChannelsCodeQueryKey = (code: string,) => {
    return [`/api/rest/v1/channels/${code}`] as const;
    }

    
export const getGetChannelsCodeQueryOptions = <TData = Awaited<ReturnType<typeof getChannelsCode>>, TError = GetChannelsCode401One | GetChannelsCode403One | GetChannelsCode404One | GetChannelsCode406One>(code: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getChannelsCode>>, TError, TData>>, fetch?: RequestInit}
) => {

const {query: queryOptions, fetch: fetchOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetChannelsCodeQueryKey(code);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getChannelsCode>>> = ({ signal }) => getChannelsCode(code, { signal, ...fetchOptions });

      

      

   return  { queryKey, queryFn, enabled: !!(code), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getChannelsCode>>, TError, TData> & { queryKey: DataTag<QueryKey, TData> }
}

export type GetChannelsCodeQueryResult = NonNullable<Awaited<ReturnType<typeof getChannelsCode>>>
export type GetChannelsCodeQueryError = GetChannelsCode401One | GetChannelsCode403One | GetChannelsCode404One | GetChannelsCode406One


export function useGetChannelsCode<TData = Awaited<ReturnType<typeof getChannelsCode>>, TError = GetChannelsCode401One | GetChannelsCode403One | GetChannelsCode404One | GetChannelsCode406One>(
 code: string, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getChannelsCode>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getChannelsCode>>,
          TError,
          TData
        > , 'initialData'
      >, fetch?: RequestInit}

  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetChannelsCode<TData = Awaited<ReturnType<typeof getChannelsCode>>, TError = GetChannelsCode401One | GetChannelsCode403One | GetChannelsCode404One | GetChannelsCode406One>(
 code: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getChannelsCode>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getChannelsCode>>,
          TError,
          TData
        > , 'initialData'
      >, fetch?: RequestInit}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetChannelsCode<TData = Awaited<ReturnType<typeof getChannelsCode>>, TError = GetChannelsCode401One | GetChannelsCode403One | GetChannelsCode404One | GetChannelsCode406One>(
 code: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getChannelsCode>>, TError, TData>>, fetch?: RequestInit}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
/**
 * @summary Get a channel
 */

export function useGetChannelsCode<TData = Awaited<ReturnType<typeof getChannelsCode>>, TError = GetChannelsCode401One | GetChannelsCode403One | GetChannelsCode404One | GetChannelsCode406One>(
 code: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getChannelsCode>>, TError, TData>>, fetch?: RequestInit}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> } {

  const queryOptions = getGetChannelsCodeQueryOptions(code,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



/**
 * This endpoint allows you to update a given channel. Know more about <a href="/documentation/update.html#update-behavior">Update behavior</a>. Note that if no channel exists for the given code, it creates it.
 * @summary Update/create a channel
 */
export type channelsPatchResponse = {
  data: void;
  status: number;
  headers: Headers;
}

export const getChannelsPatchUrl = (code: string,) => {


  return `/api/rest/v1/channels/${code}`
}

export const channelsPatch = async (code: string,
    channelsPatchBody: ChannelsPatchBody, options?: RequestInit): Promise<channelsPatchResponse> => {
  
  const res = await fetch(getChannelsPatchUrl(code),
  {      
    ...options,
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      channelsPatchBody,)
  }

  )
  const data = await res.json()

  return { status: res.status, data, headers: res.headers }
}




export const getChannelsPatchMutationOptions = <TError = ChannelsPatch400One | ChannelsPatch401One | ChannelsPatch403One | ChannelsPatch415One | ChannelsPatch422One,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof channelsPatch>>, TError,{code: string;data: ChannelsPatchBody}, TContext>, fetch?: RequestInit}
): UseMutationOptions<Awaited<ReturnType<typeof channelsPatch>>, TError,{code: string;data: ChannelsPatchBody}, TContext> => {
const {mutation: mutationOptions, fetch: fetchOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof channelsPatch>>, {code: string;data: ChannelsPatchBody}> = (props) => {
          const {code,data} = props ?? {};

          return  channelsPatch(code,data,fetchOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type ChannelsPatchMutationResult = NonNullable<Awaited<ReturnType<typeof channelsPatch>>>
    export type ChannelsPatchMutationBody = ChannelsPatchBody
    export type ChannelsPatchMutationError = ChannelsPatch400One | ChannelsPatch401One | ChannelsPatch403One | ChannelsPatch415One | ChannelsPatch422One

    /**
 * @summary Update/create a channel
 */
export const useChannelsPatch = <TError = ChannelsPatch400One | ChannelsPatch401One | ChannelsPatch403One | ChannelsPatch415One | ChannelsPatch422One,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof channelsPatch>>, TError,{code: string;data: ChannelsPatchBody}, TContext>, fetch?: RequestInit}
): UseMutationResult<
        Awaited<ReturnType<typeof channelsPatch>>,
        TError,
        {code: string;data: ChannelsPatchBody},
        TContext
      > => {

      const mutationOptions = getChannelsPatchMutationOptions(options);

      return useMutation(mutationOptions);
    }
    