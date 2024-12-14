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
import type { PayoutAccountHolderRequestPayoutSpeed } from './payoutAccountHolderRequestPayoutSpeed';

export interface PayoutAccountHolderRequest {
  /** The code of the account from which the payout is to be made. */
  accountCode: string;
  /** The code of the Account Holder who owns the account from which the payout is to be made.
The Account Holder is the party to which the payout will be made. */
  accountHolderCode: string;
  /** An object containing the currency and value of the payout.
If the account has multiple currencies, specify the currency to be used.
If the `bankAccountUUID` is provided in the request, the currency supported by the bank is used.
If the `payoutMethodCode` is provided in the request, the specified payout method is selected. */
  amount?: Amount;
  /** The unique ID of the Bank Account held by the Account Holder to which the payout is to be made.
If left blank, a bank account is automatically selected. */
  bankAccountUUID?: string;
  /**
   * A description of the payout. Maximum 200 characters.
Allowed: **abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/?:().,'+ ";**
   * @maxLength 200
   */
  description?: string;
  /** A value that can be supplied at the discretion of the executing user in order to link multiple transactions to one another. */
  merchantReference?: string;
  /** The unique ID of the payout method held by the Account Holder to which the payout is to be made.
If left blank, a payout instrument is automatically selected. */
  payoutMethodCode?: string;
  /** Speed with which payouts for this account are processed. Permitted values: `STANDARD`, `SAME_DAY`. */
  payoutSpeed?: PayoutAccountHolderRequestPayoutSpeed;
}
