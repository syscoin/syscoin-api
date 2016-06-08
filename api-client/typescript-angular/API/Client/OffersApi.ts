/// <reference path="api.d.ts" />

/* tslint:disable:no-unused-variable member-ordering */

namespace API.Client {
    'use strict';

    export class OffersApi {
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
         * Accept&amp;Pay for a confirmed offer.
         * @param request 
         */
        public offeraccept (request: OfferAcceptRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<string>> {
            const localVarPath = this.basePath + '/offeraccept';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'request' is set
            if (!request) {
                throw new Error('Missing required parameter request when calling offeraccept');
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
         * list my offer accepts
         */
        public offeracceptlist (extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<OfferAccept>> {
            const localVarPath = this.basePath + '/offeracceptlist';

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
         * Add to the affiliate list of your offer(controls who can resell). Requires wallet passphrase to be set with walletpassphrase call.
         * @param request 
         */
        public offeraddwhitelist (request: OfferAddWhitelistRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<string>> {
            const localVarPath = this.basePath + '/offeraddwhitelist';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'request' is set
            if (!request) {
                throw new Error('Missing required parameter request when calling offeraddwhitelist');
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
         * Clear the affiliate list of your offer(controls who can resell). Requires wallet passphrase to be set with walletpassphrase call.
         * @param request 
         */
        public offerclearwhitelist (request: OfferClearWhitelistRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<string>> {
            const localVarPath = this.basePath + '/offerclearwhitelist';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'request' is set
            if (!request) {
                throw new Error('Missing required parameter request when calling offerclearwhitelist');
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
         * scan and filter offeres
         * @param regexp apply [regexp] on offeres, empty means all offeres
         * @param maxage look in last [maxage] blocks
         * @param from show results from number [from]
         * @param nb show [nb] results, 0 means all
         */
        public offerfilter (regexp: string, maxage?: number, from?: number, nb?: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<OfferListEntry>> {
            const localVarPath = this.basePath + '/offerfilter';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'regexp' is set
            if (!regexp) {
                throw new Error('Missing required parameter regexp when calling offerfilter');
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
         * List all stored values of an offer.
         * @param offer 
         */
        public offerhistory (offer: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<OfferHistoryEntry>> {
            const localVarPath = this.basePath + '/offerhistory';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'offer' is set
            if (!offer) {
                throw new Error('Missing required parameter offer when calling offerhistory');
            }
            if (offer !== undefined) {
                queryParameters['offer'] = offer;
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
         * Show values of an offer.
         * @param guid 
         */
        public offerinfo (guid: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<Offer> {
            const localVarPath = this.basePath + '/offerinfo';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'guid' is set
            if (!guid) {
                throw new Error('Missing required parameter guid when calling offerinfo');
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
         * Requires wallet passphrase to be set with walletpassphrase call.
         * @param request 
         */
        public offerlink (request: OfferLinkRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<string>> {
            const localVarPath = this.basePath + '/offerlink';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'request' is set
            if (!request) {
                throw new Error('Missing required parameter request when calling offerlink');
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
         * list my own offers
         */
        public offerlist (extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<OfferListEntry>> {
            const localVarPath = this.basePath + '/offerlist';

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
         * Create a new offer on the Syscoin decentralized marketplace. Requires wallet passphrase to be set with walletpassphrase call.
         * @param request 
         */
        public offernew (request: OfferNewRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<string>> {
            const localVarPath = this.basePath + '/offernew';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'request' is set
            if (!request) {
                throw new Error('Missing required parameter request when calling offernew');
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
         * Remove from the affiliate list of your offer(controls who can resell). Requires wallet passphrase to be set with walletpassphrase call.
         * @param request 
         */
        public offerremovewhitelist (request: OfferRemoveWhitelistRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<string>> {
            const localVarPath = this.basePath + '/offerremovewhitelist';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'request' is set
            if (!request) {
                throw new Error('Missing required parameter request when calling offerremovewhitelist');
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
         * scan all offers, starting at start-offer and returning a maximum number of entries (default 500)
         * @param startOffer 
         * @param maxReturned 
         */
        public offerscan (startOffer?: string, maxReturned?: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<string>> {
            const localVarPath = this.basePath + '/offerscan';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            if (startOffer !== undefined) {
                queryParameters['start-offer'] = startOffer;
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
         * Perform an update on an offer you control. Requires wallet passphrase to be set with walletpassphrase call.
         * @param request 
         */
        public offerupdate (request: OfferUpdateRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<string>> {
            const localVarPath = this.basePath + '/offerupdate';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'request' is set
            if (!request) {
                throw new Error('Missing required parameter request when calling offerupdate');
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
         * List all affiliates for this offer.
         * @param offerguid 
         */
        public offerwhitelist (offerguid: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<OfferWhitelistEntry>> {
            const localVarPath = this.basePath + '/offerwhitelist';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'offerguid' is set
            if (!offerguid) {
                throw new Error('Missing required parameter offerguid when calling offerwhitelist');
            }
            if (offerguid !== undefined) {
                queryParameters['offerguid'] = offerguid;
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
