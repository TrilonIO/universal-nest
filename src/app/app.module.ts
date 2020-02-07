import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from './modules/shared/shared.module';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    HttpClientModule,
    // Add .withServerTransition() to support Universal rendering.
    // The application ID can be any identifier which is unique on
    // the page.
    BrowserModule.withServerTransition({ appId: 'my-app' }),
    TransferHttpCacheModule,

    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      {
        path: 'speakers',
        loadChildren: () =>
          import('./modules/speakers/speakers.module').then(
            m => m.SpeakersModule
          )
      }
    ]),
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
