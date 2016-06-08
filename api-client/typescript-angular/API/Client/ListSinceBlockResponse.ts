/// <reference path="api.d.ts" />

namespace API.Client {
    'use strict';

    export interface ListSinceBlockResponse {

        "transactions"?: Array<SinceBlockTransactionEntry>;

        /**
         * The hash of the last block
         */
        "lastblock"?: string;
    }

}
