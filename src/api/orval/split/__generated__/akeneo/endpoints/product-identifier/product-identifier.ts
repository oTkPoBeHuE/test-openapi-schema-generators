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
  DeleteProductsCode401One
} from '../../model/deleteProductsCode401One'
import type {
  DeleteProductsCode403One
} from '../../model/deleteProductsCode403One'
import type {
  DeleteProductsCode404One
} from '../../model/deleteProductsCode404One'
import type {
  GetDraftCode200
} from '../../model/getDraftCode200'
import type {
  GetDraftCode401One
} from '../../model/getDraftCode401One'
import type {
  GetDraftCode403One
} from '../../model/getDraftCode403One'
import type {
  GetDraftCode404One
} from '../../model/getDraftCode404One'
import type {
  GetDraftCode406One
} from '../../model/getDraftCode406One'
import type {
  GetProducts200
} from '../../model/getProducts200'
import type {
  GetProducts401One
} from '../../model/getProducts401One'
import type {
  GetProducts403One
} from '../../model/getProducts403One'
import type {
  GetProducts406One
} from '../../model/getProducts406One'
import type {
  GetProducts422One
} from '../../model/getProducts422One'
import type {
  GetProductsCode200
} from '../../model/getProductsCode200'
import type {
  GetProductsCode401One
} from '../../model/getProductsCode401One'
import type {
  GetProductsCode403One
} from '../../model/getProductsCode403One'
import type {
  GetProductsCode404One
} from '../../model/getProductsCode404One'
import type {
  GetProductsCode406One
} from '../../model/getProductsCode406One'
import type {
  GetProductsCodeParams
} from '../../model/getProductsCodeParams'
import type {
  GetProductsParams
} from '../../model/getProductsParams'
import type {
  PatchProducts200One
} from '../../model/patchProducts200One'
import type {
  PatchProducts401One
} from '../../model/patchProducts401One'
import type {
  PatchProducts403One
} from '../../model/patchProducts403One'
import type {
  PatchProducts413One
} from '../../model/patchProducts413One'
import type {
  PatchProducts415One
} from '../../model/patchProducts415One'
import type {
  PatchProductsBody
} from '../../model/patchProductsBody'
import type {
  PatchProductsCode401One
} from '../../model/patchProductsCode401One'
import type {
  PatchProductsCode403One
} from '../../model/patchProductsCode403One'
import type {
  PatchProductsCode415One
} from '../../model/patchProductsCode415One'
import type {
  PatchProductsCode422One
} from '../../model/patchProductsCode422One'
import type {
  PatchProductsCodeBody
} from '../../model/patchProductsCodeBody'
import type {
  PostProducts400One
} from '../../model/postProducts400One'
import type {
  PostProducts401One
} from '../../model/postProducts401One'
import type {
  PostProducts403One
} from '../../model/postProducts403One'
import type {
  PostProducts415One
} from '../../model/postProducts415One'
import type {
  PostProducts422One
} from '../../model/postProducts422One'
import type {
  PostProductsBody
} from '../../model/postProductsBody'
import type {
  PostProposal401One
} from '../../model/postProposal401One'
import type {
  PostProposal403One
} from '../../model/postProposal403One'
import type {
  PostProposal415One
} from '../../model/postProposal415One'
import type {
  PostProposal422One
} from '../../model/postProposal422One'



/**
 * This endpoint allows you to get a list of products. Products are paginated and they can be filtered. In the Enterprise Edition, since the 2.0, permissions based on your user groups are applied to the set of products you request.
 * @summary Get list of products
 */
export type getProductsResponse = {
  data: GetProducts200;
  status: number;
  headers: Headers;
}

export const getGetProductsUrl = (params?: GetProductsParams,) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString())
    }
  });

  return normalizedParams.size ? `/api/rest/v1/products?${normalizedParams.toString()}` : `/api/rest/v1/products`
}

