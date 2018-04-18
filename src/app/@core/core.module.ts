import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbAuthModule, NbEmailPassAuthProvider, NbAuthJWTToken, NB_AUTH_TOKEN_CLASS } from '@nebular/auth';

import { throwIfAlreadyLoaded } from './module-import-guard';
import { DataModule } from './data/data.module';
import { AnalyticsService } from './utils/analytics.service';
import { AuthGuard } from './utils/auth-guard.service';
import { NotAuthGuard } from './utils/not-auth-guard.service';

const socialLinks = [
  {
    url: 'https://www.facebook.com',
    target: '_blank',
    icon: 'socicon-facebook',
  },
  {
    url: 'https://google.com',
    target: '_blank',
    icon: 'socicon-google',
  },
];

const NB_CORE_PROVIDERS = [
  ...DataModule.forRoot().providers,
  ...NbAuthModule.forRoot({
    providers: {
      email: {
        service: NbEmailPassAuthProvider,
        config: {
          delay: 0,
          login: {
            rememberMe: true,
            endpoint: 'https://easylocatusapi.herokuapp.com/api/auth/login',
          },
          logout: {
            endpoint: 'https://easylocatusapi.herokuapp.com/api/auth/logout',
          },
          register: {
            endpoint: 'https://easylocatusapi.herokuapp.com/api/auth/register',
          },
          resetPass: {
            endpoint: 'https://easylocatusapi.herokuapp.com/api/auth/reset-pass',
          }
        },
      },
    },
    forms: {
      login: {
        socialLinks: socialLinks,
      },
      register: {
        socialLinks: socialLinks,
      },
    },
  }).providers,
  { provide: NB_AUTH_TOKEN_CLASS, useValue: NbAuthJWTToken },
  AnalyticsService,
  AuthGuard,
  NotAuthGuard
];

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    NbAuthModule,
  ],
  declarations: [],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: CoreModule,
      providers: [
        ...NB_CORE_PROVIDERS,
      ],
    };
  }
}
