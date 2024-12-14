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
import * as axios from 'axios';
import type {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse
} from 'axios'
import type {
  GetInventory200
} from '../../model/getInventory200'
import type {
  Order
} from '../../model/order'



/**
 * Returns a map of status codes to quantities
 * @summary Returns pet inventories by status
 */
export const getInventory = (
     options?: AxiosRequestConfig
 ): Promise<AxiosResponse<GetInventory200>> => {
    
    return axios.default.get(
      `/store/inventory`,options
    );
  }


export const getGetInventoryQueryKey = () => {
    return [`/store/inventory`] as const;
    }

    
export const getGetInventoryQueryOptions = <TData = Awaited<ReturnType<typeof getInventory>>, TError = AxiosError<unknown>>( options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getInventory>>, TError, TData>>, axios?: AxiosRequestConfig}
) => {

const {query: queryOptions, axios: axiosOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetInventoryQueryKey();

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getInventory>>> = ({ signal }) => getInventory({ signal, ...axiosOptions });

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getInventory>>, TError, TData> & { queryKey: DataTag<QueryKey, TData> }
}

export type GetInventoryQueryResult = NonNullable<Awaited<ReturnType<typeof getInventory>>>
export type GetInventoryQueryError = AxiosError<unknown>


export function useGetInventory<TData = Awaited<ReturnType<typeof getInventory>>, TError = AxiosError<unknown>>(
  options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getInventory>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getInventory>>,
          TError,
          TData
        > , 'initialData'
      >, axios?: AxiosRequestConfig}

  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetInventory<TData = Awaited<ReturnType<typeof getInventory>>, TError = AxiosError<unknown>>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getInventory>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getInventory>>,
          TError,
          TData
        > , 'initialData'
      >, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetInventory<TData = Awaited<ReturnType<typeof getInventory>>, TError = AxiosError<unknown>>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getInventory>>, TError, TData>>, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
/**
 * @summary Returns pet inventories by status
 */

export function useGetInventory<TData = Awaited<ReturnType<typeof getInventory>>, TError = AxiosError<unknown>>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getInventory>>, TError, TData>>, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> } {

  const queryOptions = getGetInventoryQueryOptions(options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



/**
 * Place a new order in the store
 * @summary Place an order for a pet
 */
export const placeOrder = (
    order: Order, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<Order>> => {
    
    return axios.default.post(
      `/store/order`,
      order,options
    );
  }



export const getPlaceOrderMutationOptions = <TError = AxiosError<void>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof placeOrder>>, TError,{data: Order}, TContext>, axios?: AxiosRequestConfig}
): UseMutationOptions<Awaited<ReturnType<typeof placeOrder>>, TError,{data: Order}, TContext> => {
const {mutation: mutationOptions, axios: axiosOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof placeOrder>>, {data: Order}> = (props) => {
          const {data} = props ?? {};

          return  placeOrder(data,axiosOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PlaceOrderMutationResult = NonNullable<Awaited<ReturnType<typeof placeOrder>>>
    export type PlaceOrderMutationBody = Order
    export type PlaceOrderMutationError = AxiosError<void>

    /**
 * @summary Place an order for a pet
 */
export const usePlaceOrder = <TError = AxiosError<void>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof placeOrder>>, TError,{data: Order}, TContext>, axios?: AxiosRequestConfig}
): UseMutationResult<
        Awaited<ReturnType<typeof placeOrder>>,
        TError,
        {data: Order},
        TContext
      > => {

      const mutationOptions = getPlaceOrderMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions.
 * @summary Find purchase order by ID
 */
export const getOrderById = (
    orderId: number, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<Order>> => {
    
    return axios.default.get(
      `/store/order/${orderId}`,options
    );
  }


export const getGetOrderByIdQueryKey = (orderId: number,) => {
    return [`/store/order/${orderId}`] as const;
    }

    
export const getGetOrderByIdQueryOptions = <TData = Awaited<ReturnType<typeof getOrderById>>, TError = AxiosError<void>>(orderId: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getOrderById>>, TError, TData>>, axios?: AxiosRequestConfig}
) => {

const {query: queryOptions, axios: axiosOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetOrderByIdQueryKey(orderId);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getOrderById>>> = ({ signal }) => getOrderById(orderId, { signal, ...axiosOptions });

      

      

   return  { queryKey, queryFn, enabled: !!(orderId), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getOrderById>>, TError, TData> & { queryKey: DataTag<QueryKey, TData> }
}

export type GetOrderByIdQueryResult = NonNullable<Awaited<ReturnType<typeof getOrderById>>>
export type GetOrderByIdQueryError = AxiosError<void>


export function useGetOrderById<TData = Awaited<ReturnType<typeof getOrderById>>, TError = AxiosError<void>>(
 orderId: number, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getOrderById>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getOrderById>>,
          TError,
          TData
        > , 'initialData'
      >, axios?: AxiosRequestConfig}

  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetOrderById<TData = Awaited<ReturnType<typeof getOrderById>>, TError = AxiosError<void>>(
 orderId: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getOrderById>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getOrderById>>,
          TError,
          TData
        > , 'initialData'
      >, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetOrderById<TData = Awaited<ReturnType<typeof getOrderById>>, TError = AxiosError<void>>(
 orderId: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getOrderById>>, TError, TData>>, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
/**
 * @summary Find purchase order by ID
 */

export function useGetOrderById<TData = Awaited<ReturnType<typeof getOrderById>>, TError = AxiosError<void>>(
 orderId: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getOrderById>>, TError, TData>>, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> } {

  const queryOptions = getGetOrderByIdQueryOptions(orderId,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



/**
 * For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
 * @summary Delete purchase order by ID
 */
export const deleteOrder = (
    orderId: number, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<unknown>> => {
    
    return axios.default.delete(
      `/store/order/${orderId}`,options
    );
  }



export const getDeleteOrderMutationOptions = <TError = AxiosError<void>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteOrder>>, TError,{orderId: number}, TContext>, axios?: AxiosRequestConfig}
): UseMutationOptions<Awaited<ReturnType<typeof deleteOrder>>, TError,{orderId: number}, TContext> => {
const {mutation: mutationOptions, axios: axiosOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof deleteOrder>>, {orderId: number}> = (props) => {
          const {orderId} = props ?? {};

          return  deleteOrder(orderId,axiosOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type DeleteOrderMutationResult = NonNullable<Awaited<ReturnType<typeof deleteOrder>>>
    
    export type DeleteOrderMutationError = AxiosError<void>

    /**
 * @summary Delete purchase order by ID
 */
export const useDeleteOrder = <TError = AxiosError<void>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteOrder>>, TError,{orderId: number}, TContext>, axios?: AxiosRequestConfig}
): UseMutationResult<
        Awaited<ReturnType<typeof deleteOrder>>,
        TError,
        {orderId: number},
        TContext
      > => {

      const mutationOptions = getDeleteOrderMutationOptions(options);

      return useMutation(mutationOptions);
    }
    