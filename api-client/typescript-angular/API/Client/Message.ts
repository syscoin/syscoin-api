/// <reference path="api.d.ts" />

namespace API.Client {
    'use strict';

    export interface Message {

        "gUID"?: string;

        "time"?: number;

        "from"?: string;

        "to"?: string;

        "subject"?: string;

        "message"?: string;

        "txid"?: string;

        "height"?: number;
    }

}
