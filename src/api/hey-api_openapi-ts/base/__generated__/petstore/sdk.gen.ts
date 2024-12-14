// This file is auto-generated by @hey-api/openapi-ts

import { createClient, createConfig, type OptionsLegacyParser } from '@hey-api/client-fetch';
import type { UpdatePetData, UpdatePetError, UpdatePetResponse, AddPetData, AddPetError, AddPetResponse, FindPetsByStatusData, FindPetsByStatusError, FindPetsByStatusResponse, FindPetsByTagsData, FindPetsByTagsError, FindPetsByTagsResponse, GetPetByIdData, GetPetByIdError, GetPetByIdResponse, UpdatePetWithFormData, DeletePetData, UploadFileData, UploadFileError, UploadFileResponse, GetInventoryError, GetInventoryResponse, PlaceOrderData, PlaceOrderError, PlaceOrderResponse, GetOrderByIdData, GetOrderByIdError, GetOrderByIdResponse, DeleteOrderData, CreateUserData, CreateUserError, CreateUserResponse, CreateUsersWithListInputData, CreateUsersWithListInputError, CreateUsersWithListInputResponse, LoginUserData, LoginUserError, LoginUserResponse, LogoutUserError, LogoutUserResponse, GetUserByNameData, GetUserByNameError, GetUserByNameResponse, UpdateUserData, UpdateUserError, UpdateUserResponse, DeleteUserData } from './types.gen';

export const client = createClient(createConfig());

/**
 * Update an existing pet
 * Update an existing pet by Id
 */
export const updatePet = <ThrowOnError extends boolean = false>(options: OptionsLegacyParser<UpdatePetData, ThrowOnError>) => {
    return (options?.client ?? client).put<UpdatePetResponse, UpdatePetError, ThrowOnError>({
        ...options,
        url: '/pet'
    });
};

/**
 * Add a new pet to the store
 * Add a new pet to the store
 */
export const addPet = <ThrowOnError extends boolean = false>(options: OptionsLegacyParser<AddPetData, ThrowOnError>) => {
    return (options?.client ?? client).post<AddPetResponse, AddPetError, ThrowOnError>({
        ...options,
        url: '/pet'
    });
};

/**
 * Finds Pets by status
 * Multiple status values can be provided with comma separated strings
 */
export const findPetsByStatus = <ThrowOnError extends boolean = false>(options?: OptionsLegacyParser<FindPetsByStatusData, ThrowOnError>) => {
    return (options?.client ?? client).get<FindPetsByStatusResponse, FindPetsByStatusError, ThrowOnError>({
        ...options,
        url: '/pet/findByStatus'
    });
};

/**
 * Finds Pets by tags
 * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
 */
export const findPetsByTags = <ThrowOnError extends boolean = false>(options?: OptionsLegacyParser<FindPetsByTagsData, ThrowOnError>) => {
    return (options?.client ?? client).get<FindPetsByTagsResponse, FindPetsByTagsError, ThrowOnError>({
        ...options,
        url: '/pet/findByTags'
    });
};

/**
 * Find pet by ID
 * Returns a single pet
 */
export const getPetById = <ThrowOnError extends boolean = false>(options: OptionsLegacyParser<GetPetByIdData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetPetByIdResponse, GetPetByIdError, ThrowOnError>({
        ...options,
        url: '/pet/{petId}'
    });
};

/**
 * Updates a pet in the store with form data
 */
export const updatePetWithForm = <ThrowOnError extends boolean = false>(options: OptionsLegacyParser<UpdatePetWithFormData, ThrowOnError>) => {
    return (options?.client ?? client).post<void, unknown, ThrowOnError>({
        ...options,
        url: '/pet/{petId}'
    });
};

/**
 * Deletes a pet
 */
export const deletePet = <ThrowOnError extends boolean = false>(options: OptionsLegacyParser<DeletePetData, ThrowOnError>) => {
    return (options?.client ?? client).delete<void, unknown, ThrowOnError>({
        ...options,
        url: '/pet/{petId}'
    });
};

/**
 * uploads an image
 */
