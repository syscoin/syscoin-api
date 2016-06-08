/// <reference path="api.d.ts" />

namespace API.Client {
    'use strict';

    export interface EscrowHistoryEntry {

        "escrow"?: string;

        "escrowtype"?: string;

        "txid"?: string;

        "seller"?: string;

        "arbiter"?: string;

        "buyer"?: string;

        "offer"?: string;

        "offertitle"?: string;

        "offeracceptlink"?: string;

        "total"?: number;

        "expired"?: boolean;

        "height"?: number;
    }

}
