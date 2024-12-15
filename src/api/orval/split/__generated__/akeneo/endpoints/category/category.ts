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
  GetCategories200One
} from '../../model/getCategories200One'
import type {
  GetCategories401One
} from '../../model/getCategories401One'
import type {
  GetCategories403One
} from '../../model/getCategories403One'
import type {
  GetCategories406One
} from '../../model/getCategories406One'
import type {
  GetCategoriesCode200
} from '../../model/getCategoriesCode200'
import type {
  GetCategoriesCode401One
} from '../../model/getCategoriesCode401One'
import type {
  GetCategoriesCode403One
} from '../../model/getCategoriesCode403One'
import type {
  GetCategoriesCode404One
} from '../../model/getCategoriesCode404One'
import type {
  GetCategoriesCode406One
} from '../../model/getCategoriesCode406One'
import type {
  GetCategoriesCodeParams
} from '../../model/getCategoriesCodeParams'
import type {
  GetCategoriesParams
} from '../../model/getCategoriesParams'
import type {
  GetCategoryMediaFilesCodeDownload401One
} from '../../model/getCategoryMediaFilesCodeDownload401One'
import type {
  GetCategoryMediaFilesCodeDownload403One
} from '../../model/getCategoryMediaFilesCodeDownload403One'
import type {
  GetCategoryMediaFilesCodeDownload404One
} from '../../model/getCategoryMediaFilesCodeDownload404One'
import type {
  PatchCategories200One
} from '../../model/patchCategories200One'
import type {
  PatchCategories401One
} from '../../model/patchCategories401One'
import type {
  PatchCategories403One
} from '../../model/patchCategories403One'
import type {
  PatchCategories413One
} from '../../model/patchCategories413One'
import type {
  PatchCategories415One
} from '../../model/patchCategories415One'
import type {
  PatchCategoriesBody
} from '../../model/patchCategoriesBody'
import type {
  PatchCategoriesCode400One
} from '../../model/patchCategoriesCode400One'
import type {
  PatchCategoriesCode401One
} from '../../model/patchCategoriesCode401One'
import type {
  PatchCategoriesCode403One
} from '../../model/patchCategoriesCode403One'
import type {
  PatchCategoriesCode415One
} from '../../model/patchCategoriesCode415One'
import type {
  PatchCategoriesCode422One
} from '../../model/patchCategoriesCode422One'
import type {
  PatchCategoriesCodeBody
} from '../../model/patchCategoriesCodeBody'
import type {
  PostCategories400One
} from '../../model/postCategories400One'
import type {
  PostCategories401One
} from '../../model/postCategories401One'
import type {
  PostCategories403One
} from '../../model/postCategories403One'
import type {
  PostCategories415One
} from '../../model/postCategories415One'
import type {
  PostCategories422One
} from '../../model/postCategories422One'
import type {
  PostCategoriesBody
} from '../../model/postCategoriesBody'



/**
 * This endpoint allows you to get a list of categories. Categories are paginated and sorted by `root/left`.
 * @summary Get list of categories
 */
export type getCategoriesResponse = {
  data: GetCategories200One;
  status: number;
  headers: Headers;
}

export const getGetCategoriesUrl = (params?: GetCategoriesParams,) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString())
    }
  });

  return normalizedParams.size ? `/api/rest/v1/categories?${normalizedParams.toString()}` : `/api/rest/v1/categories`
}

export const getCategories = async (params?: GetCategoriesParams, options?: RequestInit): Promise<getCategoriesResponse> => {
  
  const res = await fetch(getGetCategoriesUrl(params),
  {      
    ...options,
    method: 'GET'
    
    
  }

  )
  const data = await res.json()

  return { status: res.status, data, headers: res.headers }
}



export const getGetCategoriesQueryKey = (params?: GetCategoriesParams,) => {
    return [`/api/rest/v1/categories`, ...(params ? [params]: [])] as const;
    }

    
