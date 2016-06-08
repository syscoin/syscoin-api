/// <reference path="api.d.ts" />

namespace API.Client {
    'use strict';

    export interface ImportPubKeyRequest {

        /**
         * The hex-encoded public key
         */
        "pubkey": string;

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
