/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Swagger Petstore - OpenAPI 3.0
 * This is a sample Pet Store Server based on the OpenAPI 3.0 specification.  You can find out more about
Swagger at [http://swagger.io](http://swagger.io). In the third iteration of the pet store, we've switched to the design first approach!
You can now help us improve the API whether it's by making changes to the definition itself or to the code.
That way, with time, we can improve the API in general, and expose some of the new features in OAS3.

Some useful links:
- [The Pet Store repository](https://github.com/swagger-api/swagger-petstore)
- [The source API definition for the Pet Store](https://github.com/swagger-api/swagger-petstore/blob/master/src/main/resources/openapi.yaml)
 * OpenAPI spec version: 1.0.19
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
  ApiResponse
} from '../../model/apiResponse'
import type {
  DeletePetHeaders
} from '../../model/deletePetHeaders'
import type {
  FindPetsByStatusParams
} from '../../model/findPetsByStatusParams'
import type {
  FindPetsByTagsParams
} from '../../model/findPetsByTagsParams'
import type {
  Pet
} from '../../model/pet'
import type {
  UpdatePetWithFormParams
} from '../../model/updatePetWithFormParams'
import type {
  UploadFileParams
} from '../../model/uploadFileParams'



/**
 * Update an existing pet by Id
 * @summary Update an existing pet
 */
export type updatePetResponse = {
  data: Pet;
  status: number;
  headers: Headers;
}

export const getUpdatePetUrl = () => {


  return `https://petstore3.swagger.io/api/v3/pet`
}

export const updatePet = async (pet: Pet, options?: RequestInit): Promise<updatePetResponse> => {
  
  const res = await fetch(getUpdatePetUrl(),
  {      
    ...options,
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      pet,)
  }

  )
  const data = await res.json()

  return { status: res.status, data, headers: res.headers }
}




export const getUpdatePetMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof updatePet>>, TError,{data: Pet}, TContext>, fetch?: RequestInit}
): UseMutationOptions<Awaited<ReturnType<typeof updatePet>>, TError,{data: Pet}, TContext> => {
const {mutation: mutationOptions, fetch: fetchOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof updatePet>>, {data: Pet}> = (props) => {
          const {data} = props ?? {};

          return  updatePet(data,fetchOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type UpdatePetMutationResult = NonNullable<Awaited<ReturnType<typeof updatePet>>>
    export type UpdatePetMutationBody = Pet
    export type UpdatePetMutationError = void

    /**
 * @summary Update an existing pet
 */
export const useUpdatePet = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof updatePet>>, TError,{data: Pet}, TContext>, fetch?: RequestInit}
): UseMutationResult<
        Awaited<ReturnType<typeof updatePet>>,
        TError,
        {data: Pet},
        TContext
      > => {

      const mutationOptions = getUpdatePetMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * Add a new pet to the store
 * @summary Add a new pet to the store
 */
export type addPetResponse = {
  data: Pet;
  status: number;
  headers: Headers;
}

export const getAddPetUrl = () => {


  return `https://petstore3.swagger.io/api/v3/pet`
}

export const addPet = async (pet: Pet, options?: RequestInit): Promise<addPetResponse> => {
  
  const res = await fetch(getAddPetUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      pet,)
  }

  )
  const data = await res.json()

  return { status: res.status, data, headers: res.headers }
}




export const getAddPetMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof addPet>>, TError,{data: Pet}, TContext>, fetch?: RequestInit}
): UseMutationOptions<Awaited<ReturnType<typeof addPet>>, TError,{data: Pet}, TContext> => {
const {mutation: mutationOptions, fetch: fetchOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof addPet>>, {data: Pet}> = (props) => {
          const {data} = props ?? {};

          return  addPet(data,fetchOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type AddPetMutationResult = NonNullable<Awaited<ReturnType<typeof addPet>>>
    export type AddPetMutationBody = Pet
    export type AddPetMutationError = void

    /**
 * @summary Add a new pet to the store
 */
export const useAddPet = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof addPet>>, TError,{data: Pet}, TContext>, fetch?: RequestInit}
): UseMutationResult<
        Awaited<ReturnType<typeof addPet>>,
        TError,
        {data: Pet},
        TContext
      > => {

      const mutationOptions = getAddPetMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * Multiple status values can be provided with comma separated strings
 * @summary Finds Pets by status
 */
export type findPetsByStatusResponse = {
  data: Pet[];
  status: number;
  headers: Headers;
}

export const getFindPetsByStatusUrl = (params?: FindPetsByStatusParams,) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    const explodeParameters = ["status"];
      
    if (value instanceof Array && explodeParameters.includes(key)) {
      value.forEach((v) => normalizedParams.append(key, v === null ? 'null' : v.toString()));
      return;
    }
      
    
  });

  return normalizedParams.size ? `https://petstore3.swagger.io/api/v3/pet/findByStatus?${normalizedParams.toString()}` : `https://petstore3.swagger.io/api/v3/pet/findByStatus`
}

