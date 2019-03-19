import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Speaker } from '../../../interfaces/speakers.interface';

@Injectable()
export class SpeakersService {
  constructor(
    private http: HttpClient
  ) {}

  getSpeakers() {
    return this.http.get<Speaker[]>(`/api/speakers`);
  }
}
