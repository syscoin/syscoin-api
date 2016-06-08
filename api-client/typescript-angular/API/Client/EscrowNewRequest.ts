/// <reference path="api.d.ts" />

namespace API.Client {
    'use strict';

    export interface EscrowNewRequest {

        "alias": string;

        "offer": string;

        "quantity": number;

        "message"?: string;

        "arbiter": string;
    }

}
