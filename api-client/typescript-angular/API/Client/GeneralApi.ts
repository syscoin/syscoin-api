/// <reference path="api.d.ts" />

/* tslint:disable:no-unused-variable member-ordering */

namespace API.Client {
    'use strict';

    export class GeneralApi {
        protected basePath = 'http://localhost:8000/';
        public defaultHeaders : any = {};

        static $inject: string[] = ['$http', '$httpParamSerializer', 'basePath'];

        constructor(protected $http: ng.IHttpService, protected $httpParamSerializer?: (d: any) => any, basePath?: string) {
            if (basePath !== undefined) {
                this.basePath = basePath;
            }
        }

        private extendObj<T1,T2>(objA: T1, objB: T2) {
            for(let key in objB){
                if(objB.hasOwnProperty(key)){
                    objA[key] = objB[key];
                }
            }
            return <T1&T2>objA;
        }

        /**
         * 
         * Add a nrequired-to-sign multisignature address to the wallet. Each key is a Syscoin address or hex-encoded public key. If &#39;account&#39; is specified (DEPRECATED), assign address to that account.
         * @param request 
         */
        public addmultisigaddress (request: AddMultisigAddressRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<string> {
            const localVarPath = this.basePath + '/addmultisigaddress';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'request' is set
            if (!request) {
                throw new Error('Missing required parameter request when calling addmultisigaddress');
            }
            let httpRequestParams: any = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: request,
                                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }
        /**
         * 
         * Reveals the private key corresponding to &#39;syscoinaddress&#39;. Then the importprivkey can be used with this output.
         * @param address The syscoin address for the private key
         */
        public dumpprivkey (address: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<string> {
            const localVarPath = this.basePath + '/dumpprivkey';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'address' is set
            if (!address) {
                throw new Error('Missing required parameter address when calling dumpprivkey');
            }
            if (address !== undefined) {
                queryParameters['address'] = address;
            }

            let httpRequestParams: any = {
                method: 'GET',
                url: localVarPath,
                json: true,
                                                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }
        /**
         * 
         * Dumps all wallet keys in a human-readable format.
         * @param filename The filename
         */
        public dumpwallet (filename: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<string> {
            const localVarPath = this.basePath + '/dumpwallet';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'filename' is set
            if (!filename) {
                throw new Error('Missing required parameter filename when calling dumpwallet');
            }
            if (filename !== undefined) {
                queryParameters['filename'] = filename;
            }

            let httpRequestParams: any = {
                method: 'GET',
                url: localVarPath,
                json: true,
                                                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }
        /**
         * 
         * DEPRECATED. Returns the account associated with the given address.
         * @param syscoinaddress The syscoin address for account lookup.
         */
        public getaccount (syscoinaddress: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<string> {
            const localVarPath = this.basePath + '/getaccount';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'syscoinaddress' is set
            if (!syscoinaddress) {
                throw new Error('Missing required parameter syscoinaddress when calling getaccount');
            }
            if (syscoinaddress !== undefined) {
                queryParameters['syscoinaddress'] = syscoinaddress;
            }

            let httpRequestParams: any = {
                method: 'GET',
                url: localVarPath,
                json: true,
                                                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }
        /**
         * 
         * DEPRECATED. Returns the current Syscoin address for receiving payments to this account.
         * @param account The account name for the address. It can also be set to the empty string \&quot;\&quot; to represent the default account. The account does not need to exist, it will be created and a new address created  if there is no account by the given name.
         */
        public getaccountaddress (account: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<string> {
            const localVarPath = this.basePath + '/getaccountaddress';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'account' is set
            if (!account) {
                throw new Error('Missing required parameter account when calling getaccountaddress');
            }
            if (account !== undefined) {
                queryParameters['account'] = account;
            }

            let httpRequestParams: any = {
                method: 'GET',
                url: localVarPath,
                json: true,
                                                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }
        /**
         * 
         * DEPRECATED. Returns the list of addresses for the given account.
         * @param account 
         */
        public getaddressesbyaccount (account: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<string>> {
            const localVarPath = this.basePath + '/getaddressesbyaccount';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'account' is set
            if (!account) {
                throw new Error('Missing required parameter account when calling getaddressesbyaccount');
            }
            if (account !== undefined) {
                queryParameters['account'] = account;
            }

            let httpRequestParams: any = {
                method: 'GET',
                url: localVarPath,
                json: true,
                                                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }
        /**
         * 
         * If account is not specified, returns the server&#39;s total available balance. If account is specified (DEPRECATED), returns the balance in the account. Note that the account \&quot;\&quot; is not the same as leaving the parameter out. The server total may be different to the balance in the default \&quot;\&quot; account.
         * @param account DEPRECATED. The selected account, or \&quot;*\&quot; for entire wallet. It may be the default account using \&quot;\&quot;.
         * @param minconf Only include transactions confirmed at least this many times.
         * @param includeWatchonly Also include balance in watchonly addresses (see &#39;importaddress&#39;)
         */
        public getbalance (account?: string, minconf?: number, includeWatchonly?: boolean, extraHttpRequestParams?: any ) : ng.IHttpPromise<number> {
            const localVarPath = this.basePath + '/getbalance';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            if (account !== undefined) {
                queryParameters['account'] = account;
            }

            if (minconf !== undefined) {
                queryParameters['minconf'] = minconf;
            }

            if (includeWatchonly !== undefined) {
                queryParameters['includeWatchonly'] = includeWatchonly;
            }

            let httpRequestParams: any = {
                method: 'GET',
                url: localVarPath,
                json: true,
                                                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }
        /**
         * 
         * Returns an object containing various state info.
         */
        public getinfo (extraHttpRequestParams?: any ) : ng.IHttpPromise<Info> {
            const localVarPath = this.basePath + '/getinfo';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            let httpRequestParams: any = {
                method: 'GET',
                url: localVarPath,
                json: true,
                                                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }
        /**
         * 
         * Returns a json object containing mining-related information.
         */
        public getmininginfo (extraHttpRequestParams?: any ) : ng.IHttpPromise<MiningInfo> {
            const localVarPath = this.basePath + '/getmininginfo';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            let httpRequestParams: any = {
                method: 'GET',
                url: localVarPath,
                json: true,
                                                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }
        /**
         * 
         * Returns a new Syscoin address for receiving payments. If &#39;account&#39; is specified (DEPRECATED), it is added to the address book so payments received with the address will be credited to &#39;account&#39;.
         * @param request 
         */
        public getnewaddress (request?: GetNewAddressRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<string> {
            const localVarPath = this.basePath + '/getnewaddress';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            let httpRequestParams: any = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: request,
                                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }
        /**
         * 
         * Returns data about each connected network node as a json array of objects.
         */
        public getpeerinfo (extraHttpRequestParams?: any ) : ng.IHttpPromise<PeerInfoResponse> {
            const localVarPath = this.basePath + '/getpeerinfo';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            let httpRequestParams: any = {
                method: 'GET',
                url: localVarPath,
                json: true,
                                                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }
        /**
         * 
         * DEPRECATED. Returns the total amount received by addresses with &lt;account&gt; in transactions with at least [minconf] confirmations.
         * @param account The selected account, may be the default account using \&quot;\&quot;.
         * @param minconf Only include transactions confirmed at least this many times.
         */
        public getreceivedbyaccount (account: string, minconf?: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<number> {
            const localVarPath = this.basePath + '/getreceivedbyaccount';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'account' is set
            if (!account) {
                throw new Error('Missing required parameter account when calling getreceivedbyaccount');
            }
            if (account !== undefined) {
                queryParameters['account'] = account;
            }

            if (minconf !== undefined) {
                queryParameters['minconf'] = minconf;
            }

            let httpRequestParams: any = {
                method: 'GET',
                url: localVarPath,
                json: true,
                                                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }
        /**
         * 
         * Returns the total amount received by the given syscoinaddress in transactions with at least minconf confirmations.
         * @param syscoinaddress The syscoin address for transactions.
         * @param minconf Only include transactions confirmed at least this many times.
         */
        public getreceivedbyaddress (syscoinaddress: string, minconf?: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<number> {
            const localVarPath = this.basePath + '/getreceivedbyaddress';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'syscoinaddress' is set
            if (!syscoinaddress) {
                throw new Error('Missing required parameter syscoinaddress when calling getreceivedbyaddress');
            }
            if (syscoinaddress !== undefined) {
                queryParameters['syscoinaddress'] = syscoinaddress;
            }

            if (minconf !== undefined) {
                queryParameters['minconf'] = minconf;
            }

            let httpRequestParams: any = {
                method: 'GET',
                url: localVarPath,
                json: true,
                                                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }
        /**
         * 
         * Get detailed information about in-wallet transaction &lt;txid&gt;
         * @param txid The transaction id
         * @param includeWatchonly Whether to include watchonly addresses in balance calculation and details[]
         */
        public gettransaction (txid: string, includeWatchonly?: boolean, extraHttpRequestParams?: any ) : ng.IHttpPromise<Transaction> {
            const localVarPath = this.basePath + '/gettransaction';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'txid' is set
            if (!txid) {
                throw new Error('Missing required parameter txid when calling gettransaction');
            }
            if (txid !== undefined) {
                queryParameters['txid'] = txid;
            }

            if (includeWatchonly !== undefined) {
                queryParameters['includeWatchonly'] = includeWatchonly;
            }

            let httpRequestParams: any = {
                method: 'GET',
                url: localVarPath,
                json: true,
                                                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }
        /**
         * 
         * Returns the server&#39;s total unconfirmed balance
         */
        public getunconfirmedbalance (extraHttpRequestParams?: any ) : ng.IHttpPromise<number> {
            const localVarPath = this.basePath + '/getunconfirmedbalance';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            let httpRequestParams: any = {
                method: 'GET',
                url: localVarPath,
                json: true,
                                                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }
        /**
         * 
         * Returns a new Syscoin (starts with 1) address for receiving payments. If &#39;account&#39; is specified (DEPRECATED), it is added to the address book so payments received with the address will be credited to &#39;account&#39;.
         * @param account DEPRECATED. The account name for the address to be linked to. If not provided, the default account \&quot;\&quot; is used. It can also be set to the empty string \&quot;\&quot; to represent the default account. The account does not need to exist, it will be created if there is no account by the given name.
         */
        public getv2address (account?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<string> {
            const localVarPath = this.basePath + '/getv2address';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            if (account !== undefined) {
                queryParameters['account'] = account;
            }

            let httpRequestParams: any = {
                method: 'GET',
                url: localVarPath,
                json: true,
                                                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }
        /**
         * 
         * Returns an object containing various wallet state info.
         */
        public getwalletinfo (extraHttpRequestParams?: any ) : ng.IHttpPromise<WalletInfo> {
            const localVarPath = this.basePath + '/getwalletinfo';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            let httpRequestParams: any = {
                method: 'GET',
                url: localVarPath,
                json: true,
                                                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }
        /**
         * 
         * Adds a script (in hex) or address that can be watched as if it were in your wallet but cannot be used to spend.
         * @param request 
         */
        public importaddress (request: ImportAddressRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<string> {
            const localVarPath = this.basePath + '/importaddress';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'request' is set
            if (!request) {
                throw new Error('Missing required parameter request when calling importaddress');
            }
            let httpRequestParams: any = {
                method: 'GET',
                url: localVarPath,
                json: true,
                data: request,
                                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }
        /**
         * 
         * Adds a private key (as returned by dumpprivkey) to your wallet.
         * @param request 
         */
        public importprivkey (request: ImportPrivKeyRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<string> {
            const localVarPath = this.basePath + '/importprivkey';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'request' is set
            if (!request) {
                throw new Error('Missing required parameter request when calling importprivkey');
            }
            let httpRequestParams: any = {
                method: 'GET',
                url: localVarPath,
                json: true,
                data: request,
                                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }
        /**
         * 
         * Adds a public key (in hex) that can be watched as if it were in your wallet but cannot be used to spend.
         * @param request 
         */
        public importpubkey (request: ImportPubKeyRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<string> {
            const localVarPath = this.basePath + '/importpubkey';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'request' is set
            if (!request) {
                throw new Error('Missing required parameter request when calling importpubkey');
            }
            let httpRequestParams: any = {
                method: 'GET',
                url: localVarPath,
                json: true,
                data: request,
                                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }
        /**
         * 
         * Imports keys from a wallet dump file (see dumpwallet).
         * @param request 
         */
        public importwallet (request: ImportWalletRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<string> {
            const localVarPath = this.basePath + '/importwallet';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'request' is set
            if (!request) {
                throw new Error('Missing required parameter request when calling importwallet');
            }
            let httpRequestParams: any = {
                method: 'GET',
                url: localVarPath,
                json: true,
                data: request,
                                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }
        /**
         * 
         * DEPRECATED. Returns Object that has account names as keys, account balances as values.
         * @param minconf Only include transactions with at least this many confirmations
         * @param includeWatchonly Include balances in watchonly addresses (see &#39;importaddress&#39;)
         */
        public listaccounts (minconf?: number, includeWatchonly?: boolean, extraHttpRequestParams?: any ) : ng.IHttpPromise<any> {
            const localVarPath = this.basePath + '/listaccounts';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            if (minconf !== undefined) {
                queryParameters['minconf'] = minconf;
            }

            if (includeWatchonly !== undefined) {
                queryParameters['includeWatchonly'] = includeWatchonly;
            }

            let httpRequestParams: any = {
                method: 'GET',
                url: localVarPath,
                json: true,
                                                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }
        /**
         * 
         * Lists groups of addresses which have had their common ownership made public by common use as inputs or as the resulting change in past transactions
         */
        public listaddressgroupings (extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<Array<AddressGrouping>>> {
            const localVarPath = this.basePath + '/listaddressgroupings';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            let httpRequestParams: any = {
                method: 'GET',
                url: localVarPath,
                json: true,
                                                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }
        /**
         * 
         * DEPRECATED. List balances by account.
         * @param minconf Only include transactions confirmed at least this many times.
         * @param includeempty Whether to include accounts that haven&#39;t received any payments.
         * @param includeWatchonly Whether to include watchonly addresses (see &#39;importaddress&#39;).
         */
        public listreceivedbyaccount (minconf?: number, includeempty?: boolean, includeWatchonly?: boolean, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<Account>> {
            const localVarPath = this.basePath + '/listreceivedbyaccount';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            if (minconf !== undefined) {
                queryParameters['minconf'] = minconf;
            }

            if (includeempty !== undefined) {
                queryParameters['includeempty'] = includeempty;
            }

            if (includeWatchonly !== undefined) {
                queryParameters['includeWatchonly'] = includeWatchonly;
            }

            let httpRequestParams: any = {
                method: 'GET',
                url: localVarPath,
                json: true,
                                                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }
        /**
         * 
         * List balances by receiving address.
         * @param minconf Only include transactions confirmed at least this many times.
         * @param includeempty Whether to include accounts that haven&#39;t received any payments.
         * @param includeWatchonly Whether to include watchonly addresses (see &#39;importaddress&#39;).
         */
        public listreceivedbyaddress (minconf?: number, includeempty?: boolean, includeWatchonly?: boolean, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<Account>> {
            const localVarPath = this.basePath + '/listreceivedbyaddress';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            if (minconf !== undefined) {
                queryParameters['minconf'] = minconf;
            }

            if (includeempty !== undefined) {
                queryParameters['includeempty'] = includeempty;
            }

            if (includeWatchonly !== undefined) {
                queryParameters['includeWatchonly'] = includeWatchonly;
            }

            let httpRequestParams: any = {
                method: 'GET',
                url: localVarPath,
                json: true,
                                                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }
        /**
         * 
         * Get all transactions in blocks since block [blockhash], or all transactions if omitted
         * @param blockhash The block hash to list transactions since
         * @param includeWatchonly Whether to include watchonly addresses (see &#39;importaddress&#39;).
         * @param targetConfirmations 
         */
        public listsinceblock (blockhash?: string, includeWatchonly?: boolean, targetConfirmations?: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<ListSinceBlockResponse>> {
            const localVarPath = this.basePath + '/listsinceblock';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            if (blockhash !== undefined) {
                queryParameters['blockhash'] = blockhash;
            }

            if (includeWatchonly !== undefined) {
                queryParameters['includeWatchonly'] = includeWatchonly;
            }

            if (targetConfirmations !== undefined) {
                queryParameters['target-confirmations'] = targetConfirmations;
            }

            let httpRequestParams: any = {
                method: 'GET',
                url: localVarPath,
                json: true,
                                                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }
        /**
         * 
         * Returns up to &#39;count&#39; most recent transactions skipping the first &#39;from&#39; transactions for account &#39;account&#39;.
         * @param account DEPRECATED. The account name. Should be \&quot;*\&quot;.
         * @param count The number of transactions to return
         * @param from The number of transactions to skip
         * @param includeWatchonly Include transactions to watchonly addresses (see &#39;importaddress&#39;)
         */
        public listtransactions (account?: string, count?: number, from?: number, includeWatchonly?: boolean, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<TransactionListEntry>> {
            const localVarPath = this.basePath + '/listtransactions';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            if (account !== undefined) {
                queryParameters['account'] = account;
            }

            if (count !== undefined) {
                queryParameters['count'] = count;
            }

            if (from !== undefined) {
                queryParameters['from'] = from;
            }

            if (includeWatchonly !== undefined) {
                queryParameters['includeWatchonly'] = includeWatchonly;
            }

            let httpRequestParams: any = {
                method: 'GET',
                url: localVarPath,
                json: true,
                                                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }
        /**
         * 
         * DEPRECATED. Move a specified amount from one account in your wallet to another.
         * @param request 
         */
        public move (request: MoveRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<boolean> {
            const localVarPath = this.basePath + '/move';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'request' is set
            if (!request) {
                throw new Error('Missing required parameter request when calling move');
            }
            let httpRequestParams: any = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: request,
                                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }
        /**
         * 
         * DEPRECATED (use sendtoaddress). Sent an amount from an account to a syscoin address. The amount is a real and is rounded to the nearest 0.00000001. Requires wallet passphrase to be set with walletpassphrase call.
         * @param request 
         */
        public sendfrom (request: SendFromRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<string> {
            const localVarPath = this.basePath + '/sendfrom';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'request' is set
            if (!request) {
                throw new Error('Missing required parameter request when calling sendfrom');
            }
            let httpRequestParams: any = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: request,
                                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }
        /**
         * 
         * Send multiple times. Amounts are double-precision floating point numbers. Requires wallet passphrase to be set with walletpassphrase call.
         * @param request 
         */
        public sendmany (request: SendManyRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<string> {
            const localVarPath = this.basePath + '/sendmany';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'request' is set
            if (!request) {
                throw new Error('Missing required parameter request when calling sendmany');
            }
            let httpRequestParams: any = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: request,
                                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }
        /**
         * 
         * Send an amount to a given address. The amount is a real and is rounded to the nearest 0.00000001. Requires wallet passphrase to be set with walletpassphrase call.
         * @param request 
         */
        public sendtoaddress (request: SendToAddressRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<string> {
            const localVarPath = this.basePath + '/sendtoaddress';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'request' is set
            if (!request) {
                throw new Error('Missing required parameter request when calling sendtoaddress');
            }
            let httpRequestParams: any = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: request,
                                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }
        /**
         * 
         * Sign a message with the private key of an address. Requires wallet passphrase to be set with walletpassphrase call.
         * @param request 
         */
        public signmessage (request: SignMessageRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<string> {
            const localVarPath = this.basePath + '/signmessage';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'request' is set
            if (!request) {
                throw new Error('Missing required parameter request when calling signmessage');
            }
            let httpRequestParams: any = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: request,
                                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }
        /**
         * 
         * Return information about the given syscoin address.
         * @param syscoinaddress 
         */
        public validateaddress (syscoinaddress: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<ValidateAddressResponse> {
            const localVarPath = this.basePath + '/validateaddress';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'syscoinaddress' is set
            if (!syscoinaddress) {
                throw new Error('Missing required parameter syscoinaddress when calling validateaddress');
            }
            if (syscoinaddress !== undefined) {
                queryParameters['syscoinaddress'] = syscoinaddress;
            }

            let httpRequestParams: any = {
                method: 'POST',
                url: localVarPath,
                json: true,
                                                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }
        /**
         * 
         * Verify a signed message
         * @param syscoinaddress The syscoin address to use for the signature.
         * @param signature The signature provided by the signer in base 64 encoding (see signmessage).
         * @param message The message that was signed.
         */
        public verifymessage (syscoinaddress: string, signature: string, message: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<boolean> {
            const localVarPath = this.basePath + '/verifymessage';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'syscoinaddress' is set
            if (!syscoinaddress) {
                throw new Error('Missing required parameter syscoinaddress when calling verifymessage');
            }
            // verify required parameter 'signature' is set
            if (!signature) {
                throw new Error('Missing required parameter signature when calling verifymessage');
            }
            // verify required parameter 'message' is set
            if (!message) {
                throw new Error('Missing required parameter message when calling verifymessage');
            }
            if (syscoinaddress !== undefined) {
                queryParameters['syscoinaddress'] = syscoinaddress;
            }

            if (signature !== undefined) {
                queryParameters['signature'] = signature;
            }

            if (message !== undefined) {
                queryParameters['message'] = message;
            }

            let httpRequestParams: any = {
                method: 'POST',
                url: localVarPath,
                json: true,
                                                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }
        /**
         * 
         * Removes the wallet encryption key from memory, locking the wallet. After calling this method, you will need to call walletpassphrase again before being able to call any methods which require the wallet to be unlocked.
         */
        public walletlock (extraHttpRequestParams?: any ) : ng.IHttpPromise<string> {
            const localVarPath = this.basePath + '/walletlock';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            let httpRequestParams: any = {
                method: 'POST',
                url: localVarPath,
                json: true,
                                                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }
        /**
         * 
         * Stores the wallet decryption key in memory for &#39;timeout&#39; seconds. This is needed prior to performing transactions related to private keys such as sending syscoins
         * @param request 
         */
        public walletpassphrase (request: WalletPassphraseRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<string> {
            const localVarPath = this.basePath + '/walletpassphrase';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'request' is set
            if (!request) {
                throw new Error('Missing required parameter request when calling walletpassphrase');
            }
            let httpRequestParams: any = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: request,
                                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }
        /**
         * 
         * Changes the wallet passphrase from &#39;oldpassphrase&#39; to &#39;newpassphrase&#39;.
         * @param request 
         */
        public walletpassphrasechange (request: WalletPassphraseChangeRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<string> {
            const localVarPath = this.basePath + '/walletpassphrasechange';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'request' is set
            if (!request) {
                throw new Error('Missing required parameter request when calling walletpassphrasechange');
            }
            let httpRequestParams: any = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: request,
                                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }
    }
}