export const findPetsByStatus = async (params?: FindPetsByStatusParams, options?: RequestInit): Promise<findPetsByStatusResponse> => {
  
  const res = await fetch(getFindPetsByStatusUrl(params),
  {      
    ...options,
    method: 'GET'
    
    
  }

  )
  const data = await res.json()

  return { status: res.status, data, headers: res.headers }
}



export const getFindPetsByStatusQueryKey = (params?: FindPetsByStatusParams,) => {
    return [`https://petstore3.swagger.io/api/v3/pet/findByStatus`, ...(params ? [params]: [])] as const;
    }

    
export const getFindPetsByStatusQueryOptions = <TData = Awaited<ReturnType<typeof findPetsByStatus>>, TError = void>(params?: FindPetsByStatusParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof findPetsByStatus>>, TError, TData>>, fetch?: RequestInit}
) => {

const {query: queryOptions, fetch: fetchOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getFindPetsByStatusQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof findPetsByStatus>>> = ({ signal }) => findPetsByStatus(params, { signal, ...fetchOptions });

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof findPetsByStatus>>, TError, TData> & { queryKey: DataTag<QueryKey, TData> }
}

export type FindPetsByStatusQueryResult = NonNullable<Awaited<ReturnType<typeof findPetsByStatus>>>
export type FindPetsByStatusQueryError = void


export function useFindPetsByStatus<TData = Awaited<ReturnType<typeof findPetsByStatus>>, TError = void>(
 params: undefined |  FindPetsByStatusParams, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof findPetsByStatus>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof findPetsByStatus>>,
          TError,
          TData
        > , 'initialData'
      >, fetch?: RequestInit}

  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useFindPetsByStatus<TData = Awaited<ReturnType<typeof findPetsByStatus>>, TError = void>(
 params?: FindPetsByStatusParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof findPetsByStatus>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof findPetsByStatus>>,
          TError,
          TData
        > , 'initialData'
      >, fetch?: RequestInit}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useFindPetsByStatus<TData = Awaited<ReturnType<typeof findPetsByStatus>>, TError = void>(
 params?: FindPetsByStatusParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof findPetsByStatus>>, TError, TData>>, fetch?: RequestInit}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
/**
 * @summary Finds Pets by status
 */

export function useFindPetsByStatus<TData = Awaited<ReturnType<typeof findPetsByStatus>>, TError = void>(
 params?: FindPetsByStatusParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof findPetsByStatus>>, TError, TData>>, fetch?: RequestInit}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> } {

  const queryOptions = getFindPetsByStatusQueryOptions(params,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



/**
 * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
 * @summary Finds Pets by tags
 */
export type findPetsByTagsResponse = {
  data: Pet[];
  status: number;
  headers: Headers;
}

export const getFindPetsByTagsUrl = (params?: FindPetsByTagsParams,) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    const explodeParameters = ["tags"];
      
    if (value instanceof Array && explodeParameters.includes(key)) {
      value.forEach((v) => normalizedParams.append(key, v === null ? 'null' : v.toString()));
      return;
    }
      
    
  });

  return normalizedParams.size ? `https://petstore3.swagger.io/api/v3/pet/findByTags?${normalizedParams.toString()}` : `https://petstore3.swagger.io/api/v3/pet/findByTags`
}

export const findPetsByTags = async (params?: FindPetsByTagsParams, options?: RequestInit): Promise<findPetsByTagsResponse> => {
  
  const res = await fetch(getFindPetsByTagsUrl(params),
  {      
    ...options,
    method: 'GET'
    
    
  }

  )
  const data = await res.json()

  return { status: res.status, data, headers: res.headers }
}



export const getFindPetsByTagsQueryKey = (params?: FindPetsByTagsParams,) => {
    return [`https://petstore3.swagger.io/api/v3/pet/findByTags`, ...(params ? [params]: [])] as const;
    }

    
