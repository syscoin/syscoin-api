/// <reference path="api.d.ts" />

namespace API.Client {
    'use strict';

    export interface MessageHistoryEntry {

        "gUID"?: string;

        "messagetype"?: string;

        "time"?: number;

        "from"?: string;

        "to"?: string;

        "subject"?: string;

        "message"?: string;
    }

}
