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
  DeleteProductModelsCode401One
} from '../../model/deleteProductModelsCode401One'
import type {
  DeleteProductModelsCode403One
} from '../../model/deleteProductModelsCode403One'
import type {
  DeleteProductModelsCode404One
} from '../../model/deleteProductModelsCode404One'
import type {
  GetProductModelDraftCode200
} from '../../model/getProductModelDraftCode200'
import type {
  GetProductModelDraftCode401One
} from '../../model/getProductModelDraftCode401One'
import type {
  GetProductModelDraftCode403One
} from '../../model/getProductModelDraftCode403One'
import type {
  GetProductModelDraftCode404One
} from '../../model/getProductModelDraftCode404One'
import type {
  GetProductModelDraftCode406One
} from '../../model/getProductModelDraftCode406One'
import type {
  GetProductModels200One
} from '../../model/getProductModels200One'
import type {
  GetProductModels401One
} from '../../model/getProductModels401One'
import type {
  GetProductModels406One
} from '../../model/getProductModels406One'
import type {
  GetProductModels422One
} from '../../model/getProductModels422One'
import type {
  GetProductModelsCode200
} from '../../model/getProductModelsCode200'
import type {
  GetProductModelsCode401One
} from '../../model/getProductModelsCode401One'
import type {
  GetProductModelsCode404One
} from '../../model/getProductModelsCode404One'
import type {
  GetProductModelsCode406One
} from '../../model/getProductModelsCode406One'
import type {
  GetProductModelsCodeParams
} from '../../model/getProductModelsCodeParams'
import type {
  GetProductModelsParams
} from '../../model/getProductModelsParams'
import type {
  PatchProductModels200One
} from '../../model/patchProductModels200One'
import type {
  PatchProductModels401One
} from '../../model/patchProductModels401One'
import type {
  PatchProductModels403One
} from '../../model/patchProductModels403One'
import type {
  PatchProductModels413One
} from '../../model/patchProductModels413One'
import type {
  PatchProductModels415One
} from '../../model/patchProductModels415One'
import type {
  PatchProductModelsBody
} from '../../model/patchProductModelsBody'
import type {
  PatchProductModelsCode401One
} from '../../model/patchProductModelsCode401One'
import type {
  PatchProductModelsCode415One
} from '../../model/patchProductModelsCode415One'
import type {
  PatchProductModelsCode422One
} from '../../model/patchProductModelsCode422One'
import type {
  PatchProductModelsCodeBody
} from '../../model/patchProductModelsCodeBody'
import type {
  PostProductModelProposal401One
} from '../../model/postProductModelProposal401One'
import type {
  PostProductModelProposal403One
} from '../../model/postProductModelProposal403One'
import type {
  PostProductModelProposal415One
} from '../../model/postProductModelProposal415One'
import type {
  PostProductModelProposal422One
} from '../../model/postProductModelProposal422One'
import type {
  PostProductModels400One
} from '../../model/postProductModels400One'
import type {
  PostProductModels401One
} from '../../model/postProductModels401One'
import type {
  PostProductModels415One
} from '../../model/postProductModels415One'
import type {
  PostProductModels422One
} from '../../model/postProductModels422One'
import type {
  PostProductModelsBody
} from '../../model/postProductModelsBody'



/**
 * This endpoint allows you to get a list of product models. Product models are paginated. In the Enterprise Edition, since the 2.0, permissions based on your user groups are applied to the set of products you request.
 * @summary Get list of product models
 */
export type getProductModelsResponse = {
  data: GetProductModels200One;
  status: number;
  headers: Headers;
}

export const getGetProductModelsUrl = (params?: GetProductModelsParams,) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString())
    }
  });

  return normalizedParams.size ? `/api/rest/v1/product-models?${normalizedParams.toString()}` : `/api/rest/v1/product-models`
}

export const getProductModels = async (params?: GetProductModelsParams, options?: RequestInit): Promise<getProductModelsResponse> => {
  
  const res = await fetch(getGetProductModelsUrl(params),
  {      
    ...options,
    method: 'GET'
    
    
  }

  )
  const data = await res.json()

  return { status: res.status, data, headers: res.headers }
}



export const getGetProductModelsQueryKey = (params?: GetProductModelsParams,) => {
    return [`/api/rest/v1/product-models`, ...(params ? [params]: [])] as const;
    }

    
