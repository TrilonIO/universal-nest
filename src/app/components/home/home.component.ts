import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'home',
  template: `
    <h3>Example</h3>
    <div *ngIf="isBrowser" class="wrapper">
      <p>Homepage (show if browser render)</p>
    </div>
  `,
  styles: [
    `
      .container {
        margin: 16px;
        padding: 16px;
        border: 1px black solid;
      }
    `
  ]
})
export class HomeComponent implements OnInit {
  public title: string;
  public isBrowser: boolean = isPlatformBrowser(this.platformId);

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    this.title = `This is the Homepage!`;
  }
}
