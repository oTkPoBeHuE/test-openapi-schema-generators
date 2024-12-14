/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Fund API
 * This API is used for the classic integration. If you are just starting your implementation, refer to our [new integration guide](https://docs.adyen.com/marketplaces-and-platforms) instead.

The Fund API provides endpoints for managing the funds in the accounts on your platform. These management operations include, for example, the transfer of funds from one account to another, the payout of funds to an account holder, and the retrieval of balances in an account.

For more information, refer to our [documentation](https://docs.adyen.com/marketplaces-and-platforms/classic/).
## Authentication
Your Adyen contact will provide your API credential and an API key. To connect to the API, add an `X-API-Key` header with the API key as the value, for example:

 ```
curl
-H "Content-Type: application/json" \
-H "X-API-Key: YOUR_API_KEY" \
...
```

Alternatively, you can use the username and password to connect to the API using basic authentication. For example:

```
curl
-U "ws@MarketPlace.YOUR_PLATFORM_ACCOUNT":"YOUR_WS_PASSWORD" \
-H "Content-Type: application/json" \
...
```
When going live, you need to generate new web service user credentials to access the [live endpoints](https://docs.adyen.com/development-resources/live-endpoints).

## Versioning
The Fund API supports [versioning](https://docs.adyen.com/development-resources/versioning) using a version suffix in the endpoint URL. This suffix has the following format: "vXX", where XX is the version number.

For example:
```
https://cal-test.adyen.com/cal/services/Fund/v6/accountHolderBalance
```
 * OpenAPI spec version: 6
 */
import type { ErrorFieldType } from './errorFieldType';

export interface TransferFundsResponse {
  /** Contains field validation errors that would prevent requests from being processed. */
  invalidFields?: ErrorFieldType[];
  /** The value supplied by the executing user when initiating the transfer; may be used to link multiple transactions. */
  merchantReference?: string;
  /** The reference of a request. Can be used to uniquely identify the request. */
  pspReference?: string;
  /** The result code. */
  resultCode?: string;
}
