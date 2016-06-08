/// <reference path="api.d.ts" />

namespace API.Client {
    'use strict';

    export interface SendManyRequest {

        /**
         * DEPRECATED. The account to send the funds from. Should be \"\" for the default account
         */
        "fromaccount": string;

        /**
         * A json object with addresses and amounts { \"address\":amount   (numeric) The syscoin address is the key, the numeric amount in SYS is the value,...}
         */
        "amounts": string;

        /**
         * Only use the balance confirmed at least this many times.
         */
        "minconf"?: number;

        /**
         * A comment used to store what the transaction is for. This is not part of the transaction, just kept in your wallet.
         */
        "comment"?: string;

        /**
         * A json array with addresses. The fee will be equally deducted from the amount of each selected address. Those recipients will receive less syscoins than you enter in their corresponding amount field. If no addresses are specified here, the sender pays the fee. [ \"address\" Subtract fee from this address,... ]
         */
        "subtractfeefromamount"?: string;
    }

}
