/// <reference path="api.d.ts" />

namespace API.Client {
    'use strict';

    export interface AliasListEntry {

        "name": string;

        "value": string;

        "privatevalue": string;

        "expiresIn": number;

        "expiresOn": number;

        "expired": boolean;

        "pending": boolean;

        "txid"?: string;
    }

}
