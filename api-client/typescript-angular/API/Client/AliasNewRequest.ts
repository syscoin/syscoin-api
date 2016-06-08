/// <reference path="api.d.ts" />

namespace API.Client {
    'use strict';

    export interface AliasNewRequest {

        /**
         * Alias name
         */
        "aliasname": string;

        /**
         * Alias public profile data, 1023 chars max.
         */
        "publicvalue": string;

        /**
         * Alias private profile data, 1023 chars max. Will be private and readable by owner only.
         */
        "privatevalue"?: string;
    }

}
