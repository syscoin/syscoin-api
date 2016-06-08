/// <reference path="api.d.ts" />

namespace API.Client {
    'use strict';

    export interface AddressGrouping {

        /**
         * The syscoin address
         */
        "syscoinaddress"?: string;

        /**
         * The amount in SYS
         */
        "amount"?: number;

        /**
         * (optional) The account (DEPRECATED)
         */
        "account"?: string;
    }

}
