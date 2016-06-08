/// <reference path="api.d.ts" />

namespace API.Client {
    'use strict';

    export interface GetNewAddressRequest {

        /**
         * DEPRECATED. The account name for the address to be linked to. If not provided, the default account \"\" is used. It can also be set to the empty string \"\" to represent the default account. The account does not need to exist, it will be created if there is no account by the given name.
         */
        "account"?: string;
    }

}
