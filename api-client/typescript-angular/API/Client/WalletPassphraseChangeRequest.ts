/// <reference path="api.d.ts" />

namespace API.Client {
    'use strict';

    export interface WalletPassphraseChangeRequest {

        /**
         * The current passphrase
         */
        "oldpassphrase": string;

        /**
         * The new passphrase
         */
        "newpassphrase": string;
    }

}
