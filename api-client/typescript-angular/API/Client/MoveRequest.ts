/// <reference path="api.d.ts" />

namespace API.Client {
    'use strict';

    export interface MoveRequest {

        /**
         * The name of the account to move funds from. May be the default account using \"\".
         */
        "fromaccount": string;

        /**
         * The name of the account to move funds to. May be the default account using \"\".
         */
        "toaccount": string;

        /**
         * Quantity of SYS to move between accounts.
         */
        "amount": number;

        /**
         * Only use funds with at least this many confirmations.
         */
        "minconf"?: string;

        /**
         * An optional comment, stored in the wallet only.
         */
        "comment"?: string;
    }

}
