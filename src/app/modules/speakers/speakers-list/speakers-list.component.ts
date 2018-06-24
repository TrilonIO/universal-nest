import { Component, OnInit } from '@angular/core';
import { SpeakersService } from './speakers.service';
import { Observable } from 'rxjs';
import { Speaker } from '../../../interfaces/speakers.interface';

@Component({
  selector: 'app-speakers-list',
  template: `
    <h3>Speakers</h3>
    <ul>
      <li *ngFor="let speaker of speakers | async">
        <img [src]="speaker.image"> {{ speaker.name }}<br>
        {{ speaker.talk }}
      </li>
    </ul>
  `,
  styles: []
})
export class SpeakersListComponent implements OnInit {

  speakers: Observable<Speaker[]>;

  constructor(
    private speakersService: SpeakersService
  ) {
    this.speakers = this.speakersService.getSpeakers();
  }

  ngOnInit() { }

}
