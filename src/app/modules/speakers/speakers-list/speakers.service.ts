import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Speaker } from '../../../interfaces/speakers.interface';

@Injectable()
export class SpeakersService {
  constructor(private http: HttpClient) {}

  getSpeakers() {
    return this.http.get<Speaker[]>(`/api/speakers`);
  }
}
