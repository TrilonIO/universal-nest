import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeakersListComponent } from './speakers-list/speakers-list.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { SpeakersService } from './speakers-list/speakers.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: SpeakersListComponent, pathMatch: 'full'}
    ]),
    SharedModule
  ],
  providers: [
    SpeakersService
  ],
  declarations: [SpeakersListComponent]
})
export class SpeakersModule { }