export const getProducts = async (params?: GetProductsParams, options?: RequestInit): Promise<getProductsResponse> => {
  
  const res = await fetch(getGetProductsUrl(params),
  {      
    ...options,
    method: 'GET'
    
    
  }

  )
  const data = await res.json()

  return { status: res.status, data, headers: res.headers }
}



export const getGetProductsQueryKey = (params?: GetProductsParams,) => {
    return [`/api/rest/v1/products`, ...(params ? [params]: [])] as const;
    }

    
export const getGetProductsQueryOptions = <TData = Awaited<ReturnType<typeof getProducts>>, TError = GetProducts401One | GetProducts403One | GetProducts406One | GetProducts422One>(params?: GetProductsParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getProducts>>, TError, TData>>, fetch?: RequestInit}
) => {

const {query: queryOptions, fetch: fetchOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetProductsQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getProducts>>> = ({ signal }) => getProducts(params, { signal, ...fetchOptions });

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getProducts>>, TError, TData> & { queryKey: DataTag<QueryKey, TData> }
}

export type GetProductsQueryResult = NonNullable<Awaited<ReturnType<typeof getProducts>>>
export type GetProductsQueryError = GetProducts401One | GetProducts403One | GetProducts406One | GetProducts422One


export function useGetProducts<TData = Awaited<ReturnType<typeof getProducts>>, TError = GetProducts401One | GetProducts403One | GetProducts406One | GetProducts422One>(
 params: undefined |  GetProductsParams, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getProducts>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getProducts>>,
          TError,
          TData
        > , 'initialData'
      >, fetch?: RequestInit}

  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetProducts<TData = Awaited<ReturnType<typeof getProducts>>, TError = GetProducts401One | GetProducts403One | GetProducts406One | GetProducts422One>(
 params?: GetProductsParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getProducts>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getProducts>>,
          TError,
          TData
        > , 'initialData'
      >, fetch?: RequestInit}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetProducts<TData = Awaited<ReturnType<typeof getProducts>>, TError = GetProducts401One | GetProducts403One | GetProducts406One | GetProducts422One>(
 params?: GetProductsParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getProducts>>, TError, TData>>, fetch?: RequestInit}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
/**
 * @summary Get list of products
 */

export function useGetProducts<TData = Awaited<ReturnType<typeof getProducts>>, TError = GetProducts401One | GetProducts403One | GetProducts406One | GetProducts422One>(
 params?: GetProductsParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getProducts>>, TError, TData>>, fetch?: RequestInit}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> } {

  const queryOptions = getGetProductsQueryOptions(params,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



/**
 * This endpoint allows you to update and/or create several products at once. Learn more about <a href="/documentation/update.html#update-behavior">Update behavior</a>. Note that if no product exists for the given identifier, it creates it. In the Enterprise Edition, since the v2.0, permissions based on your user groups are applied to the products you try to update. It may result in the creation of drafts if you only have edit rights through the product's categories.
 * @summary Update/create several products
 */
export type patchProductsResponse = {
  data: PatchProducts200One;
  status: number;
  headers: Headers;
}

export const getPatchProductsUrl = () => {


  return `/api/rest/v1/products`
}

export const patchProducts = async (patchProductsBody: PatchProductsBody, options?: RequestInit): Promise<patchProductsResponse> => {
  
  const res = await fetch(getPatchProductsUrl(),
  {      
    ...options,
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      patchProductsBody,)
  }

  )
  const data = await res.json()

  return { status: res.status, data, headers: res.headers }
}




export const getPatchProductsMutationOptions = <TError = PatchProducts401One | PatchProducts403One | PatchProducts413One | PatchProducts415One,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof patchProducts>>, TError,{data: PatchProductsBody}, TContext>, fetch?: RequestInit}
): UseMutationOptions<Awaited<ReturnType<typeof patchProducts>>, TError,{data: PatchProductsBody}, TContext> => {
const {mutation: mutationOptions, fetch: fetchOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof patchProducts>>, {data: PatchProductsBody}> = (props) => {
          const {data} = props ?? {};

          return  patchProducts(data,fetchOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PatchProductsMutationResult = NonNullable<Awaited<ReturnType<typeof patchProducts>>>
    export type PatchProductsMutationBody = PatchProductsBody
    export type PatchProductsMutationError = PatchProducts401One | PatchProducts403One | PatchProducts413One | PatchProducts415One

    /**
 * @summary Update/create several products
 */
export const usePatchProducts = <TError = PatchProducts401One | PatchProducts403One | PatchProducts413One | PatchProducts415One,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof patchProducts>>, TError,{data: PatchProductsBody}, TContext>, fetch?: RequestInit}
): UseMutationResult<
        Awaited<ReturnType<typeof patchProducts>>,
        TError,
        {data: PatchProductsBody},
        TContext
      > => {

      const mutationOptions = getPatchProductsMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * This endpoint allows you to create a new product. In the Enterprise Edition, since the v2.0, permissions based on your user groups are applied to the product you try to create.
 * @summary Create a new product
 */
export type postProductsResponse = {
  data: void;
  status: number;
  headers: Headers;
}

export const getPostProductsUrl = () => {


  return `/api/rest/v1/products`
}

export const postProducts = async (postProductsBody: PostProductsBody, options?: RequestInit): Promise<postProductsResponse> => {
  
  const res = await fetch(getPostProductsUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      postProductsBody,)
  }

  )
  const data = await res.json()

  return { status: res.status, data, headers: res.headers }
}




export const getPostProductsMutationOptions = <TError = PostProducts400One | PostProducts401One | PostProducts403One | PostProducts415One | PostProducts422One,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postProducts>>, TError,{data: PostProductsBody}, TContext>, fetch?: RequestInit}
): UseMutationOptions<Awaited<ReturnType<typeof postProducts>>, TError,{data: PostProductsBody}, TContext> => {
const {mutation: mutationOptions, fetch: fetchOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postProducts>>, {data: PostProductsBody}> = (props) => {
          const {data} = props ?? {};

          return  postProducts(data,fetchOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostProductsMutationResult = NonNullable<Awaited<ReturnType<typeof postProducts>>>
    export type PostProductsMutationBody = PostProductsBody
    export type PostProductsMutationError = PostProducts400One | PostProducts401One | PostProducts403One | PostProducts415One | PostProducts422One

    /**
 * @summary Create a new product
 */
export const usePostProducts = <TError = PostProducts400One | PostProducts401One | PostProducts403One | PostProducts415One | PostProducts422One,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postProducts>>, TError,{data: PostProductsBody}, TContext>, fetch?: RequestInit}
): UseMutationResult<
        Awaited<ReturnType<typeof postProducts>>,
        TError,
        {data: PostProductsBody},
        TContext
      > => {

      const mutationOptions = getPostProductsMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * This endpoint allows you to delete a given product. In the Enterprise Edition, since the 2.0, permissions based on your user groups are applied to the product you try to delete.
 * @summary Delete a product
 */
export type deleteProductsCodeResponse = {
  data: void;
  status: number;
  headers: Headers;
}

export const getDeleteProductsCodeUrl = (code: string,) => {


  return `/api/rest/v1/products/${code}`
}

export const deleteProductsCode = async (code: string, options?: RequestInit): Promise<deleteProductsCodeResponse> => {
  
  const res = await fetch(getDeleteProductsCodeUrl(code),
  {      
    ...options,
    method: 'DELETE'
    
    
  }

  )
  const data = await res.json()

  return { status: res.status, data, headers: res.headers }
}




export const getDeleteProductsCodeMutationOptions = <TError = DeleteProductsCode401One | DeleteProductsCode403One | DeleteProductsCode404One,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteProductsCode>>, TError,{code: string}, TContext>, fetch?: RequestInit}
): UseMutationOptions<Awaited<ReturnType<typeof deleteProductsCode>>, TError,{code: string}, TContext> => {
const {mutation: mutationOptions, fetch: fetchOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof deleteProductsCode>>, {code: string}> = (props) => {
          const {code} = props ?? {};

          return  deleteProductsCode(code,fetchOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type DeleteProductsCodeMutationResult = NonNullable<Awaited<ReturnType<typeof deleteProductsCode>>>
    
    export type DeleteProductsCodeMutationError = DeleteProductsCode401One | DeleteProductsCode403One | DeleteProductsCode404One

    /**
 * @summary Delete a product
 */
export const useDeleteProductsCode = <TError = DeleteProductsCode401One | DeleteProductsCode403One | DeleteProductsCode404One,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteProductsCode>>, TError,{code: string}, TContext>, fetch?: RequestInit}
): UseMutationResult<
        Awaited<ReturnType<typeof deleteProductsCode>>,
        TError,
        {code: string},
        TContext
      > => {

      const mutationOptions = getDeleteProductsCodeMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * This endpoint allows you to get the information about a given product. In the Entreprise Edition, since the v2.0, permissions based on your user groups are applied to the product you request.
 * @summary Get a product
 */
export type getProductsCodeResponse = {
  data: GetProductsCode200;
  status: number;
  headers: Headers;
}

export const getGetProductsCodeUrl = (code: string,
    params?: GetProductsCodeParams,) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString())
    }
  });

  return normalizedParams.size ? `/api/rest/v1/products/${code}?${normalizedParams.toString()}` : `/api/rest/v1/products/${code}`
}

