/// <reference path="api.d.ts" />

namespace API.Client {
    'use strict';

    export interface ImportAddressRequest {

        /**
         * The hex-encoded script (or address)
         */
        "script": string;

        /**
         * An optional label
         */
        "label"?: string;

        /**
         * Rescan the wallet for transactions
         */
        "rescan"?: boolean;

        /**
         * Add the P2SH version of the script as well
         */
        "p2sh"?: boolean;
    }

}
