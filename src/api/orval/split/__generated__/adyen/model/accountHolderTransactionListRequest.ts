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
import type { TransactionListForAccount } from './transactionListForAccount';
import type { AccountHolderTransactionListRequestTransactionStatusesItem } from './accountHolderTransactionListRequestTransactionStatusesItem';

export interface AccountHolderTransactionListRequest {
  /** The code of the account holder that owns the account(s) of which retrieve the transaction list. */
  accountHolderCode: string;
  /** A list of accounts to include in the transaction list. If left blank, the last fifty (50) transactions for all accounts of the account holder will be included. */
  transactionListsPerAccount?: TransactionListForAccount[];
  /** A list of statuses to include in the transaction list. If left blank, all transactions will be included.
>Permitted values:
>* `PendingCredit` - a pending balance credit.
>* `CreditFailed` - a pending credit failure; the balance will not be credited.
>* `Credited` - a credited balance.
>* `PendingDebit` - a pending balance debit (e.g., a refund).
>* `CreditClosed` - a pending credit closed; the balance will not be credited.
>* `CreditSuspended` - a pending credit closed; the balance will not be credited.
>* `DebitFailed` - a pending debit failure; the balance will not be debited.
>* `Debited` - a debited balance (e.g., a refund).
>* `DebitReversedReceived` - a pending refund reversal.
>* `DebitedReversed` - a reversed refund.
>* `ChargebackReceived` - a received chargeback request.
>* `Chargeback` - a processed chargeback.
>* `ChargebackReversedReceived` - a pending chargeback reversal.
>* `ChargebackReversed` - a reversed chargeback.
>* `Converted` - converted.
>* `ManualCorrected` - manual booking/adjustment by Adyen.
>* `Payout` - a payout.
>* `PayoutReversed` - a reversed payout.
>* `PendingFundTransfer` - a pending transfer of funds from one account to another.
>* `FundTransfer` - a transfer of funds from one account to another. */
  transactionStatuses?: AccountHolderTransactionListRequestTransactionStatusesItem[];
}
