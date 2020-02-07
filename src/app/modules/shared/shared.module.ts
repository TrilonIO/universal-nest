import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UniversalInterceptorService } from './interceptors/universal-interceptor.service';

@NgModule({
  imports: [CommonModule],
  providers: [UniversalInterceptorService],
  declarations: []
})
export class SharedModule {}
