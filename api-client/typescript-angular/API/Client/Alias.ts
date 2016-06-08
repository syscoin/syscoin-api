/// <reference path="api.d.ts" />

namespace API.Client {
    'use strict';

    export interface Alias {

        "name"?: string;

        "value"?: string;

        "privatevalue"?: string;

        "txid"?: string;

        "address"?: string;

        "ismine"?: boolean;

        "lastupdateHeight"?: number;

        "expiresIn"?: number;

        "expiresOn"?: number;

        "expired"?: boolean;
    }

}