export const getFindPetsByTagsQueryOptions = <TData = Awaited<ReturnType<typeof findPetsByTags>>, TError = void>(params?: FindPetsByTagsParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof findPetsByTags>>, TError, TData>>, fetch?: RequestInit}
) => {

const {query: queryOptions, fetch: fetchOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getFindPetsByTagsQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof findPetsByTags>>> = ({ signal }) => findPetsByTags(params, { signal, ...fetchOptions });

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof findPetsByTags>>, TError, TData> & { queryKey: DataTag<QueryKey, TData> }
}

export type FindPetsByTagsQueryResult = NonNullable<Awaited<ReturnType<typeof findPetsByTags>>>
export type FindPetsByTagsQueryError = void


export function useFindPetsByTags<TData = Awaited<ReturnType<typeof findPetsByTags>>, TError = void>(
 params: undefined |  FindPetsByTagsParams, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof findPetsByTags>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof findPetsByTags>>,
          TError,
          TData
        > , 'initialData'
      >, fetch?: RequestInit}

  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useFindPetsByTags<TData = Awaited<ReturnType<typeof findPetsByTags>>, TError = void>(
 params?: FindPetsByTagsParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof findPetsByTags>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof findPetsByTags>>,
          TError,
          TData
        > , 'initialData'
      >, fetch?: RequestInit}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useFindPetsByTags<TData = Awaited<ReturnType<typeof findPetsByTags>>, TError = void>(
 params?: FindPetsByTagsParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof findPetsByTags>>, TError, TData>>, fetch?: RequestInit}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
/**
 * @summary Finds Pets by tags
 */

export function useFindPetsByTags<TData = Awaited<ReturnType<typeof findPetsByTags>>, TError = void>(
 params?: FindPetsByTagsParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof findPetsByTags>>, TError, TData>>, fetch?: RequestInit}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> } {

  const queryOptions = getFindPetsByTagsQueryOptions(params,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



/**
 * Returns a single pet
 * @summary Find pet by ID
 */
export type getPetByIdResponse = {
  data: Pet;
  status: number;
  headers: Headers;
}

export const getGetPetByIdUrl = (petId: number,) => {


  return `https://petstore3.swagger.io/api/v3/pet/${petId}`
}

export const getPetById = async (petId: number, options?: RequestInit): Promise<getPetByIdResponse> => {
  
  const res = await fetch(getGetPetByIdUrl(petId),
  {      
    ...options,
    method: 'GET'
    
    
  }

  )
  const data = await res.json()

  return { status: res.status, data, headers: res.headers }
}



export const getGetPetByIdQueryKey = (petId: number,) => {
    return [`https://petstore3.swagger.io/api/v3/pet/${petId}`] as const;
    }

    
export const getGetPetByIdQueryOptions = <TData = Awaited<ReturnType<typeof getPetById>>, TError = void>(petId: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getPetById>>, TError, TData>>, fetch?: RequestInit}
) => {

const {query: queryOptions, fetch: fetchOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetPetByIdQueryKey(petId);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getPetById>>> = ({ signal }) => getPetById(petId, { signal, ...fetchOptions });

      

      

   return  { queryKey, queryFn, enabled: !!(petId), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getPetById>>, TError, TData> & { queryKey: DataTag<QueryKey, TData> }
}

export type GetPetByIdQueryResult = NonNullable<Awaited<ReturnType<typeof getPetById>>>
export type GetPetByIdQueryError = void


export function useGetPetById<TData = Awaited<ReturnType<typeof getPetById>>, TError = void>(
 petId: number, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getPetById>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getPetById>>,
          TError,
          TData
        > , 'initialData'
      >, fetch?: RequestInit}

  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetPetById<TData = Awaited<ReturnType<typeof getPetById>>, TError = void>(
 petId: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getPetById>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getPetById>>,
          TError,
          TData
        > , 'initialData'
      >, fetch?: RequestInit}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetPetById<TData = Awaited<ReturnType<typeof getPetById>>, TError = void>(
 petId: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getPetById>>, TError, TData>>, fetch?: RequestInit}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
/**
 * @summary Find pet by ID
 */

export function useGetPetById<TData = Awaited<ReturnType<typeof getPetById>>, TError = void>(
 petId: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getPetById>>, TError, TData>>, fetch?: RequestInit}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> } {

  const queryOptions = getGetPetByIdQueryOptions(petId,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



/**
 * @summary Updates a pet in the store with form data
 */
export type updatePetWithFormResponse = {
  data: unknown;
  status: number;
  headers: Headers;
}

export const getUpdatePetWithFormUrl = (petId: number,
    params?: UpdatePetWithFormParams,) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString())
    }
  });

  return normalizedParams.size ? `https://petstore3.swagger.io/api/v3/pet/${petId}?${normalizedParams.toString()}` : `https://petstore3.swagger.io/api/v3/pet/${petId}`
}

export const updatePetWithForm = async (petId: number,
    params?: UpdatePetWithFormParams, options?: RequestInit): Promise<updatePetWithFormResponse> => {
  
  const res = await fetch(getUpdatePetWithFormUrl(petId,params),
  {      
    ...options,
    method: 'POST'
    
    
  }

  )
  const data = await res.json()

  return { status: res.status, data, headers: res.headers }
}




