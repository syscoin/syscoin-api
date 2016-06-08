/// <reference path="api.d.ts" />

namespace API.Client {
    'use strict';

    export interface OfferHistoryEntry {

        "offer"?: string;

        "offertype"?: string;

        "cert"?: string;

        "title"?: string;

        "category"?: string;

        "description"?: string;

        "price"?: number;

        "currency"?: string;

        "commission"?: number;

        "quantity"?: number;

        "txid"?: string;

        "alias"?: string;

        "expiresIn"?: number;

        "expiresOn"?: number;

        "expired"?: boolean;

        "height"?: boolean;
    }

}
