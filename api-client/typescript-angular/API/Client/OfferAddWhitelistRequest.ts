/// <reference path="api.d.ts" />

namespace API.Client {
    'use strict';

    export interface OfferAddWhitelistRequest {

        /**
         * offer guid that you are adding to
         */
        "offerguid": string;

        /**
         * alias guid representing an alias that you want to add to the affiliate list
         */
        "aliasguid": string;

        /**
         * percentage of discount given to reseller for this offer. Negative discount adds on top of offer price, acts as an extra commission. -99 to 99.
         */
        "discountPercentage": number;
    }

}
