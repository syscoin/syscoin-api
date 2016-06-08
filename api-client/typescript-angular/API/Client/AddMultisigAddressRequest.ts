/// <reference path="api.d.ts" />

namespace API.Client {
    'use strict';

    export interface AddMultisigAddressRequest {

        /**
         * The number of required signatures out of the n keys or addresses.
         */
        "nrequired": number;

        /**
         * A json array of syscoin addresses or hex-encoded public keys. [ \"address\"  (string) syscoin address or hex-encoded public key ... ]
         */
        "keysobject": string;

        /**
         * DEPRECATED. An account to assign the addresses to.
         */
        "account"?: string;
    }

}
