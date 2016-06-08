/// <reference path="api.d.ts" />

namespace API.Client {
    'use strict';

    export interface CertNewRequest {

        /**
         * An alias you own.
         */
        "alias": string;

        /**
         * title, 255 bytes max.
         */
        "title": string;

        /**
         * data, 1KB max.
         */
        "data": string;

        /**
         * set to 1 if you only want to make the cert data private, only the owner of the cert can view it. Off by default.
         */
        "private"?: boolean;
    }

}
