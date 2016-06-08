/// <reference path="api.d.ts" />

namespace API.Client {
    'use strict';

    export interface SendFromRequest {

        /**
         * The name of the account to send funds from. May be the default account using \"\".
         */
        "fromaccount": string;

        /**
         * The syscoin address to send funds to.
         */
        "tosyscoinaddress": string;

        /**
         * he amount in SYS (transaction fee is added on top).
         */
        "amount": number;

        /**
         * Only use funds with at least this many confirmations.
         */
        "minconf"?: number;

        /**
         * A comment used to store what the transaction is for. This is not part of the transaction, just kept in your wallet.
         */
        "comment"?: string;

        /**
         * An optional comment to store the name of the person or organization to which you're sending the transaction. This is not part of the transaction, it is just kept in your wallet.
         */
        "commentto"?: string;
    }

}