export const getGetCategoriesQueryOptions = <TData = Awaited<ReturnType<typeof getCategories>>, TError = GetCategories401One | GetCategories403One | GetCategories406One>(params?: GetCategoriesParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getCategories>>, TError, TData>>, fetch?: RequestInit}
) => {

const {query: queryOptions, fetch: fetchOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetCategoriesQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getCategories>>> = ({ signal }) => getCategories(params, { signal, ...fetchOptions });

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getCategories>>, TError, TData> & { queryKey: DataTag<QueryKey, TData> }
}

export type GetCategoriesQueryResult = NonNullable<Awaited<ReturnType<typeof getCategories>>>
export type GetCategoriesQueryError = GetCategories401One | GetCategories403One | GetCategories406One


export function useGetCategories<TData = Awaited<ReturnType<typeof getCategories>>, TError = GetCategories401One | GetCategories403One | GetCategories406One>(
 params: undefined |  GetCategoriesParams, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getCategories>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getCategories>>,
          TError,
          TData
        > , 'initialData'
      >, fetch?: RequestInit}

  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetCategories<TData = Awaited<ReturnType<typeof getCategories>>, TError = GetCategories401One | GetCategories403One | GetCategories406One>(
 params?: GetCategoriesParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getCategories>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getCategories>>,
          TError,
          TData
        > , 'initialData'
      >, fetch?: RequestInit}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetCategories<TData = Awaited<ReturnType<typeof getCategories>>, TError = GetCategories401One | GetCategories403One | GetCategories406One>(
 params?: GetCategoriesParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getCategories>>, TError, TData>>, fetch?: RequestInit}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
/**
 * @summary Get list of categories
 */

export function useGetCategories<TData = Awaited<ReturnType<typeof getCategories>>, TError = GetCategories401One | GetCategories403One | GetCategories406One>(
 params?: GetCategoriesParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getCategories>>, TError, TData>>, fetch?: RequestInit}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> } {

  const queryOptions = getGetCategoriesQueryOptions(params,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



/**
 * This endpoint allows you to update several categories at once.
 * @summary Update/create several categories
 */
export type patchCategoriesResponse = {
  data: PatchCategories200One;
  status: number;
  headers: Headers;
}

export const getPatchCategoriesUrl = () => {


  return `/api/rest/v1/categories`
}

export const patchCategories = async (patchCategoriesBody: PatchCategoriesBody, options?: RequestInit): Promise<patchCategoriesResponse> => {
  
  const res = await fetch(getPatchCategoriesUrl(),
  {      
    ...options,
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      patchCategoriesBody,)
  }

  )
  const data = await res.json()

  return { status: res.status, data, headers: res.headers }
}




export const getPatchCategoriesMutationOptions = <TError = PatchCategories401One | PatchCategories403One | PatchCategories413One | PatchCategories415One,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof patchCategories>>, TError,{data: PatchCategoriesBody}, TContext>, fetch?: RequestInit}
): UseMutationOptions<Awaited<ReturnType<typeof patchCategories>>, TError,{data: PatchCategoriesBody}, TContext> => {
const {mutation: mutationOptions, fetch: fetchOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof patchCategories>>, {data: PatchCategoriesBody}> = (props) => {
          const {data} = props ?? {};

          return  patchCategories(data,fetchOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PatchCategoriesMutationResult = NonNullable<Awaited<ReturnType<typeof patchCategories>>>
    export type PatchCategoriesMutationBody = PatchCategoriesBody
    export type PatchCategoriesMutationError = PatchCategories401One | PatchCategories403One | PatchCategories413One | PatchCategories415One

    /**
 * @summary Update/create several categories
 */
export const usePatchCategories = <TError = PatchCategories401One | PatchCategories403One | PatchCategories413One | PatchCategories415One,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof patchCategories>>, TError,{data: PatchCategoriesBody}, TContext>, fetch?: RequestInit}
): UseMutationResult<
        Awaited<ReturnType<typeof patchCategories>>,
        TError,
        {data: PatchCategoriesBody},
        TContext
      > => {

      const mutationOptions = getPatchCategoriesMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * This endpoint allows you to create a new category.
 * @summary Create a new category
 */
export type postCategoriesResponse = {
  data: void;
  status: number;
  headers: Headers;
}

export const getPostCategoriesUrl = () => {


  return `/api/rest/v1/categories`
}

export const postCategories = async (postCategoriesBody: PostCategoriesBody, options?: RequestInit): Promise<postCategoriesResponse> => {
  
  const res = await fetch(getPostCategoriesUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      postCategoriesBody,)
  }

  )
  const data = await res.json()

  return { status: res.status, data, headers: res.headers }
}




export const getPostCategoriesMutationOptions = <TError = PostCategories400One | PostCategories401One | PostCategories403One | PostCategories415One | PostCategories422One,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postCategories>>, TError,{data: PostCategoriesBody}, TContext>, fetch?: RequestInit}
): UseMutationOptions<Awaited<ReturnType<typeof postCategories>>, TError,{data: PostCategoriesBody}, TContext> => {
const {mutation: mutationOptions, fetch: fetchOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postCategories>>, {data: PostCategoriesBody}> = (props) => {
          const {data} = props ?? {};

          return  postCategories(data,fetchOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostCategoriesMutationResult = NonNullable<Awaited<ReturnType<typeof postCategories>>>
    export type PostCategoriesMutationBody = PostCategoriesBody
    export type PostCategoriesMutationError = PostCategories400One | PostCategories401One | PostCategories403One | PostCategories415One | PostCategories422One

    /**
 * @summary Create a new category
 */
export const usePostCategories = <TError = PostCategories400One | PostCategories401One | PostCategories403One | PostCategories415One | PostCategories422One,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postCategories>>, TError,{data: PostCategoriesBody}, TContext>, fetch?: RequestInit}
): UseMutationResult<
        Awaited<ReturnType<typeof postCategories>>,
        TError,
        {data: PostCategoriesBody},
        TContext
      > => {

      const mutationOptions = getPostCategoriesMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * This endpoint allows you to get the information about a given category.
 * @summary Get a category
 */
export type getCategoriesCodeResponse = {
  data: GetCategoriesCode200;
  status: number;
  headers: Headers;
}

export const getGetCategoriesCodeUrl = (code: string,
    params?: GetCategoriesCodeParams,) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString())
    }
  });

  return normalizedParams.size ? `/api/rest/v1/categories/${code}?${normalizedParams.toString()}` : `/api/rest/v1/categories/${code}`
}

