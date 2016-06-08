/// <reference path="api.d.ts" />

namespace API.Client {
    'use strict';

    export interface OfferNewRequest {

        /**
         * Alias peg you wish to use, leave blank to use SYS_RATES.
         */
        "aliaspeg": string;

        /**
         * An alias you own.
         */
        "alias": string;

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
         * The currency code that you want your offer to be in ie USD.
         */
        "currency": string;

        /**
         * Set this to the guid of a certificate you wish to sell
         */
        "certguid"?: string;

        /**
         * set to 1 if you only want those who control the affiliate's who are able to resell this offer via offerlink. Defaults to 1.
         */
        "excelusiveResell"?: boolean;

        /**
         * set to 1 if you only want accept Bitcoins for payment and your currency is set to BTC, note you cannot resell or sell a cert in this mode. Defaults to 0.
         */
        "acceptBTCOnly"?: boolean;
    }

}