export const getUpdatePetWithFormMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof updatePetWithForm>>, TError,{petId: number;params?: UpdatePetWithFormParams}, TContext>, fetch?: RequestInit}
): UseMutationOptions<Awaited<ReturnType<typeof updatePetWithForm>>, TError,{petId: number;params?: UpdatePetWithFormParams}, TContext> => {
const {mutation: mutationOptions, fetch: fetchOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof updatePetWithForm>>, {petId: number;params?: UpdatePetWithFormParams}> = (props) => {
          const {petId,params} = props ?? {};

          return  updatePetWithForm(petId,params,fetchOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type UpdatePetWithFormMutationResult = NonNullable<Awaited<ReturnType<typeof updatePetWithForm>>>
    
    export type UpdatePetWithFormMutationError = void

    /**
 * @summary Updates a pet in the store with form data
 */
export const useUpdatePetWithForm = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof updatePetWithForm>>, TError,{petId: number;params?: UpdatePetWithFormParams}, TContext>, fetch?: RequestInit}
): UseMutationResult<
        Awaited<ReturnType<typeof updatePetWithForm>>,
        TError,
        {petId: number;params?: UpdatePetWithFormParams},
        TContext
      > => {

      const mutationOptions = getUpdatePetWithFormMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * @summary Deletes a pet
 */
export type deletePetResponse = {
  data: unknown;
  status: number;
  headers: Headers;
}

export const getDeletePetUrl = (petId: number,) => {


  return `https://petstore3.swagger.io/api/v3/pet/${petId}`
}

export const deletePet = async (petId: number,
    headers?: DeletePetHeaders, options?: RequestInit): Promise<deletePetResponse> => {
  
  const res = await fetch(getDeletePetUrl(petId),
  {      
    ...options,
    method: 'DELETE'
    
    
  }

  )
  const data = await res.json()

  return { status: res.status, data, headers: res.headers }
}




export const getDeletePetMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deletePet>>, TError,{petId: number;headers?: DeletePetHeaders}, TContext>, fetch?: RequestInit}
): UseMutationOptions<Awaited<ReturnType<typeof deletePet>>, TError,{petId: number;headers?: DeletePetHeaders}, TContext> => {
const {mutation: mutationOptions, fetch: fetchOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof deletePet>>, {petId: number;headers?: DeletePetHeaders}> = (props) => {
          const {petId,headers} = props ?? {};

          return  deletePet(petId,headers,fetchOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type DeletePetMutationResult = NonNullable<Awaited<ReturnType<typeof deletePet>>>
    
    export type DeletePetMutationError = void

    /**
 * @summary Deletes a pet
 */
export const useDeletePet = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deletePet>>, TError,{petId: number;headers?: DeletePetHeaders}, TContext>, fetch?: RequestInit}
): UseMutationResult<
        Awaited<ReturnType<typeof deletePet>>,
        TError,
        {petId: number;headers?: DeletePetHeaders},
        TContext
      > => {

      const mutationOptions = getDeletePetMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * @summary uploads an image
 */
export type uploadFileResponse = {
  data: ApiResponse;
  status: number;
  headers: Headers;
}

export const getUploadFileUrl = (petId: number,
    params?: UploadFileParams,) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString())
    }
  });

  return normalizedParams.size ? `https://petstore3.swagger.io/api/v3/pet/${petId}/uploadImage?${normalizedParams.toString()}` : `https://petstore3.swagger.io/api/v3/pet/${petId}/uploadImage`
}

export const uploadFile = async (petId: number,
    uploadFileBody: Blob,
    params?: UploadFileParams, options?: RequestInit): Promise<uploadFileResponse> => {
  
  const res = await fetch(getUploadFileUrl(petId,params),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/octet-stream', ...options?.headers },
    body: JSON.stringify(
      uploadFileBody,)
  }

  )
  const data = await res.json()

  return { status: res.status, data, headers: res.headers }
}




export const getUploadFileMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof uploadFile>>, TError,{petId: number;data: Blob;params?: UploadFileParams}, TContext>, fetch?: RequestInit}
): UseMutationOptions<Awaited<ReturnType<typeof uploadFile>>, TError,{petId: number;data: Blob;params?: UploadFileParams}, TContext> => {
const {mutation: mutationOptions, fetch: fetchOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof uploadFile>>, {petId: number;data: Blob;params?: UploadFileParams}> = (props) => {
          const {petId,data,params} = props ?? {};

          return  uploadFile(petId,data,params,fetchOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type UploadFileMutationResult = NonNullable<Awaited<ReturnType<typeof uploadFile>>>
    export type UploadFileMutationBody = Blob
    export type UploadFileMutationError = unknown

    /**
 * @summary uploads an image
 */
export const useUploadFile = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof uploadFile>>, TError,{petId: number;data: Blob;params?: UploadFileParams}, TContext>, fetch?: RequestInit}
): UseMutationResult<
        Awaited<ReturnType<typeof uploadFile>>,
        TError,
        {petId: number;data: Blob;params?: UploadFileParams},
        TContext
      > => {

      const mutationOptions = getUploadFileMutationOptions(options);

      return useMutation(mutationOptions);
    }
    