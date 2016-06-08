/// <reference path="api.d.ts" />

namespace API.Client {
    'use strict';

    export interface TransactionDetailEntry {

        /**
         * DEPRECATED. The account name involved in the transaction, can be \"\" for the default account.
         */
        "account"?: string;

        /**
         * The syscoin address involved in the transaction
         */
        "address"?: string;

        /**
         * The category, either 'send' or 'receive'
         */
        "category"?: string;

        /**
         * The amount in SYS
         */
        "amount"?: number;

        /**
         * A comment for the address/transaction, if any
         */
        "label"?: string;

        /**
         * the vout value
         */
        "vout"?: number;
    }

}
