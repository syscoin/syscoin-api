/// <reference path="api.d.ts" />

namespace API.Client {
    'use strict';

    export interface Account {

        /**
         * Only returned if imported addresses were involved in transaction
         */
        "involvesWatchonly"?: boolean;

        /**
         * The account name of the receiving account
         */
        "account"?: string;

        /**
         * The total amount received by addresses with this account
         */
        "amount"?: number;

        /**
         * The number of confirmations of the most recent transaction included
         */
        "confirmations"?: number;

        /**
         * A comment for the address/transaction, if any
         */
        "label"?: string;
    }

}
