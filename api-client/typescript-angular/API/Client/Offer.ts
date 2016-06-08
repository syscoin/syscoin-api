/// <reference path="api.d.ts" />

namespace API.Client {
    'use strict';

    export interface Offer {

        "offer"?: string;

        "cert"?: string;

        "txid"?: string;

        "expiresIn"?: number;

        "expiredBlock"?: number;

        "expired"?: boolean;

        "height"?: number;

        "address"?: string;

        "category"?: string;

        "title"?: string;

        "quantity"?: string;

        "currency"?: string;

        "sysprice"?: number;

        "price"?: number;

        "ismine"?: boolean;

        "commission"?: number;

        "offerlink"?: boolean;

        "offerlinkGuid"?: string;

        "exclusiveResell"?: boolean;

        "private"?: boolean;

        "btconly"?: boolean;

        "aliasPeg"?: string;

        "description"?: string;

        "alias&quot;"?: string;

        "accepts"?: Array<OfferAccept>;
    }

}
