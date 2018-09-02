import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { WindowService } from '../../services/window/window.service';

@Component({
  selector: 'home',
  template: `
    <h3>(Third party library) Dragula Example</h3>
    <div *ngIf="isBrowser" class='wrapper'>
      <div class='container' dragula='first-group'>
        <div>You can move these elements between these two containers</div>
        <div>Moving them anywhere else isn't quite possible</div>
        <div>There's also the possibility of moving elements around in the same container, changing their position</div>
      </div>
      <div class='container' dragula='first-group'>
        <div>This is the default use case. You only need to specify the containers you want to use</div>
        <div>More interactive use cases lie ahead</div>
        <div>Make sure to check out the <a href='https://github.com/valor-software/ng2-dragula'>documentation on GitHub!</a></div>
      </div>
    </div>
  `,
  styles: [`
    .container {
        margin: 16px;
        padding: 16px;
        border: 1px black solid;
    }
  `]
})
export class HomeComponent implements OnInit {

  public title: string;
  public isBrowser: boolean = isPlatformBrowser(this.platformId);

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private doc,
    private windowService: WindowService
  ) { }

  ngOnInit() {
    this.title = `This is the Homepage!`;
  }
}
