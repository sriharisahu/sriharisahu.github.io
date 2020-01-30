import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { AuthModule, OidcConfigService, OidcSecurityService, ConfigResult, OpenIdConfiguration } from 'angular-auth-oidc-client';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BioProfileComponent } from './components/bio-profile/bio-profile.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { VideoResumeComponent } from './components/video-resume/video-resume.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';
import { GenerateLeadComponent } from './components/generate-lead/generate-lead.component';

const oidc_configuration = 'assets/auth.clientConfiguration.json';
// if your config is on server side
// const oidc_configuration = ${window.location.origin}/api/ClientAppSettings
 
export function loadConfig(oidcConfigService: OidcConfigService) {
    return () => oidcConfigService.load(oidc_configuration);
}

@NgModule({
  declarations: [
    AppComponent,
    BioProfileComponent,
    PortfolioComponent,
    VideoResumeComponent,
    WorkExperienceComponent,
    GenerateLeadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    EffectsModule.forRoot([AppEffects]),
    AuthModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [
    OidcConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: loadConfig,
      deps: [OidcConfigService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private oidcSecurityService: OidcSecurityService, private oidcConfigService: OidcConfigService) {
    this.oidcConfigService.onConfigurationLoaded.subscribe((configResult: ConfigResult) => {
    
        // Use the configResult to set the configurations
        
        const config: OpenIdConfiguration = {
            stsServer: configResult.customConfig.stsServer,
            redirect_url: 'https://localhost:4200',
            client_id: 'angularClient',
            scope: 'openid profile email',
            response_type: 'code',
            silent_renew: true,
            silent_renew_url: 'https://localhost:4200/silent-renew.html',
            log_console_debug_active: true,
            // all other properties you want to set
        };

        this.oidcSecurityService.setupModule(config, configResult.authWellknownEndpoints);
    });
}
}