export const getCategoriesCode = async (code: string,
    params?: GetCategoriesCodeParams, options?: RequestInit): Promise<getCategoriesCodeResponse> => {
  
  const res = await fetch(getGetCategoriesCodeUrl(code,params),
  {      
    ...options,
    method: 'GET'
    
    
  }

  )
  const data = await res.json()

  return { status: res.status, data, headers: res.headers }
}



export const getGetCategoriesCodeQueryKey = (code: string,
    params?: GetCategoriesCodeParams,) => {
    return [`/api/rest/v1/categories/${code}`, ...(params ? [params]: [])] as const;
    }

    
export const getGetCategoriesCodeQueryOptions = <TData = Awaited<ReturnType<typeof getCategoriesCode>>, TError = GetCategoriesCode401One | GetCategoriesCode403One | GetCategoriesCode404One | GetCategoriesCode406One>(code: string,
    params?: GetCategoriesCodeParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getCategoriesCode>>, TError, TData>>, fetch?: RequestInit}
) => {

const {query: queryOptions, fetch: fetchOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetCategoriesCodeQueryKey(code,params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getCategoriesCode>>> = ({ signal }) => getCategoriesCode(code,params, { signal, ...fetchOptions });

      

      

   return  { queryKey, queryFn, enabled: !!(code), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getCategoriesCode>>, TError, TData> & { queryKey: DataTag<QueryKey, TData> }
}

export type GetCategoriesCodeQueryResult = NonNullable<Awaited<ReturnType<typeof getCategoriesCode>>>
export type GetCategoriesCodeQueryError = GetCategoriesCode401One | GetCategoriesCode403One | GetCategoriesCode404One | GetCategoriesCode406One


export function useGetCategoriesCode<TData = Awaited<ReturnType<typeof getCategoriesCode>>, TError = GetCategoriesCode401One | GetCategoriesCode403One | GetCategoriesCode404One | GetCategoriesCode406One>(
 code: string,
    params: undefined |  GetCategoriesCodeParams, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getCategoriesCode>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getCategoriesCode>>,
          TError,
          TData
        > , 'initialData'
      >, fetch?: RequestInit}

  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetCategoriesCode<TData = Awaited<ReturnType<typeof getCategoriesCode>>, TError = GetCategoriesCode401One | GetCategoriesCode403One | GetCategoriesCode404One | GetCategoriesCode406One>(
 code: string,
    params?: GetCategoriesCodeParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getCategoriesCode>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getCategoriesCode>>,
          TError,
          TData
        > , 'initialData'
      >, fetch?: RequestInit}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetCategoriesCode<TData = Awaited<ReturnType<typeof getCategoriesCode>>, TError = GetCategoriesCode401One | GetCategoriesCode403One | GetCategoriesCode404One | GetCategoriesCode406One>(
 code: string,
    params?: GetCategoriesCodeParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getCategoriesCode>>, TError, TData>>, fetch?: RequestInit}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
/**
 * @summary Get a category
 */

export function useGetCategoriesCode<TData = Awaited<ReturnType<typeof getCategoriesCode>>, TError = GetCategoriesCode401One | GetCategoriesCode403One | GetCategoriesCode404One | GetCategoriesCode406One>(
 code: string,
    params?: GetCategoriesCodeParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getCategoriesCode>>, TError, TData>>, fetch?: RequestInit}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> } {

  const queryOptions = getGetCategoriesCodeQueryOptions(code,params,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



/**
 * This endpoint allows you to update a given category. Know more about <a href="/documentation/update.html#update-behavior">Update behavior</a>. Note that if no category exists for the given code, it creates it.
 * @summary Update/create a category
 */
export type patchCategoriesCodeResponse = {
  data: void;
  status: number;
  headers: Headers;
}

export const getPatchCategoriesCodeUrl = (code: string,) => {


  return `/api/rest/v1/categories/${code}`
}

export const patchCategoriesCode = async (code: string,
    patchCategoriesCodeBody: PatchCategoriesCodeBody, options?: RequestInit): Promise<patchCategoriesCodeResponse> => {
  
  const res = await fetch(getPatchCategoriesCodeUrl(code),
  {      
    ...options,
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      patchCategoriesCodeBody,)
  }

  )
  const data = await res.json()

  return { status: res.status, data, headers: res.headers }
}




export const getPatchCategoriesCodeMutationOptions = <TError = PatchCategoriesCode400One | PatchCategoriesCode401One | PatchCategoriesCode403One | PatchCategoriesCode415One | PatchCategoriesCode422One,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof patchCategoriesCode>>, TError,{code: string;data: PatchCategoriesCodeBody}, TContext>, fetch?: RequestInit}
): UseMutationOptions<Awaited<ReturnType<typeof patchCategoriesCode>>, TError,{code: string;data: PatchCategoriesCodeBody}, TContext> => {
const {mutation: mutationOptions, fetch: fetchOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof patchCategoriesCode>>, {code: string;data: PatchCategoriesCodeBody}> = (props) => {
          const {code,data} = props ?? {};

          return  patchCategoriesCode(code,data,fetchOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PatchCategoriesCodeMutationResult = NonNullable<Awaited<ReturnType<typeof patchCategoriesCode>>>
    export type PatchCategoriesCodeMutationBody = PatchCategoriesCodeBody
    export type PatchCategoriesCodeMutationError = PatchCategoriesCode400One | PatchCategoriesCode401One | PatchCategoriesCode403One | PatchCategoriesCode415One | PatchCategoriesCode422One

    /**
 * @summary Update/create a category
 */
export const usePatchCategoriesCode = <TError = PatchCategoriesCode400One | PatchCategoriesCode401One | PatchCategoriesCode403One | PatchCategoriesCode415One | PatchCategoriesCode422One,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof patchCategoriesCode>>, TError,{code: string;data: PatchCategoriesCodeBody}, TContext>, fetch?: RequestInit}
): UseMutationResult<
        Awaited<ReturnType<typeof patchCategoriesCode>>,
        TError,
        {code: string;data: PatchCategoriesCodeBody},
        TContext
      > => {

      const mutationOptions = getPatchCategoriesCodeMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * This endpoint allows you to download a given media file that is used as an attribute value of a enriched category.
 * @summary Download a category media file [COMING SOON]
 */
export type getCategoryMediaFilesCodeDownloadResponse = {
  data: void;
  status: number;
  headers: Headers;
}

export const getGetCategoryMediaFilesCodeDownloadUrl = (code: string,) => {


  return `/api/rest/v1/category-media-files/${code}/download`
}

export const getCategoryMediaFilesCodeDownload = async (code: string, options?: RequestInit): Promise<getCategoryMediaFilesCodeDownloadResponse> => {
  
  const res = await fetch(getGetCategoryMediaFilesCodeDownloadUrl(code),
  {      
    ...options,
    method: 'GET'
    
    
  }

  )
  const data = await res.json()

  return { status: res.status, data, headers: res.headers }
}



export const getGetCategoryMediaFilesCodeDownloadQueryKey = (code: string,) => {
    return [`/api/rest/v1/category-media-files/${code}/download`] as const;
    }

    
export const getGetCategoryMediaFilesCodeDownloadQueryOptions = <TData = Awaited<ReturnType<typeof getCategoryMediaFilesCodeDownload>>, TError = GetCategoryMediaFilesCodeDownload401One | GetCategoryMediaFilesCodeDownload403One | GetCategoryMediaFilesCodeDownload404One>(code: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getCategoryMediaFilesCodeDownload>>, TError, TData>>, fetch?: RequestInit}
) => {

const {query: queryOptions, fetch: fetchOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetCategoryMediaFilesCodeDownloadQueryKey(code);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getCategoryMediaFilesCodeDownload>>> = ({ signal }) => getCategoryMediaFilesCodeDownload(code, { signal, ...fetchOptions });

      

      

   return  { queryKey, queryFn, enabled: !!(code), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getCategoryMediaFilesCodeDownload>>, TError, TData> & { queryKey: DataTag<QueryKey, TData> }
}

export type GetCategoryMediaFilesCodeDownloadQueryResult = NonNullable<Awaited<ReturnType<typeof getCategoryMediaFilesCodeDownload>>>
export type GetCategoryMediaFilesCodeDownloadQueryError = GetCategoryMediaFilesCodeDownload401One | GetCategoryMediaFilesCodeDownload403One | GetCategoryMediaFilesCodeDownload404One


export function useGetCategoryMediaFilesCodeDownload<TData = Awaited<ReturnType<typeof getCategoryMediaFilesCodeDownload>>, TError = GetCategoryMediaFilesCodeDownload401One | GetCategoryMediaFilesCodeDownload403One | GetCategoryMediaFilesCodeDownload404One>(
 code: string, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getCategoryMediaFilesCodeDownload>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getCategoryMediaFilesCodeDownload>>,
          TError,
          TData
        > , 'initialData'
      >, fetch?: RequestInit}

  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetCategoryMediaFilesCodeDownload<TData = Awaited<ReturnType<typeof getCategoryMediaFilesCodeDownload>>, TError = GetCategoryMediaFilesCodeDownload401One | GetCategoryMediaFilesCodeDownload403One | GetCategoryMediaFilesCodeDownload404One>(
 code: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getCategoryMediaFilesCodeDownload>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getCategoryMediaFilesCodeDownload>>,
          TError,
          TData
        > , 'initialData'
      >, fetch?: RequestInit}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetCategoryMediaFilesCodeDownload<TData = Awaited<ReturnType<typeof getCategoryMediaFilesCodeDownload>>, TError = GetCategoryMediaFilesCodeDownload401One | GetCategoryMediaFilesCodeDownload403One | GetCategoryMediaFilesCodeDownload404One>(
 code: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getCategoryMediaFilesCodeDownload>>, TError, TData>>, fetch?: RequestInit}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
/**
 * @summary Download a category media file [COMING SOON]
 */

export function useGetCategoryMediaFilesCodeDownload<TData = Awaited<ReturnType<typeof getCategoryMediaFilesCodeDownload>>, TError = GetCategoryMediaFilesCodeDownload401One | GetCategoryMediaFilesCodeDownload403One | GetCategoryMediaFilesCodeDownload404One>(
 code: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getCategoryMediaFilesCodeDownload>>, TError, TData>>, fetch?: RequestInit}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> } {

  const queryOptions = getGetCategoryMediaFilesCodeDownloadQueryOptions(code,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



