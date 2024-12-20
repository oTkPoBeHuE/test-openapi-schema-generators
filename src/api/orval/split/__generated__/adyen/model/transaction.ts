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
import type { BankAccountDetail } from './bankAccountDetail';
import type { TransactionTransactionStatus } from './transactionTransactionStatus';

export interface Transaction {
  /** The amount of the transaction. */
  amount?: Amount;
  /** The details of the bank account to where a payout was made. */
  bankAccountDetail?: BankAccountDetail;
  /** The merchant reference of a related capture. */
  captureMerchantReference?: string;
  /** The psp reference of a related capture. */
  capturePspReference?: string;
  /** The date on which the transaction was performed. */
  creationDate?: string;
  /** A description of the transaction. */
  description?: string;
  /** The code of the account to which funds were credited during an outgoing fund transfer. */
  destinationAccountCode?: string;
  /** The psp reference of the related dispute. */
  disputePspReference?: string;
  /** The reason code of a dispute. */
  disputeReasonCode?: string;
  /** The merchant reference of a transaction. */
  merchantReference?: string;
  /** The psp reference of the related authorisation or transfer. */
  paymentPspReference?: string;
  /** The psp reference of the related payout. */
  payoutPspReference?: string;
  /** The psp reference of a transaction. */
  pspReference?: string;
  /** The code of the account from which funds were debited during an incoming fund transfer. */
  sourceAccountCode?: string;
  /** The status of the transaction.
>Permitted values: `PendingCredit`, `CreditFailed`, `CreditClosed`, `CreditSuspended`, `Credited`, `Converted`, `PendingDebit`, `DebitFailed`, `Debited`, `DebitReversedReceived`, `DebitedReversed`, `ChargebackReceived`, `Chargeback`, `ChargebackReversedReceived`, `ChargebackReversed`, `Payout`, `PayoutReversed`, `FundTransfer`, `PendingFundTransfer`, `ManualCorrected`. */
  transactionStatus?: TransactionTransactionStatus;
  /** The transfer code of the transaction. */
  transferCode?: string;
}
