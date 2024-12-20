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
export type LoginUserParams = {
/**
 * The user name for login
 */
username?: string;
/**
 * The password for login in clear text
 */
password?: string;
};

export type GetInventory200 = {[key: string]: number};

export type UploadFileParams = {
/**
 * Additional Metadata
 */
additionalMetadata?: string;
};

export type DeletePetHeaders = {
api_key?: string;
};

export type UpdatePetWithFormParams = {
/**
 * Name of pet that needs to be updated
 */
name?: string;
/**
 * Status of pet that needs to be updated
 */
status?: string;
};

export type FindPetsByTagsParams = {
/**
 * Tags to filter by
 */
tags?: string[];
};

export type FindPetsByStatusStatus = typeof FindPetsByStatusStatus[keyof typeof FindPetsByStatusStatus];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const FindPetsByStatusStatus = {
  available: 'available',
  pending: 'pending',
  sold: 'sold',
} as const;

export type FindPetsByStatusParams = {
/**
 * Status values that need to be considered for filter
 */
status?: FindPetsByStatusStatus;
};

/**
 * Pet object that needs to be added to the store
 */
export type PetBody = Pet;

export interface ApiResponse {
  code?: number;
  message?: string;
  type?: string;
}

/**
 * pet status in the store
 */
export type PetStatus = typeof PetStatus[keyof typeof PetStatus];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PetStatus = {
  available: 'available',
  pending: 'pending',
  sold: 'sold',
} as const;

export interface Tag {
  id?: number;
  name?: string;
}

export interface Pet {
  category?: Category;
  id?: number;
  name: string;
  photoUrls: string[];
  /** pet status in the store */
  status?: PetStatus;
  tags?: Tag[];
}

export interface User {
  email?: string;
  firstName?: string;
  id?: number;
  lastName?: string;
  password?: string;
  phone?: string;
  username?: string;
  /** User Status */
  userStatus?: number;
}

/**
 * List of user object
 */
export type UserArrayBody = User[];

export interface Category {
  id?: number;
  name?: string;
}

export interface Address {
  city?: string;
  state?: string;
  street?: string;
  zip?: string;
}

export interface Customer {
  address?: Address[];
  id?: number;
  username?: string;
}

/**
 * Order Status
 */
export type OrderStatus = typeof OrderStatus[keyof typeof OrderStatus];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const OrderStatus = {
  placed: 'placed',
  approved: 'approved',
  delivered: 'delivered',
} as const;

export interface Order {
  complete?: boolean;
  id?: number;
  petId?: number;
  quantity?: number;
  shipDate?: string;
  /** Order Status */
  status?: OrderStatus;
}