export const uploadFile = <ThrowOnError extends boolean = false>(options: OptionsLegacyParser<UploadFileData, ThrowOnError>) => {
    return (options?.client ?? client).post<UploadFileResponse, UploadFileError, ThrowOnError>({
        ...options,
        url: '/pet/{petId}/uploadImage'
    });
};

/**
 * Returns pet inventories by status
 * Returns a map of status codes to quantities
 */
export const getInventory = <ThrowOnError extends boolean = false>(options?: OptionsLegacyParser<unknown, ThrowOnError>) => {
    return (options?.client ?? client).get<GetInventoryResponse, GetInventoryError, ThrowOnError>({
        ...options,
        url: '/store/inventory'
    });
};

/**
 * Place an order for a pet
 * Place a new order in the store
 */
export const placeOrder = <ThrowOnError extends boolean = false>(options?: OptionsLegacyParser<PlaceOrderData, ThrowOnError>) => {
    return (options?.client ?? client).post<PlaceOrderResponse, PlaceOrderError, ThrowOnError>({
        ...options,
        url: '/store/order'
    });
};

/**
 * Find purchase order by ID
 * For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions.
 */
export const getOrderById = <ThrowOnError extends boolean = false>(options: OptionsLegacyParser<GetOrderByIdData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetOrderByIdResponse, GetOrderByIdError, ThrowOnError>({
        ...options,
        url: '/store/order/{orderId}'
    });
};

/**
 * Delete purchase order by ID
 * For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
 */
export const deleteOrder = <ThrowOnError extends boolean = false>(options: OptionsLegacyParser<DeleteOrderData, ThrowOnError>) => {
    return (options?.client ?? client).delete<void, unknown, ThrowOnError>({
        ...options,
        url: '/store/order/{orderId}'
    });
};

/**
 * Create user
 * This can only be done by the logged in user.
 */
export const createUser = <ThrowOnError extends boolean = false>(options?: OptionsLegacyParser<CreateUserData, ThrowOnError>) => {
    return (options?.client ?? client).post<CreateUserResponse, CreateUserError, ThrowOnError>({
        ...options,
        url: '/user'
    });
};

/**
 * Creates list of users with given input array
 * Creates list of users with given input array
 */
export const createUsersWithListInput = <ThrowOnError extends boolean = false>(options?: OptionsLegacyParser<CreateUsersWithListInputData, ThrowOnError>) => {
    return (options?.client ?? client).post<CreateUsersWithListInputResponse, CreateUsersWithListInputError, ThrowOnError>({
        ...options,
        url: '/user/createWithList'
    });
};

/**
 * Logs user into the system
 */
export const loginUser = <ThrowOnError extends boolean = false>(options?: OptionsLegacyParser<LoginUserData, ThrowOnError>) => {
    return (options?.client ?? client).get<LoginUserResponse, LoginUserError, ThrowOnError>({
        ...options,
        url: '/user/login'
    });
};

/**
 * Logs out current logged in user session
 */
export const logoutUser = <ThrowOnError extends boolean = false>(options?: OptionsLegacyParser<unknown, ThrowOnError>) => {
    return (options?.client ?? client).get<LogoutUserResponse, LogoutUserError, ThrowOnError>({
        ...options,
        url: '/user/logout'
    });
};

/**
 * Get user by user name
 */
export const getUserByName = <ThrowOnError extends boolean = false>(options: OptionsLegacyParser<GetUserByNameData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetUserByNameResponse, GetUserByNameError, ThrowOnError>({
        ...options,
        url: '/user/{username}'
    });
};

/**
 * Update user
 * This can only be done by the logged in user.
 */
export const updateUser = <ThrowOnError extends boolean = false>(options: OptionsLegacyParser<UpdateUserData, ThrowOnError>) => {
    return (options?.client ?? client).put<UpdateUserResponse, UpdateUserError, ThrowOnError>({
        ...options,
        url: '/user/{username}'
    });
};

/**
 * Delete user
 * This can only be done by the logged in user.
 */
export const deleteUser = <ThrowOnError extends boolean = false>(options: OptionsLegacyParser<DeleteUserData, ThrowOnError>) => {
    return (options?.client ?? client).delete<void, unknown, ThrowOnError>({
        ...options,
        url: '/user/{username}'
    });
};