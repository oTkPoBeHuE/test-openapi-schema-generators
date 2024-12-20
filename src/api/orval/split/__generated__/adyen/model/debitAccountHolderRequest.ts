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
import type { Amount } from './amount';
import type { Split } from './split';

export interface DebitAccountHolderRequest {
  /** The code of the account holder. */
  accountHolderCode: string;
  /** The amount to be debited from the account holder's bank account. */
  amount: Amount;
  /** The Adyen-generated unique alphanumeric identifier (UUID) of the account holder's bank account. */
  bankAccountUUID: string;
  /**
   * A description of the direct debit. Maximum length: 35 characters.

Allowed characters: **a-z**, **A-Z**, **0-9**, and special characters **\/?:().,'+ ";**.
   * @maxLength 35
   */
  description?: string;
  /** Your merchant account. */
  merchantAccount: string;
  /** Contains instructions on how to split the funds between the accounts in your platform. The request must have at least one split item. */
  splits: Split[];
}