export const getGetProductModelsQueryOptions = <TData = Awaited<ReturnType<typeof getProductModels>>, TError = GetProductModels401One | GetProductModels406One | GetProductModels422One>(params?: GetProductModelsParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getProductModels>>, TError, TData>>, fetch?: RequestInit}
) => {

const {query: queryOptions, fetch: fetchOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetProductModelsQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getProductModels>>> = ({ signal }) => getProductModels(params, { signal, ...fetchOptions });

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getProductModels>>, TError, TData> & { queryKey: DataTag<QueryKey, TData> }
}

export type GetProductModelsQueryResult = NonNullable<Awaited<ReturnType<typeof getProductModels>>>
export type GetProductModelsQueryError = GetProductModels401One | GetProductModels406One | GetProductModels422One


export function useGetProductModels<TData = Awaited<ReturnType<typeof getProductModels>>, TError = GetProductModels401One | GetProductModels406One | GetProductModels422One>(
 params: undefined |  GetProductModelsParams, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getProductModels>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getProductModels>>,
          TError,
          TData
        > , 'initialData'
      >, fetch?: RequestInit}

  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetProductModels<TData = Awaited<ReturnType<typeof getProductModels>>, TError = GetProductModels401One | GetProductModels406One | GetProductModels422One>(
 params?: GetProductModelsParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getProductModels>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getProductModels>>,
          TError,
          TData
        > , 'initialData'
      >, fetch?: RequestInit}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetProductModels<TData = Awaited<ReturnType<typeof getProductModels>>, TError = GetProductModels401One | GetProductModels406One | GetProductModels422One>(
 params?: GetProductModelsParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getProductModels>>, TError, TData>>, fetch?: RequestInit}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
/**
 * @summary Get list of product models
 */

export function useGetProductModels<TData = Awaited<ReturnType<typeof getProductModels>>, TError = GetProductModels401One | GetProductModels406One | GetProductModels422One>(
 params?: GetProductModelsParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getProductModels>>, TError, TData>>, fetch?: RequestInit}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> } {

  const queryOptions = getGetProductModelsQueryOptions(params,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



/**
 * This endpoint allows you to update and/or create several product models at once. Learn more about <a href="/documentation/update.html#update-behavior">Update behavior</a>. Note that if no product models exists for the given code, it creates it. In the Enterprise Edition, since the v2.3, permissions based on your user groups are applied to the product models you try to update. It may result in the creation of drafts if you only have edit rights through the product model's categories.
 * @summary Update/create several product models
 */
export type patchProductModelsResponse = {
  data: PatchProductModels200One;
  status: number;
  headers: Headers;
}

export const getPatchProductModelsUrl = () => {


  return `/api/rest/v1/product-models`
}

export const patchProductModels = async (patchProductModelsBody: PatchProductModelsBody, options?: RequestInit): Promise<patchProductModelsResponse> => {
  
  const res = await fetch(getPatchProductModelsUrl(),
  {      
    ...options,
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      patchProductModelsBody,)
  }

  )
  const data = await res.json()

  return { status: res.status, data, headers: res.headers }
}




export const getPatchProductModelsMutationOptions = <TError = PatchProductModels401One | PatchProductModels403One | PatchProductModels413One | PatchProductModels415One,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof patchProductModels>>, TError,{data: PatchProductModelsBody}, TContext>, fetch?: RequestInit}
): UseMutationOptions<Awaited<ReturnType<typeof patchProductModels>>, TError,{data: PatchProductModelsBody}, TContext> => {
const {mutation: mutationOptions, fetch: fetchOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof patchProductModels>>, {data: PatchProductModelsBody}> = (props) => {
          const {data} = props ?? {};

          return  patchProductModels(data,fetchOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PatchProductModelsMutationResult = NonNullable<Awaited<ReturnType<typeof patchProductModels>>>
    export type PatchProductModelsMutationBody = PatchProductModelsBody
    export type PatchProductModelsMutationError = PatchProductModels401One | PatchProductModels403One | PatchProductModels413One | PatchProductModels415One

    /**
 * @summary Update/create several product models
 */
export const usePatchProductModels = <TError = PatchProductModels401One | PatchProductModels403One | PatchProductModels413One | PatchProductModels415One,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof patchProductModels>>, TError,{data: PatchProductModelsBody}, TContext>, fetch?: RequestInit}
): UseMutationResult<
        Awaited<ReturnType<typeof patchProductModels>>,
        TError,
        {data: PatchProductModelsBody},
        TContext
      > => {

      const mutationOptions = getPatchProductModelsMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * This endpoint allows you to create a new product model. In the Enterprise Edition, since the v2.3, permissions based on your user groups are applied to the product model you try to create.
 * @summary Create a new product model
 */
export type postProductModelsResponse = {
  data: void;
  status: number;
  headers: Headers;
}

export const getPostProductModelsUrl = () => {


  return `/api/rest/v1/product-models`
}

export const postProductModels = async (postProductModelsBody: PostProductModelsBody, options?: RequestInit): Promise<postProductModelsResponse> => {
  
  const res = await fetch(getPostProductModelsUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      postProductModelsBody,)
  }

  )
  const data = await res.json()

  return { status: res.status, data, headers: res.headers }
}




export const getPostProductModelsMutationOptions = <TError = PostProductModels400One | PostProductModels401One | PostProductModels415One | PostProductModels422One,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postProductModels>>, TError,{data: PostProductModelsBody}, TContext>, fetch?: RequestInit}
): UseMutationOptions<Awaited<ReturnType<typeof postProductModels>>, TError,{data: PostProductModelsBody}, TContext> => {
const {mutation: mutationOptions, fetch: fetchOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postProductModels>>, {data: PostProductModelsBody}> = (props) => {
          const {data} = props ?? {};

          return  postProductModels(data,fetchOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostProductModelsMutationResult = NonNullable<Awaited<ReturnType<typeof postProductModels>>>
    export type PostProductModelsMutationBody = PostProductModelsBody
    export type PostProductModelsMutationError = PostProductModels400One | PostProductModels401One | PostProductModels415One | PostProductModels422One

    /**
 * @summary Create a new product model
 */
export const usePostProductModels = <TError = PostProductModels400One | PostProductModels401One | PostProductModels415One | PostProductModels422One,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postProductModels>>, TError,{data: PostProductModelsBody}, TContext>, fetch?: RequestInit}
): UseMutationResult<
        Awaited<ReturnType<typeof postProductModels>>,
        TError,
        {data: PostProductModelsBody},
        TContext
      > => {

      const mutationOptions = getPostProductModelsMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * This endpoint allows you to delete a given product model. All its children, product models and variant products, will be also deleted. In the Enterprise Edition, the permissions based on your connection user group are applied to the product model you try to delete.
 * @summary Delete a product model
 */
export type deleteProductModelsCodeResponse = {
  data: void;
  status: number;
  headers: Headers;
}

export const getDeleteProductModelsCodeUrl = (code: string,) => {


  return `/api/rest/v1/product-models/${code}`
}

export const deleteProductModelsCode = async (code: string, options?: RequestInit): Promise<deleteProductModelsCodeResponse> => {
  
  const res = await fetch(getDeleteProductModelsCodeUrl(code),
  {      
    ...options,
    method: 'DELETE'
    
    
  }

  )
  const data = await res.json()

  return { status: res.status, data, headers: res.headers }
}




export const getDeleteProductModelsCodeMutationOptions = <TError = DeleteProductModelsCode401One | DeleteProductModelsCode403One | DeleteProductModelsCode404One,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteProductModelsCode>>, TError,{code: string}, TContext>, fetch?: RequestInit}
): UseMutationOptions<Awaited<ReturnType<typeof deleteProductModelsCode>>, TError,{code: string}, TContext> => {
const {mutation: mutationOptions, fetch: fetchOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof deleteProductModelsCode>>, {code: string}> = (props) => {
          const {code} = props ?? {};

          return  deleteProductModelsCode(code,fetchOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type DeleteProductModelsCodeMutationResult = NonNullable<Awaited<ReturnType<typeof deleteProductModelsCode>>>
    
    export type DeleteProductModelsCodeMutationError = DeleteProductModelsCode401One | DeleteProductModelsCode403One | DeleteProductModelsCode404One

    /**
 * @summary Delete a product model
 */
export const useDeleteProductModelsCode = <TError = DeleteProductModelsCode401One | DeleteProductModelsCode403One | DeleteProductModelsCode404One,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteProductModelsCode>>, TError,{code: string}, TContext>, fetch?: RequestInit}
): UseMutationResult<
        Awaited<ReturnType<typeof deleteProductModelsCode>>,
        TError,
        {code: string},
        TContext
      > => {

      const mutationOptions = getDeleteProductModelsCodeMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * This endpoint allows you to get the information about a given product model. In the Entreprise Edition, since the v2.0, permissions based on your user groups are applied to the product model you request.
 * @summary Get a product model
 */
export type getProductModelsCodeResponse = {
  data: GetProductModelsCode200;
  status: number;
  headers: Headers;
}

export const getGetProductModelsCodeUrl = (code: string,
    params?: GetProductModelsCodeParams,) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString())
    }
  });

  return normalizedParams.size ? `/api/rest/v1/product-models/${code}?${normalizedParams.toString()}` : `/api/rest/v1/product-models/${code}`
}

