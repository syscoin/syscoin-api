/// <reference path="api.d.ts" />

namespace API.Client {
    'use strict';

    export interface ValidateAddressResponse {

        /**
         * If the address is valid or not. If not, this is the only property returned.
         */
        "isvalid"?: boolean;

        /**
         * The syscoin address validated
         */
        "address"?: string;

        /**
         * If the address is yours or not
         */
        "ismine"?: boolean;

        /**
         * If the address is watchonly
         */
        "iswatchonly"?: boolean;

        /**
         * If the key is a script
         */
        "isscript"?: boolean;

        /**
         * The hex value of the raw public key
         */
        "pubkey"?: string;

        /**
         * If the address is compressed
         */
        "iscompressed"?: boolean;

        /**
         * DEPRECATED. The account associated with the address, \"\" is the default account
         */
        "account"?: string;
    }

}
