/// <reference path="api.d.ts" />

namespace API.Client {
    'use strict';

    export interface PeerInfo {

        /**
         * Peer index
         */
        "id": number;

        /**
         * The ip address and port of the peer
         */
        "addr": string;

        /**
         * local address
         */
        "addrlocal": string;

        /**
         * The services offered
         */
        "services": string;

        /**
         * Whether peer has asked us to relay transactions to it
         */
        "relaytxes": boolean;

        /**
         * The time in seconds since epoch (Jan 1 1970 GMT) of the last send
         */
        "lastsend": number;

        /**
         * The time in seconds since epoch (Jan 1 1970 GMT) of the last receive
         */
        "lastrecv": number;

        /**
         * The total bytes sent
         */
        "bytessent": number;

        /**
         * The total bytes received
         */
        "bytesrecv": number;

        /**
         * The connection time in seconds since epoch (Jan 1 1970 GMT)
         */
        "conntime": number;

        /**
         * The time offset in seconds
         */
        "timeoffset": number;

        /**
         * ping time
         */
        "pingtime": number;

        /**
         * minimum observed ping time
         */
        "minping": number;

        /**
         * The peer version, such as 7001
         */
        "version": number;

        /**
         * The string version
         */
        "subver": string;

        /**
         * Inbound (true) or Outbound (false)
         */
        "inbound": boolean;

        /**
         * The starting height (block) of the peer
         */
        "startingheight": number;

        /**
         * The ban score
         */
        "banscore": number;

        /**
         * The last header we have in common with this peer
         */
        "syncedHeaders": number;

        /**
         * The last block we have in common with this peer
         */
        "syncedBlocks": number;

        /**
         * The heights of blocks we're currently asking from this peer
         */
        "inflight": Array<number>;

        /**
         * If this peer is whitelisted
         */
        "whitelisted": boolean;

        "bytessentPerMsg": ByteMessageInfo;

        "bytesrecvPerMsg": ByteMessageInfo;
    }

}
