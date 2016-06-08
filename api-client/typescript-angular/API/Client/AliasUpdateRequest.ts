/// <reference path="api.d.ts" />

namespace API.Client {
    'use strict';

    export interface AliasUpdateRequest {

        /**
         * alias name.
         */
        "aliasname": string;

        /**
         * alias public profile data, 1023 chars max.
         */
        "publicvalue": string;

        /**
         * alias private profile data, 1023 chars max. Will be private and readable by owner only.
         */
        "privatevalue"?: string;

        /**
         * receiver syscoin alias pub key, if transferring alias.
         */
        "toaliasPubkey"?: string;
    }

}
