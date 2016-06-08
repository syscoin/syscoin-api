/// <reference path="api.d.ts" />

namespace API.Client {
    'use strict';

    export interface EscrowListEntry {

        "escrow"?: string;

        "time"?: number;

        "seller"?: string;

        "arbiter"?: string;

        "buyer"?: string;

        "offer"?: string;

        "offertitle"?: string;

        "offeracceptlink"?: string;

        "total"?: number;

        "status"?: string;

        "expired"?: boolean;
    }

}
