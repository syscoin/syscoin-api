/// <reference path="api.d.ts" />

namespace API.Client {
    'use strict';

    export interface WalletPassphraseRequest {

        /**
         * The wallet passphrase
         */
        "passphrase": string;

        /**
         * The time to keep the decryption key in seconds.
         */
        "timeout": number;
    }

}
