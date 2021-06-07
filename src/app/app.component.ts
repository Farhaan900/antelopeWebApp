import { Component , OnInit } from '@angular/core';
import * as skrollr from 'skrollr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'antelope-dao-app';

  public ngOnInit(): void {
      skrollr.init();
  }
  // public ngAfterViewInit() : void{
  //     skrollr.init().refresh();
  // }
}

