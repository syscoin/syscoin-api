/// <reference path="api.d.ts" />

/* tslint:disable:no-unused-variable member-ordering */

namespace API.Client {
    'use strict';

    export class AliasesApi {
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
         * list affiliations with merchant offers.
         */
        public aliasaffiliates (extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<any>> {
            const localVarPath = this.basePath + '/aliasaffiliates';

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
         * Filter aliases
         * @param regexp apply [regexp] on aliases, empty means all aliases
         * @param maxage look in last [maxage] blocks
         * @param from show results from number [from]
         * @param nb show [nb] results, 0 means all
         */
        public aliasfilter (regexp: string, maxage?: number, from?: number, nb?: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<AliasListEntry>> {
            const localVarPath = this.basePath + '/aliasfilter';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'regexp' is set
            if (!regexp) {
                throw new Error('Missing required parameter regexp when calling aliasfilter');
            }
            if (regexp !== undefined) {
                queryParameters['regexp'] = regexp;
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
         * List all stored values of an alias.
         * @param aliasname 
         */
        public aliashistory (aliasname: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<AliasHistoryEntry>> {
            const localVarPath = this.basePath + '/aliashistory';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'aliasname' is set
            if (!aliasname) {
                throw new Error('Missing required parameter aliasname when calling aliashistory');
            }
            if (aliasname !== undefined) {
                queryParameters['aliasname'] = aliasname;
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
         * Show values of an alias.
         * @param aliasname 
         */
        public aliasinfo (aliasname: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<Alias> {
            const localVarPath = this.basePath + '/aliasinfo';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'aliasname' is set
            if (!aliasname) {
                throw new Error('Missing required parameter aliasname when calling aliasinfo');
            }
            if (aliasname !== undefined) {
                queryParameters['aliasname'] = aliasname;
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
         * List my own aliases.
         * @param aliasname Alias name to use as filter.
         */
        public aliaslist (aliasname?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<AliasListEntry>> {
            const localVarPath = this.basePath + '/aliaslist';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            if (aliasname !== undefined) {
                queryParameters['aliasname'] = aliasname;
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
         * Creates a new Syscoin Alias. Requires wallet passphrase to be set with walletpassphrase call.
         * @param request 
         */
        public aliasnew (request: AliasNewRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<string>> {
            const localVarPath = this.basePath + '/aliasnew';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'request' is set
            if (!request) {
                throw new Error('Missing required parameter request when calling aliasnew');
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
         * Scan all aliases, starting at start-name and returning a maximum number of entries (default 500)
         * @param startName 
         * @param maxReturned 
         */
        public aliasscan (startName?: string, maxReturned?: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<string>> {
            const localVarPath = this.basePath + '/aliasscan';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            if (startName !== undefined) {
                queryParameters['start-name'] = startName;
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
        /**
         * 
         * Update and possibly transfer an alias. Requires wallet passphrase to be set with walletpassphrase call.
         * @param request 
         */
        public aliasupdate (request: AliasUpdateRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<string>> {
            const localVarPath = this.basePath + '/aliasupdate';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'request' is set
            if (!request) {
                throw new Error('Missing required parameter request when calling aliasupdate');
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
