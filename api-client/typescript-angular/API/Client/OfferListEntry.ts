/// <reference path="api.d.ts" />

namespace API.Client {
    'use strict';

    export interface OfferListEntry {

        "offer"?: string;

        "cert"?: string;

        "title"?: string;

        "category"?: string;

        "description"?: string;

        "price"?: number;

        "currency"?: string;

        "commission"?: number;

        "quantity"?: number;

        "address"?: string;

        "exclusiveResell"?: boolean;

        "btconly"?: boolean;

        "aliasPeg"?: string;

        "private"?: boolean;

        "alias"?: string;

        "expiresIn"?: number;

        "expiresOn"?: number;

        "expired"?: boolean;

        "pending"?: boolean;
    }

}
