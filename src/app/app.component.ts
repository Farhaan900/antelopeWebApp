import { Component , OnInit } from '@angular/core';
// import * as skrollr from 'skrollr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'antelope-dao-app';
  public ngOnInit(): void {
      // var s = skrollr.init();
      // if(s.isMobile()){
      //   s.destroy();
      // }

  }
  // public ngAfterViewInit() : void{
  //     skrollr.init().refresh();
  // }
}

