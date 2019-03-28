/* tslint:disable:member-ordering no-unused-variable comment-format */
import { NgModule, ModuleWithProviders, Optional, SkipSelf, Provider, InjectionToken, APP_INITIALIZER } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

//import { CacheService } from './cache/cache.service';

//import { CommonInterceptor } from './interceptors/common.interceptor';
//import { PreloadService } from "./infrastructure/preload.service";

// export function preloadProviderFactory(preloadSvc: PreloadService) {
//   return () => preloadSvc.preload();
// }

@NgModule()
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. It should only be imported in your application\'s main module.');
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        //{ provide: HTTP_INTERCEPTORS, useClass: CommonInterceptor, multi: true },
        //{ provide: APP_INITIALIZER, useFactory: preloadProviderFactory, deps: [PreloadService], multi: true },
        //CacheService
      ]
    };
  }
}
