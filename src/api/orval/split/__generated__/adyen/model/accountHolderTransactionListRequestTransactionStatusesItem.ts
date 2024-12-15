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

export type AccountHolderTransactionListRequestTransactionStatusesItem = typeof AccountHolderTransactionListRequestTransactionStatusesItem[keyof typeof AccountHolderTransactionListRequestTransactionStatusesItem];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AccountHolderTransactionListRequestTransactionStatusesItem = {
  BalanceNotPaidOutTransfer: 'BalanceNotPaidOutTransfer',
  BalancePlatformSweep: 'BalancePlatformSweep',
  BalancePlatformSweepReturned: 'BalancePlatformSweepReturned',
  Chargeback: 'Chargeback',
  ChargebackCorrection: 'ChargebackCorrection',
  ChargebackCorrectionReceived: 'ChargebackCorrectionReceived',
  ChargebackReceived: 'ChargebackReceived',
  ChargebackReversed: 'ChargebackReversed',
  ChargebackReversedCorrection: 'ChargebackReversedCorrection',
  ChargebackReversedCorrectionReceived: 'ChargebackReversedCorrectionReceived',
  ChargebackReversedReceived: 'ChargebackReversedReceived',
  Converted: 'Converted',
  CreditClosed: 'CreditClosed',
  CreditFailed: 'CreditFailed',
  CreditReversed: 'CreditReversed',
  CreditReversedReceived: 'CreditReversedReceived',
  CreditSuspended: 'CreditSuspended',
  Credited: 'Credited',
  DebitFailed: 'DebitFailed',
  DebitReversedReceived: 'DebitReversedReceived',
  Debited: 'Debited',
  DebitedReversed: 'DebitedReversed',
  DepositCorrectionCredited: 'DepositCorrectionCredited',
  DepositCorrectionDebited: 'DepositCorrectionDebited',
  Fee: 'Fee',
  FundTransfer: 'FundTransfer',
  FundTransferReversed: 'FundTransferReversed',
  InvoiceDeductionCredited: 'InvoiceDeductionCredited',
  InvoiceDeductionDebited: 'InvoiceDeductionDebited',
  ManualCorrected: 'ManualCorrected',
  ManualCorrectionCredited: 'ManualCorrectionCredited',
  ManualCorrectionDebited: 'ManualCorrectionDebited',
  MerchantPayin: 'MerchantPayin',
  MerchantPayinReversed: 'MerchantPayinReversed',
  Payout: 'Payout',
  PayoutReversed: 'PayoutReversed',
  PendingCredit: 'PendingCredit',
  PendingDebit: 'PendingDebit',
  PendingFundTransfer: 'PendingFundTransfer',
  ReCredited: 'ReCredited',
  ReCreditedReceived: 'ReCreditedReceived',
  SecondChargeback: 'SecondChargeback',
  SecondChargebackCorrection: 'SecondChargebackCorrection',
  SecondChargebackCorrectionReceived: 'SecondChargebackCorrectionReceived',
  SecondChargebackReceived: 'SecondChargebackReceived',
} as const;