/// <reference path="api.d.ts" />

namespace API.Client {
    'use strict';

    export interface WalletInfo {

        /**
         * the wallet version
         */
        "walletversion"?: number;

        /**
         * the total confirmed balance of the wallet in SYS
         */
        "balance"?: number;

        /**
         * the total unconfirmed balance of the wallet in SYS
         */
        "unconfirmedBalance"?: number;

        /**
         * the total immature balance of the wallet in SYS
         */
        "immatureBalance"?: number;

        /**
         * the total number of transactions in the wallet
         */
        "txcount"?: number;

        /**
         * the timestamp (seconds since GMT epoch) of the oldest pre-generated key in the key pool
         */
        "keypoololdest"?: number;

        /**
         * how many new keys are pre-generated
         */
        "keypoolsize"?: number;

        /**
         * the timestamp in seconds since epoch (midnight Jan 1 1970 GMT) that the wallet is unlocked for transfers, or 0 if the wallet is locked
         */
        "unlockedUntil"?: number;

        /**
         * the transaction fee configuration, set in SYS/kB
         */
        "paytxfee"?: number;
    }

}