export const getProductsCode = async (code: string,
    params?: GetProductsCodeParams, options?: RequestInit): Promise<getProductsCodeResponse> => {
  
  const res = await fetch(getGetProductsCodeUrl(code,params),
  {      
    ...options,
    method: 'GET'
    
    
  }

  )
  const data = await res.json()

  return { status: res.status, data, headers: res.headers }
}



export const getGetProductsCodeQueryKey = (code: string,
    params?: GetProductsCodeParams,) => {
    return [`/api/rest/v1/products/${code}`, ...(params ? [params]: [])] as const;
    }

    
export const getGetProductsCodeQueryOptions = <TData = Awaited<ReturnType<typeof getProductsCode>>, TError = GetProductsCode401One | GetProductsCode403One | GetProductsCode404One | GetProductsCode406One>(code: string,
    params?: GetProductsCodeParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getProductsCode>>, TError, TData>>, fetch?: RequestInit}
) => {

const {query: queryOptions, fetch: fetchOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetProductsCodeQueryKey(code,params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getProductsCode>>> = ({ signal }) => getProductsCode(code,params, { signal, ...fetchOptions });

      

      

   return  { queryKey, queryFn, enabled: !!(code), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getProductsCode>>, TError, TData> & { queryKey: DataTag<QueryKey, TData> }
}

export type GetProductsCodeQueryResult = NonNullable<Awaited<ReturnType<typeof getProductsCode>>>
export type GetProductsCodeQueryError = GetProductsCode401One | GetProductsCode403One | GetProductsCode404One | GetProductsCode406One


export function useGetProductsCode<TData = Awaited<ReturnType<typeof getProductsCode>>, TError = GetProductsCode401One | GetProductsCode403One | GetProductsCode404One | GetProductsCode406One>(
 code: string,
    params: undefined |  GetProductsCodeParams, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getProductsCode>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getProductsCode>>,
          TError,
          TData
        > , 'initialData'
      >, fetch?: RequestInit}

  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetProductsCode<TData = Awaited<ReturnType<typeof getProductsCode>>, TError = GetProductsCode401One | GetProductsCode403One | GetProductsCode404One | GetProductsCode406One>(
 code: string,
    params?: GetProductsCodeParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getProductsCode>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getProductsCode>>,
          TError,
          TData
        > , 'initialData'
      >, fetch?: RequestInit}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetProductsCode<TData = Awaited<ReturnType<typeof getProductsCode>>, TError = GetProductsCode401One | GetProductsCode403One | GetProductsCode404One | GetProductsCode406One>(
 code: string,
    params?: GetProductsCodeParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getProductsCode>>, TError, TData>>, fetch?: RequestInit}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
/**
 * @summary Get a product
 */

export function useGetProductsCode<TData = Awaited<ReturnType<typeof getProductsCode>>, TError = GetProductsCode401One | GetProductsCode403One | GetProductsCode404One | GetProductsCode406One>(
 code: string,
    params?: GetProductsCodeParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getProductsCode>>, TError, TData>>, fetch?: RequestInit}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> } {

  const queryOptions = getGetProductsCodeQueryOptions(code,params,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



/**
 * This endpoint allows you to update a given product. Learn more about <a href="/documentation/update.html#update-behavior">Update behavior</a>. Note that if no product exists for the given identifier, it creates it. In the Entreprise Edition, since the v2.0, permissions based on your user groups are applied to the product you try to update. It may result in the creation of a draft if you only have edit rights through the product's categories.
 * @summary Update/create a product
 */
export type patchProductsCodeResponse = {
  data: void;
  status: number;
  headers: Headers;
}

export const getPatchProductsCodeUrl = (code: string,) => {


  return `/api/rest/v1/products/${code}`
}

export const patchProductsCode = async (code: string,
    patchProductsCodeBody: PatchProductsCodeBody, options?: RequestInit): Promise<patchProductsCodeResponse> => {
  
  const res = await fetch(getPatchProductsCodeUrl(code),
  {      
    ...options,
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      patchProductsCodeBody,)
  }

  )
  const data = await res.json()

  return { status: res.status, data, headers: res.headers }
}




export const getPatchProductsCodeMutationOptions = <TError = PatchProductsCode401One | PatchProductsCode403One | PatchProductsCode415One | PatchProductsCode422One,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof patchProductsCode>>, TError,{code: string;data: PatchProductsCodeBody}, TContext>, fetch?: RequestInit}
): UseMutationOptions<Awaited<ReturnType<typeof patchProductsCode>>, TError,{code: string;data: PatchProductsCodeBody}, TContext> => {
const {mutation: mutationOptions, fetch: fetchOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof patchProductsCode>>, {code: string;data: PatchProductsCodeBody}> = (props) => {
          const {code,data} = props ?? {};

          return  patchProductsCode(code,data,fetchOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PatchProductsCodeMutationResult = NonNullable<Awaited<ReturnType<typeof patchProductsCode>>>
    export type PatchProductsCodeMutationBody = PatchProductsCodeBody
    export type PatchProductsCodeMutationError = PatchProductsCode401One | PatchProductsCode403One | PatchProductsCode415One | PatchProductsCode422One

    /**
 * @summary Update/create a product
 */
export const usePatchProductsCode = <TError = PatchProductsCode401One | PatchProductsCode403One | PatchProductsCode415One | PatchProductsCode422One,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof patchProductsCode>>, TError,{code: string;data: PatchProductsCodeBody}, TContext>, fetch?: RequestInit}
): UseMutationResult<
        Awaited<ReturnType<typeof patchProductsCode>>,
        TError,
        {code: string;data: PatchProductsCodeBody},
        TContext
      > => {

      const mutationOptions = getPatchProductsCodeMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * This endpoint allows you to get the information about a given draft.
 * @summary Get a draft
 */
export type getDraftCodeResponse = {
  data: GetDraftCode200;
  status: number;
  headers: Headers;
}

export const getGetDraftCodeUrl = (code: string,) => {


  return `/api/rest/v1/products/${code}/draft`
}

export const getDraftCode = async (code: string, options?: RequestInit): Promise<getDraftCodeResponse> => {
  
  const res = await fetch(getGetDraftCodeUrl(code),
  {      
    ...options,
    method: 'GET'
    
    
  }

  )
  const data = await res.json()

  return { status: res.status, data, headers: res.headers }
}



export const getGetDraftCodeQueryKey = (code: string,) => {
    return [`/api/rest/v1/products/${code}/draft`] as const;
    }

    
export const getGetDraftCodeQueryOptions = <TData = Awaited<ReturnType<typeof getDraftCode>>, TError = GetDraftCode401One | GetDraftCode403One | GetDraftCode404One | GetDraftCode406One>(code: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getDraftCode>>, TError, TData>>, fetch?: RequestInit}
) => {

const {query: queryOptions, fetch: fetchOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetDraftCodeQueryKey(code);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getDraftCode>>> = ({ signal }) => getDraftCode(code, { signal, ...fetchOptions });

      

      

   return  { queryKey, queryFn, enabled: !!(code), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getDraftCode>>, TError, TData> & { queryKey: DataTag<QueryKey, TData> }
}

export type GetDraftCodeQueryResult = NonNullable<Awaited<ReturnType<typeof getDraftCode>>>
export type GetDraftCodeQueryError = GetDraftCode401One | GetDraftCode403One | GetDraftCode404One | GetDraftCode406One


export function useGetDraftCode<TData = Awaited<ReturnType<typeof getDraftCode>>, TError = GetDraftCode401One | GetDraftCode403One | GetDraftCode404One | GetDraftCode406One>(
 code: string, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getDraftCode>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getDraftCode>>,
          TError,
          TData
        > , 'initialData'
      >, fetch?: RequestInit}

  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetDraftCode<TData = Awaited<ReturnType<typeof getDraftCode>>, TError = GetDraftCode401One | GetDraftCode403One | GetDraftCode404One | GetDraftCode406One>(
 code: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getDraftCode>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getDraftCode>>,
          TError,
          TData
        > , 'initialData'
      >, fetch?: RequestInit}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetDraftCode<TData = Awaited<ReturnType<typeof getDraftCode>>, TError = GetDraftCode401One | GetDraftCode403One | GetDraftCode404One | GetDraftCode406One>(
 code: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getDraftCode>>, TError, TData>>, fetch?: RequestInit}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
/**
 * @summary Get a draft
 */

export function useGetDraftCode<TData = Awaited<ReturnType<typeof getDraftCode>>, TError = GetDraftCode401One | GetDraftCode403One | GetDraftCode404One | GetDraftCode406One>(
 code: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getDraftCode>>, TError, TData>>, fetch?: RequestInit}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> } {

  const queryOptions = getGetDraftCodeQueryOptions(code,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



/**
 * This endpoint allows you to submit a draft for approval.
 * @summary Submit a draft for approval
 */
export type postProposalResponse = {
  data: void;
  status: number;
  headers: Headers;
}

export const getPostProposalUrl = (code: string,) => {


  return `/api/rest/v1/products/${code}/proposal`
}

export const postProposal = async (code: string, options?: RequestInit): Promise<postProposalResponse> => {
  
  const res = await fetch(getPostProposalUrl(code),
  {      
    ...options,
    method: 'POST'
    
    
  }

  )
  const data = await res.json()

  return { status: res.status, data, headers: res.headers }
}




export const getPostProposalMutationOptions = <TError = PostProposal401One | PostProposal403One | PostProposal415One | PostProposal422One,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postProposal>>, TError,{code: string}, TContext>, fetch?: RequestInit}
): UseMutationOptions<Awaited<ReturnType<typeof postProposal>>, TError,{code: string}, TContext> => {
const {mutation: mutationOptions, fetch: fetchOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postProposal>>, {code: string}> = (props) => {
          const {code} = props ?? {};

          return  postProposal(code,fetchOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostProposalMutationResult = NonNullable<Awaited<ReturnType<typeof postProposal>>>
    
    export type PostProposalMutationError = PostProposal401One | PostProposal403One | PostProposal415One | PostProposal422One

    /**
 * @summary Submit a draft for approval
 */
export const usePostProposal = <TError = PostProposal401One | PostProposal403One | PostProposal415One | PostProposal422One,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postProposal>>, TError,{code: string}, TContext>, fetch?: RequestInit}
): UseMutationResult<
        Awaited<ReturnType<typeof postProposal>>,
        TError,
        {code: string},
        TContext
      > => {

      const mutationOptions = getPostProposalMutationOptions(options);

      return useMutation(mutationOptions);
    }
    