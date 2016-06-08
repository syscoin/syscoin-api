/// <reference path="api.d.ts" />

namespace API.Client {
    'use strict';

    export interface OfferLinkRequest {

        /**
         * An alias you own.
         */
        "alias": string;

        /**
         * offer guid that you are linking to
         */
        "guid": string;

        /**
         * percentage of profit desired over original offer price, > 0, ie 5 for 5%
         */
        "comission": string;

        /**
         * description, 1 KB max. Defaults to original description. Leave as '' to use default.
         */
        "description"?: string;
    }

}
