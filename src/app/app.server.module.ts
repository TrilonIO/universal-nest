import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import {
  ServerModule,
  ServerTransferStateModule
} from "@angular/platform-server";
import { AppComponent } from "./app.component";
import { AppModule } from "./app.module";
import { UniversalInterceptorService } from "./modules/shared/interceptors/universal-interceptor.service";

@NgModule({
  imports: [
    // The AppServerModule should import your AppModule followed
    // by the ServerModule from @angular/platform-server.
    AppModule,
    ServerModule,
    ServerTransferStateModule
  ],
  // Since the bootstrapped component is not inherited from your
  // imported AppModule, it needs to be repeated here.
  bootstrap: [AppComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UniversalInterceptorService,
      multi: true // <-- important (you can have many interceptors)
    }
  ]
})
export class AppServerModule {}
