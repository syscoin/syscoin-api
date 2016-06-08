/// <reference path="api.d.ts" />

namespace API.Client {
    'use strict';

    export interface CertListEntry {

        "cert"?: string;

        "title"?: string;

        "data"?: string;

        "private"?: boolean;

        "expiresIn"?: number;

        "expiresOn"?: number;

        "expired"?: boolean;

        "address"?: string;

        "alias"?: string;
    }

}
