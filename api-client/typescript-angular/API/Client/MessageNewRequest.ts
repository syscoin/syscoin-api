/// <reference path="api.d.ts" />

namespace API.Client {
    'use strict';

    export interface MessageNewRequest {

        /**
         * Subject of message.
         */
        "subject": string;

        /**
         * Message to send to alias.
         */
        "message": string;

        /**
         * Alias to send message from.
         */
        "fromalias": string;

        /**
         * Alias to send message to.
         */
        "toalias": string;
    }

}
