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
  GetInventory200
} from '../../model/getInventory200'
import type {
  Order
} from '../../model/order'



/**
 * Returns a map of status codes to quantities
 * @summary Returns pet inventories by status
 */
export type getInventoryResponse = {
  data: GetInventory200;
  status: number;
  headers: Headers;
}

export const getGetInventoryUrl = () => {


  return `https://petstore3.swagger.io/api/v3/store/inventory`
}

export const getInventory = async ( options?: RequestInit): Promise<getInventoryResponse> => {
  
  const res = await fetch(getGetInventoryUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }

  )
  const data = await res.json()

  return { status: res.status, data, headers: res.headers }
}



export const getGetInventoryQueryKey = () => {
    return [`https://petstore3.swagger.io/api/v3/store/inventory`] as const;
    }

    
export const getGetInventoryQueryOptions = <TData = Awaited<ReturnType<typeof getInventory>>, TError = unknown>( options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getInventory>>, TError, TData>>, fetch?: RequestInit}
) => {

const {query: queryOptions, fetch: fetchOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetInventoryQueryKey();

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getInventory>>> = ({ signal }) => getInventory({ signal, ...fetchOptions });

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getInventory>>, TError, TData> & { queryKey: DataTag<QueryKey, TData> }
}

export type GetInventoryQueryResult = NonNullable<Awaited<ReturnType<typeof getInventory>>>
export type GetInventoryQueryError = unknown


export function useGetInventory<TData = Awaited<ReturnType<typeof getInventory>>, TError = unknown>(
  options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getInventory>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getInventory>>,
          TError,
          TData
        > , 'initialData'
      >, fetch?: RequestInit}

  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetInventory<TData = Awaited<ReturnType<typeof getInventory>>, TError = unknown>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getInventory>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getInventory>>,
          TError,
          TData
        > , 'initialData'
      >, fetch?: RequestInit}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetInventory<TData = Awaited<ReturnType<typeof getInventory>>, TError = unknown>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getInventory>>, TError, TData>>, fetch?: RequestInit}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
/**
 * @summary Returns pet inventories by status
 */

export function useGetInventory<TData = Awaited<ReturnType<typeof getInventory>>, TError = unknown>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getInventory>>, TError, TData>>, fetch?: RequestInit}

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
export type placeOrderResponse = {
  data: Order;
  status: number;
  headers: Headers;
}

export const getPlaceOrderUrl = () => {


  return `https://petstore3.swagger.io/api/v3/store/order`
}

export const placeOrder = async (order: Order, options?: RequestInit): Promise<placeOrderResponse> => {
  
  const res = await fetch(getPlaceOrderUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      order,)
  }

  )
  const data = await res.json()

  return { status: res.status, data, headers: res.headers }
}




export const getPlaceOrderMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof placeOrder>>, TError,{data: Order}, TContext>, fetch?: RequestInit}
): UseMutationOptions<Awaited<ReturnType<typeof placeOrder>>, TError,{data: Order}, TContext> => {
const {mutation: mutationOptions, fetch: fetchOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof placeOrder>>, {data: Order}> = (props) => {
          const {data} = props ?? {};

          return  placeOrder(data,fetchOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PlaceOrderMutationResult = NonNullable<Awaited<ReturnType<typeof placeOrder>>>
    export type PlaceOrderMutationBody = Order
    export type PlaceOrderMutationError = void

    /**
 * @summary Place an order for a pet
 */
export const usePlaceOrder = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof placeOrder>>, TError,{data: Order}, TContext>, fetch?: RequestInit}
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
export type getOrderByIdResponse = {
  data: Order;
  status: number;
  headers: Headers;
}

export const getGetOrderByIdUrl = (orderId: number,) => {


  return `https://petstore3.swagger.io/api/v3/store/order/${orderId}`
}

export const getOrderById = async (orderId: number, options?: RequestInit): Promise<getOrderByIdResponse> => {
  
  const res = await fetch(getGetOrderByIdUrl(orderId),
  {      
    ...options,
    method: 'GET'
    
    
  }

  )
  const data = await res.json()

  return { status: res.status, data, headers: res.headers }
}



export const getGetOrderByIdQueryKey = (orderId: number,) => {
    return [`https://petstore3.swagger.io/api/v3/store/order/${orderId}`] as const;
    }

    
export const getGetOrderByIdQueryOptions = <TData = Awaited<ReturnType<typeof getOrderById>>, TError = void>(orderId: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getOrderById>>, TError, TData>>, fetch?: RequestInit}
) => {

const {query: queryOptions, fetch: fetchOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetOrderByIdQueryKey(orderId);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getOrderById>>> = ({ signal }) => getOrderById(orderId, { signal, ...fetchOptions });

      

      

   return  { queryKey, queryFn, enabled: !!(orderId), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getOrderById>>, TError, TData> & { queryKey: DataTag<QueryKey, TData> }
}

export type GetOrderByIdQueryResult = NonNullable<Awaited<ReturnType<typeof getOrderById>>>
export type GetOrderByIdQueryError = void


export function useGetOrderById<TData = Awaited<ReturnType<typeof getOrderById>>, TError = void>(
 orderId: number, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getOrderById>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getOrderById>>,
          TError,
          TData
        > , 'initialData'
      >, fetch?: RequestInit}

  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetOrderById<TData = Awaited<ReturnType<typeof getOrderById>>, TError = void>(
 orderId: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getOrderById>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getOrderById>>,
          TError,
          TData
        > , 'initialData'
      >, fetch?: RequestInit}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetOrderById<TData = Awaited<ReturnType<typeof getOrderById>>, TError = void>(
 orderId: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getOrderById>>, TError, TData>>, fetch?: RequestInit}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
/**
 * @summary Find purchase order by ID
 */

export function useGetOrderById<TData = Awaited<ReturnType<typeof getOrderById>>, TError = void>(
 orderId: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getOrderById>>, TError, TData>>, fetch?: RequestInit}

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
export type deleteOrderResponse = {
  data: unknown;
  status: number;
  headers: Headers;
}

export const getDeleteOrderUrl = (orderId: number,) => {


  return `https://petstore3.swagger.io/api/v3/store/order/${orderId}`
}

export const deleteOrder = async (orderId: number, options?: RequestInit): Promise<deleteOrderResponse> => {
  
  const res = await fetch(getDeleteOrderUrl(orderId),
  {      
    ...options,
    method: 'DELETE'
    
    
  }

  )
  const data = await res.json()

  return { status: res.status, data, headers: res.headers }
}




export const getDeleteOrderMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteOrder>>, TError,{orderId: number}, TContext>, fetch?: RequestInit}
): UseMutationOptions<Awaited<ReturnType<typeof deleteOrder>>, TError,{orderId: number}, TContext> => {
const {mutation: mutationOptions, fetch: fetchOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof deleteOrder>>, {orderId: number}> = (props) => {
          const {orderId} = props ?? {};

          return  deleteOrder(orderId,fetchOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type DeleteOrderMutationResult = NonNullable<Awaited<ReturnType<typeof deleteOrder>>>
    
    export type DeleteOrderMutationError = void

    /**
 * @summary Delete purchase order by ID
 */
export const useDeleteOrder = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteOrder>>, TError,{orderId: number}, TContext>, fetch?: RequestInit}
): UseMutationResult<
        Awaited<ReturnType<typeof deleteOrder>>,
        TError,
        {orderId: number},
        TContext
      > => {

      const mutationOptions = getDeleteOrderMutationOptions(options);

      return useMutation(mutationOptions);
    }
    