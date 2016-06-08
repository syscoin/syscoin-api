/// <reference path="api.d.ts" />

namespace API.Client {
    'use strict';

    export interface OfferAcceptRequest {

        /**
         * An alias of the buyer.
         */
        "alias": string;

        /**
         * guidkey from offer.
         */
        "guid": string;

        /**
         * quantity to buy. Defaults to 1.
         */
        "quantity": number;

        /**
         * payment message to seller, 1KB max.
         */
        "message"?: string;

        /**
         * If you have paid in Bitcoin and the offer is in Bitcoin, enter the transaction ID here. Default is empty.
         */
        "btcTxId"?: string;

        /**
         * transaction id of the linking offer accept. For internal use only, leave blank
         */
        "linkedacceptguidtxhash"?: string;

        /**
         * If this offer accept is done by an escrow release. For internal use only, leave blank
         */
        "escrowTxHash"?: string;
    }

}
