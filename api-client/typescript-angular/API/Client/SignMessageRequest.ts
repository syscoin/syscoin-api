/// <reference path="api.d.ts" />

namespace API.Client {
    'use strict';

    export interface SignMessageRequest {

        /**
         * The syscoin address to use for the private key.
         */
        "syscoinaddress": string;

        /**
         * The message to create a signature of.
         */
        "message": number;
    }

}
