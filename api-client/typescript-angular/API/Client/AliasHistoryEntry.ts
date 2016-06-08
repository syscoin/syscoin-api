/// <reference path="api.d.ts" />

namespace API.Client {
    'use strict';

    export interface AliasHistoryEntry {

        "name"?: string;

        "aliastype"?: string;

        "value"?: string;

        "privatevalue"?: string;

        "txid"?: string;

        "address"?: string;

        "lastupdateHeight"?: number;

        "expiresIn"?: number;

        "expiresOn"?: number;

        "expired"?: boolean;
    }

}