export const getProductModelsCode = async (code: string,
    params?: GetProductModelsCodeParams, options?: RequestInit): Promise<getProductModelsCodeResponse> => {
  
  const res = await fetch(getGetProductModelsCodeUrl(code,params),
  {      
    ...options,
    method: 'GET'
    
    
  }

  )
  const data = await res.json()

  return { status: res.status, data, headers: res.headers }
}



export const getGetProductModelsCodeQueryKey = (code: string,
    params?: GetProductModelsCodeParams,) => {
    return [`/api/rest/v1/product-models/${code}`, ...(params ? [params]: [])] as const;
    }

    
export const getGetProductModelsCodeQueryOptions = <TData = Awaited<ReturnType<typeof getProductModelsCode>>, TError = GetProductModelsCode401One | GetProductModelsCode404One | GetProductModelsCode406One>(code: string,
    params?: GetProductModelsCodeParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getProductModelsCode>>, TError, TData>>, fetch?: RequestInit}
) => {

const {query: queryOptions, fetch: fetchOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetProductModelsCodeQueryKey(code,params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getProductModelsCode>>> = ({ signal }) => getProductModelsCode(code,params, { signal, ...fetchOptions });

      

      

   return  { queryKey, queryFn, enabled: !!(code), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getProductModelsCode>>, TError, TData> & { queryKey: DataTag<QueryKey, TData> }
}

export type GetProductModelsCodeQueryResult = NonNullable<Awaited<ReturnType<typeof getProductModelsCode>>>
export type GetProductModelsCodeQueryError = GetProductModelsCode401One | GetProductModelsCode404One | GetProductModelsCode406One


export function useGetProductModelsCode<TData = Awaited<ReturnType<typeof getProductModelsCode>>, TError = GetProductModelsCode401One | GetProductModelsCode404One | GetProductModelsCode406One>(
 code: string,
    params: undefined |  GetProductModelsCodeParams, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getProductModelsCode>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getProductModelsCode>>,
          TError,
          TData
        > , 'initialData'
      >, fetch?: RequestInit}

  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetProductModelsCode<TData = Awaited<ReturnType<typeof getProductModelsCode>>, TError = GetProductModelsCode401One | GetProductModelsCode404One | GetProductModelsCode406One>(
 code: string,
    params?: GetProductModelsCodeParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getProductModelsCode>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getProductModelsCode>>,
          TError,
          TData
        > , 'initialData'
      >, fetch?: RequestInit}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetProductModelsCode<TData = Awaited<ReturnType<typeof getProductModelsCode>>, TError = GetProductModelsCode401One | GetProductModelsCode404One | GetProductModelsCode406One>(
 code: string,
    params?: GetProductModelsCodeParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getProductModelsCode>>, TError, TData>>, fetch?: RequestInit}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
/**
 * @summary Get a product model
 */

export function useGetProductModelsCode<TData = Awaited<ReturnType<typeof getProductModelsCode>>, TError = GetProductModelsCode401One | GetProductModelsCode404One | GetProductModelsCode406One>(
 code: string,
    params?: GetProductModelsCodeParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getProductModelsCode>>, TError, TData>>, fetch?: RequestInit}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> } {

  const queryOptions = getGetProductModelsCodeQueryOptions(code,params,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



/**
 * This endpoint allows you to update a given product model. Learn more about <a href="/documentation/update.html#update-behavior">Update behavior</a>. Note that if no product model exists for the given code, it creates it. In the Enterprise Edition PIM since the 2.3, permissions based on your user groups are applied to the product model you try to update. It may result in the creation of a draft if you only have edit rights through the product model's categories.
 * @summary Update/create a product model
 */
export type patchProductModelsCodeResponse = {
  data: void;
  status: number;
  headers: Headers;
}

export const getPatchProductModelsCodeUrl = (code: string,) => {


  return `/api/rest/v1/product-models/${code}`
}

export const patchProductModelsCode = async (code: string,
    patchProductModelsCodeBody: PatchProductModelsCodeBody, options?: RequestInit): Promise<patchProductModelsCodeResponse> => {
  
  const res = await fetch(getPatchProductModelsCodeUrl(code),
  {      
    ...options,
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      patchProductModelsCodeBody,)
  }

  )
  const data = await res.json()

  return { status: res.status, data, headers: res.headers }
}




export const getPatchProductModelsCodeMutationOptions = <TError = PatchProductModelsCode401One | PatchProductModelsCode415One | PatchProductModelsCode422One,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof patchProductModelsCode>>, TError,{code: string;data: PatchProductModelsCodeBody}, TContext>, fetch?: RequestInit}
): UseMutationOptions<Awaited<ReturnType<typeof patchProductModelsCode>>, TError,{code: string;data: PatchProductModelsCodeBody}, TContext> => {
const {mutation: mutationOptions, fetch: fetchOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof patchProductModelsCode>>, {code: string;data: PatchProductModelsCodeBody}> = (props) => {
          const {code,data} = props ?? {};

          return  patchProductModelsCode(code,data,fetchOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PatchProductModelsCodeMutationResult = NonNullable<Awaited<ReturnType<typeof patchProductModelsCode>>>
    export type PatchProductModelsCodeMutationBody = PatchProductModelsCodeBody
    export type PatchProductModelsCodeMutationError = PatchProductModelsCode401One | PatchProductModelsCode415One | PatchProductModelsCode422One

    /**
 * @summary Update/create a product model
 */
export const usePatchProductModelsCode = <TError = PatchProductModelsCode401One | PatchProductModelsCode415One | PatchProductModelsCode422One,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof patchProductModelsCode>>, TError,{code: string;data: PatchProductModelsCodeBody}, TContext>, fetch?: RequestInit}
): UseMutationResult<
        Awaited<ReturnType<typeof patchProductModelsCode>>,
        TError,
        {code: string;data: PatchProductModelsCodeBody},
        TContext
      > => {

      const mutationOptions = getPatchProductModelsCodeMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * This endpoint allows you to get the information about a given product model draft.
 * @summary Get a draft
 */
export type getProductModelDraftCodeResponse = {
  data: GetProductModelDraftCode200;
  status: number;
  headers: Headers;
}

export const getGetProductModelDraftCodeUrl = (code: string,) => {


  return `/api/rest/v1/product-models/${code}/draft`
}

export const getProductModelDraftCode = async (code: string, options?: RequestInit): Promise<getProductModelDraftCodeResponse> => {
  
  const res = await fetch(getGetProductModelDraftCodeUrl(code),
  {      
    ...options,
    method: 'GET'
    
    
  }

  )
  const data = await res.json()

  return { status: res.status, data, headers: res.headers }
}



export const getGetProductModelDraftCodeQueryKey = (code: string,) => {
    return [`/api/rest/v1/product-models/${code}/draft`] as const;
    }

    
export const getGetProductModelDraftCodeQueryOptions = <TData = Awaited<ReturnType<typeof getProductModelDraftCode>>, TError = GetProductModelDraftCode401One | GetProductModelDraftCode403One | GetProductModelDraftCode404One | GetProductModelDraftCode406One>(code: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getProductModelDraftCode>>, TError, TData>>, fetch?: RequestInit}
) => {

const {query: queryOptions, fetch: fetchOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetProductModelDraftCodeQueryKey(code);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getProductModelDraftCode>>> = ({ signal }) => getProductModelDraftCode(code, { signal, ...fetchOptions });

      

      

   return  { queryKey, queryFn, enabled: !!(code), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getProductModelDraftCode>>, TError, TData> & { queryKey: DataTag<QueryKey, TData> }
}

export type GetProductModelDraftCodeQueryResult = NonNullable<Awaited<ReturnType<typeof getProductModelDraftCode>>>
export type GetProductModelDraftCodeQueryError = GetProductModelDraftCode401One | GetProductModelDraftCode403One | GetProductModelDraftCode404One | GetProductModelDraftCode406One


export function useGetProductModelDraftCode<TData = Awaited<ReturnType<typeof getProductModelDraftCode>>, TError = GetProductModelDraftCode401One | GetProductModelDraftCode403One | GetProductModelDraftCode404One | GetProductModelDraftCode406One>(
 code: string, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getProductModelDraftCode>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getProductModelDraftCode>>,
          TError,
          TData
        > , 'initialData'
      >, fetch?: RequestInit}

  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetProductModelDraftCode<TData = Awaited<ReturnType<typeof getProductModelDraftCode>>, TError = GetProductModelDraftCode401One | GetProductModelDraftCode403One | GetProductModelDraftCode404One | GetProductModelDraftCode406One>(
 code: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getProductModelDraftCode>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getProductModelDraftCode>>,
          TError,
          TData
        > , 'initialData'
      >, fetch?: RequestInit}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetProductModelDraftCode<TData = Awaited<ReturnType<typeof getProductModelDraftCode>>, TError = GetProductModelDraftCode401One | GetProductModelDraftCode403One | GetProductModelDraftCode404One | GetProductModelDraftCode406One>(
 code: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getProductModelDraftCode>>, TError, TData>>, fetch?: RequestInit}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
/**
 * @summary Get a draft
 */

export function useGetProductModelDraftCode<TData = Awaited<ReturnType<typeof getProductModelDraftCode>>, TError = GetProductModelDraftCode401One | GetProductModelDraftCode403One | GetProductModelDraftCode404One | GetProductModelDraftCode406One>(
 code: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getProductModelDraftCode>>, TError, TData>>, fetch?: RequestInit}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> } {

  const queryOptions = getGetProductModelDraftCodeQueryOptions(code,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



/**
 * This endpoint allows you to submit a product model draft for approval.
 * @summary Submit a draft for approval
 */
export type postProductModelProposalResponse = {
  data: void;
  status: number;
  headers: Headers;
}

export const getPostProductModelProposalUrl = (code: string,) => {


  return `/api/rest/v1/product-models/${code}/proposal`
}

export const postProductModelProposal = async (code: string, options?: RequestInit): Promise<postProductModelProposalResponse> => {
  
  const res = await fetch(getPostProductModelProposalUrl(code),
  {      
    ...options,
    method: 'POST'
    
    
  }

  )
  const data = await res.json()

  return { status: res.status, data, headers: res.headers }
}




export const getPostProductModelProposalMutationOptions = <TError = PostProductModelProposal401One | PostProductModelProposal403One | PostProductModelProposal415One | PostProductModelProposal422One,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postProductModelProposal>>, TError,{code: string}, TContext>, fetch?: RequestInit}
): UseMutationOptions<Awaited<ReturnType<typeof postProductModelProposal>>, TError,{code: string}, TContext> => {
const {mutation: mutationOptions, fetch: fetchOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postProductModelProposal>>, {code: string}> = (props) => {
          const {code} = props ?? {};

          return  postProductModelProposal(code,fetchOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostProductModelProposalMutationResult = NonNullable<Awaited<ReturnType<typeof postProductModelProposal>>>
    
    export type PostProductModelProposalMutationError = PostProductModelProposal401One | PostProductModelProposal403One | PostProductModelProposal415One | PostProductModelProposal422One

    /**
 * @summary Submit a draft for approval
 */
export const usePostProductModelProposal = <TError = PostProductModelProposal401One | PostProductModelProposal403One | PostProductModelProposal415One | PostProductModelProposal422One,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postProductModelProposal>>, TError,{code: string}, TContext>, fetch?: RequestInit}
): UseMutationResult<
        Awaited<ReturnType<typeof postProductModelProposal>>,
        TError,
        {code: string},
        TContext
      > => {

      const mutationOptions = getPostProductModelProposalMutationOptions(options);

      return useMutation(mutationOptions);
    }
    