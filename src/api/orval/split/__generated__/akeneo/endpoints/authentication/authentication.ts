/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Akeneo PIM REST API
 * OpenAPI spec version: 1.0.0
 */
import {
  useMutation
} from '@tanstack/react-query'
import type {
  MutationFunction,
  UseMutationOptions,
  UseMutationResult
} from '@tanstack/react-query'
import type {
  PostToken200One
} from '../../model/postToken200One'
import type {
  PostToken400One
} from '../../model/postToken400One'
import type {
  PostToken415One
} from '../../model/postToken415One'
import type {
  PostToken422One
} from '../../model/postToken422One'
import type {
  PostTokenBody
} from '../../model/postTokenBody'
import type {
  PostTokenHeaders
} from '../../model/postTokenHeaders'



/**
 * This endpoint allows you to get an authentication token. No need to be authenticated to use this endpoint.
 * @summary Get authentication token
 */
export type postTokenResponse = {
  data: PostToken200One;
  status: number;
  headers: Headers;
}

export const getPostTokenUrl = () => {


  return `/api/oauth/v1/token`
}

export const postToken = async (postTokenBody: PostTokenBody,
    headers: PostTokenHeaders, options?: RequestInit): Promise<postTokenResponse> => {
  
  const res = await fetch(getPostTokenUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      postTokenBody,)
  }

  )
  const data = await res.json()

  return { status: res.status, data, headers: res.headers }
}




export const getPostTokenMutationOptions = <TError = PostToken400One | PostToken415One | PostToken422One,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postToken>>, TError,{data: PostTokenBody;headers: PostTokenHeaders}, TContext>, fetch?: RequestInit}
): UseMutationOptions<Awaited<ReturnType<typeof postToken>>, TError,{data: PostTokenBody;headers: PostTokenHeaders}, TContext> => {
const {mutation: mutationOptions, fetch: fetchOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postToken>>, {data: PostTokenBody;headers: PostTokenHeaders}> = (props) => {
          const {data,headers} = props ?? {};

          return  postToken(data,headers,fetchOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostTokenMutationResult = NonNullable<Awaited<ReturnType<typeof postToken>>>
    export type PostTokenMutationBody = PostTokenBody
    export type PostTokenMutationError = PostToken400One | PostToken415One | PostToken422One

    /**
 * @summary Get authentication token
 */
export const usePostToken = <TError = PostToken400One | PostToken415One | PostToken422One,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postToken>>, TError,{data: PostTokenBody;headers: PostTokenHeaders}, TContext>, fetch?: RequestInit}
): UseMutationResult<
        Awaited<ReturnType<typeof postToken>>,
        TError,
        {data: PostTokenBody;headers: PostTokenHeaders},
        TContext
      > => {

      const mutationOptions = getPostTokenMutationOptions(options);

      return useMutation(mutationOptions);
    }
    