/// <reference path="api.d.ts" />

namespace API.Client {
    'use strict';

    export interface Escrow {

        "escrow"?: string;

        "time"?: string;

        "seller"?: string;

        "arbiter"?: string;

        "buyer"?: string;

        "offer"?: string;

        "offertitle"?: string;

        "offeracceptlink"?: string;

        "systotal"?: number;

        "sysfee"?: number;

        "total"?: number;

        "txid"?: string;

        "height"?: number;

        "payMessage"?: string;
    }

}
