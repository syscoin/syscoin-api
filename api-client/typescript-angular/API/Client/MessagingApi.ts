/// <reference path="api.d.ts" />

/* tslint:disable:no-unused-variable member-ordering */

namespace API.Client {
    'use strict';

    export class MessagingApi {
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
         * List all stored values of a message.
         * @param message 
         */
        public messagehistory (message: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<MessageHistoryEntry>> {
            const localVarPath = this.basePath + '/messagehistory';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'message' is set
            if (!message) {
                throw new Error('Missing required parameter message when calling messagehistory');
            }
            if (message !== undefined) {
                queryParameters['message'] = message;
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
         * Show stored values of a single message.
         * @param guid 
         */
        public messageinfo (guid: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<Message> {
            const localVarPath = this.basePath + '/messageinfo';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'guid' is set
            if (!guid) {
                throw new Error('Missing required parameter guid when calling messageinfo');
            }
            if (guid !== undefined) {
                queryParameters['guid'] = guid;
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
         * List my own messages
         */
        public messagelist (extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<MessageListEntry>> {
            const localVarPath = this.basePath + '/messagelist';

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
         * Create a new Syscoin encrypted message.
         * @param request 
         */
        public messagenew (request: MessageNewRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<string>> {
            const localVarPath = this.basePath + '/messagenew';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'request' is set
            if (!request) {
                throw new Error('Missing required parameter request when calling messagenew');
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
         * list my sent messages
         */
        public messagesentlist (extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<MessageListEntry>> {
            const localVarPath = this.basePath + '/messagesentlist';

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
    }
}
