/// <reference path="api.d.ts" />

/* tslint:disable:no-unused-variable member-ordering */

namespace API.Client {
    'use strict';

    export class EscrowApi {
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
         * Claim escrow funds released from seller or arbiter using escrowrefund. Requires wallet passphrase to be set with walletpassphrase call.
         * @param request 
         */
        public escrowclaimrefund (request: EscrowClaimRefundRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<string>> {
            const localVarPath = this.basePath + '/escrowclaimrefund';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'request' is set
            if (!request) {
                throw new Error('Missing required parameter request when calling escrowclaimrefund');
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
         * Claim escrow funds released from buyer or arbiter using escrowrelease. Requires wallet passphrase to be set with walletpassphrase call.
         * @param request 
         */
        public escrowclaimrelease (request: EscrowClaimReleaseRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<string>> {
            const localVarPath = this.basePath + '/escrowclaimrelease';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'request' is set
            if (!request) {
                throw new Error('Missing required parameter request when calling escrowclaimrelease');
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
         * Accepts an offer that&#39;s in escrow, to complete the escrow process. Requires wallet passphrase to be set with walletpassphrase call.
         * @param request 
         */
        public escrowcomplete (request: EscrowCompleteRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<string>> {
            const localVarPath = this.basePath + '/escrowcomplete';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'request' is set
            if (!request) {
                throw new Error('Missing required parameter request when calling escrowcomplete');
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
         * scan and filter escrows
         * @param search Find arbiter or seller via alias name or an escrow GUID, empty means all escrows
         * @param maxage look in last [maxage] blocks
         * @param from show results from number [from]
         * @param nb show [nb] results, 0 means all
         */
        public escrowfilter (search: string, maxage?: number, from?: number, nb?: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<EscrowListEntry>> {
            const localVarPath = this.basePath + '/escrowfilter';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'search' is set
            if (!search) {
                throw new Error('Missing required parameter search when calling escrowfilter');
            }
            if (search !== undefined) {
                queryParameters['search'] = search;
            }

            if (maxage !== undefined) {
                queryParameters['maxage'] = maxage;
            }

            if (from !== undefined) {
                queryParameters['from'] = from;
            }

            if (nb !== undefined) {
                queryParameters['nb'] = nb;
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
         * List all stored values of an escrow.
         * @param escrow 
         */
        public escrowhistory (escrow: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<EscrowHistoryEntry>> {
            const localVarPath = this.basePath + '/escrowhistory';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'escrow' is set
            if (!escrow) {
                throw new Error('Missing required parameter escrow when calling escrowhistory');
            }
            if (escrow !== undefined) {
                queryParameters['escrow'] = escrow;
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
         * Show stored values of a single escrow
         * @param escrow 
         */
        public escrowinfo (escrow: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<Escrow> {
            const localVarPath = this.basePath + '/escrowinfo';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'escrow' is set
            if (!escrow) {
                throw new Error('Missing required parameter escrow when calling escrowinfo');
            }
            if (escrow !== undefined) {
                queryParameters['escrow'] = escrow;
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
         * list my own escrows
         */
        public escrowlist (extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<EscrowListEntry>> {
            const localVarPath = this.basePath + '/escrowlist';

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
         * Create new arbitrated Syscoin escrow.
         * @param request 
         */
        public escrownew (request: EscrowNewRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<string>> {
            const localVarPath = this.basePath + '/escrownew';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'request' is set
            if (!request) {
                throw new Error('Missing required parameter request when calling escrownew');
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
         * scan all escrows, starting at start-escrow and returning a maximum number of entries (default 500)
         * @param startEscrow 
         * @param maxReturned 
         */
        public escrowscan (startEscrow?: string, maxReturned?: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<string>> {
            const localVarPath = this.basePath + '/escrowscan';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            if (startEscrow !== undefined) {
                queryParameters['start-escrow'] = startEscrow;
            }

            if (maxReturned !== undefined) {
                queryParameters['max-returned'] = maxReturned;
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
    }
}
