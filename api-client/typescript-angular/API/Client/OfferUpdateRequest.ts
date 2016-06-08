/// <reference path="api.d.ts" />

namespace API.Client {
    'use strict';

    export interface OfferUpdateRequest {

        /**
         * Alias peg you wish to use, leave blank to use SYS_RATES.
         */
        "aliaspeg": string;

        /**
         * An alias you own.
         */
        "alias": string;

        /**
         * Guid of offer to update
         */
        "guid": string;

        /**
         * category, 255 chars max.
         */
        "category": string;

        /**
         * title, 255 chars max.
         */
        "title": string;

        /**
         * quantity, > 0 or -1 for infinite
         */
        "quantity": number;

        /**
         * price in <currency>, > 0
         */
        "price": number;

        /**
         * description, 1 KB max.
         */
        "description": string;

        /**
         * Can this offer be seen in public search
         */
        "private": boolean;

        /**
         * Set this to the guid of a certificate you wish to sell
         */
        "certguid"?: string;

        /**
         * set to 1 if you only want those who control the affiliate's who are able to resell this offer via offerlink. Defaults to 1.
         */
        "excelusiveResell"?: boolean;
    }

}
