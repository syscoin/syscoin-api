/// <reference path="api.d.ts" />

namespace API.Client {
    'use strict';

    export interface Cert {

        "cert"?: string;

        "txid"?: string;

        "height"?: number;

        "title"?: string;

        "data"?: string;

        "private"?: boolean;

        "ismine"?: boolean;

        "address"?: string;

        "alias"?: string;

        "expiresIn"?: number;

        "expiresOn"?: number;

        "expired"?: boolean;
    }

}
