/// <reference path="api.d.ts" />

namespace API.Client {
    'use strict';

    export interface MiningInfo {

        /**
         * The current block
         */
        "blocks": number;

        /**
         * The last block size
         */
        "currentblocksize": number;

        /**
         * The last block transaction
         */
        "currentblocktx": number;

        /**
         * The current difficulty
         */
        "difficulty": number;

        /**
         * Current errors
         */
        "errors": string;

        /**
         * The processor limit for generation. -1 if no generation.
         */
        "genproclimit": number;

        /**
         * Current network hashrate in kbs
         */
        "networkhashps"?: number;

        /**
         * The size of the mem pool
         */
        "pooledtx": number;

        /**
         * If using testnet or not
         */
        "testnet": boolean;

        /**
         * current network name as defined in BIP70 (main, test, regtest)
         */
        "chain": string;

        /**
         * If the generation is on or off (see getgenerate or setgenerate calls)
         */
        "generate": boolean;
    }

}
