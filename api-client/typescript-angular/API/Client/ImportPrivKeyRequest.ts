/// <reference path="api.d.ts" />

namespace API.Client {
    'use strict';

    export interface ImportPrivKeyRequest {

        /**
         * The private key (see dumpprivkey)
         */
        "syscoinprivkey": string;

        /**
         * An optional label
         */
        "label"?: string;

        /**
         * Rescan the wallet for transactions
         */
        "rescan"?: boolean;
    }

}
