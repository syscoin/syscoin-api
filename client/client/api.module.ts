import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { AliasesService } from './api/aliases.service';
import { AssetService } from './api/asset.service';
import { BlockmarketService } from './api/blockmarket.service';
import { CertificatesService } from './api/certificates.service';
import { EscrowService } from './api/escrow.service';
import { GeneralService } from './api/general.service';
import { MasternodesService } from './api/masternodes.service';
import { OffersService } from './api/offers.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    AliasesService,
    AssetService,
    BlockmarketService,
    CertificatesService,
    EscrowService,
    GeneralService,
    MasternodesService,
    OffersService ]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        }
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
