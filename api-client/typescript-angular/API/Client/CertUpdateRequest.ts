/// <reference path="api.d.ts" />

namespace API.Client {
    'use strict';

    export interface CertUpdateRequest {

        /**
         * certificate guidkey.
         */
        "guid": string;

        /**
         * certificate title, 255 bytes max.
         */
        "title": string;

        /**
         * certificate data, 1KB max.
         */
        "data": string;

        /**
         * set to 1 if you only want to make the cert data private, only the owner of the cert can view it.
         */
        "private": boolean;
    }

}
