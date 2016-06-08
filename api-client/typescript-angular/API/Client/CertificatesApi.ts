/// <reference path="api.d.ts" />

/* tslint:disable:no-unused-variable member-ordering */

namespace API.Client {
    'use strict';

    export class CertificatesApi {
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
         * scan and filter certs
         * @param regexp apply [regexp] on certes, empty means all certes
         * @param maxage look in last [maxage] blocks
         * @param from show results from number [from]
         * @param nb show [nb] results, 0 means all
         */
        public certfilter (regexp?: string, maxage?: string, from?: string, nb?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<CertListEntry>> {
            const localVarPath = this.basePath + '/certfilter';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
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
         * List all stored values of an cert.
         * @param certname 
         */
        public certhistory (certname: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<CertHistoryEntry>> {
            const localVarPath = this.basePath + '/certhistory';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'certname' is set
            if (!certname) {
                throw new Error('Missing required parameter certname when calling certhistory');
            }
            if (certname !== undefined) {
                queryParameters['certname'] = certname;
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
         * Show stored values of a single certificate.
         * @param certname 
         */
        public certinfo (certname: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<Cert> {
            const localVarPath = this.basePath + '/certinfo';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'certname' is set
            if (!certname) {
                throw new Error('Missing required parameter certname when calling certinfo');
            }
            if (certname !== undefined) {
                queryParameters['certname'] = certname;
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
         * Show stored values of a single certificate.
         */
        public certlist (extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<CertListEntry>> {
            const localVarPath = this.basePath + '/certlist';

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
         * Create a new Syscoin Certificate. Requires wallet passphrase to be set with walletpassphrase call.
         * @param request 
         */
        public certnew (request: CertNewRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<string>> {
            const localVarPath = this.basePath + '/certnew';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'request' is set
            if (!request) {
                throw new Error('Missing required parameter request when calling certnew');
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
         * scan all certs, starting at start-cert and returning a maximum number of entries (default 500)
         * @param startCert 
         * @param maxReturned 
         */
        public certscan (startCert?: string, maxReturned?: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<string>> {
            const localVarPath = this.basePath + '/certscan';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            if (startCert !== undefined) {
                queryParameters['start-cert'] = startCert;
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
         * Transfer certificate from one user to another. Requires wallet passphrase to be set with walletpassphrase call.
         * @param request 
         */
        public certtransfer (request: CertTransferRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<string>> {
            const localVarPath = this.basePath + '/certtransfer';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'request' is set
            if (!request) {
                throw new Error('Missing required parameter request when calling certtransfer');
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
         * Perform an update on an certificate you control. Requires wallet passphrase to be set with walletpassphrase call.
         * @param request 
         */
        public certupdate (request: CertUpdateRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<string>> {
            const localVarPath = this.basePath + '/certupdate';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'request' is set
            if (!request) {
                throw new Error('Missing required parameter request when calling certupdate');
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
