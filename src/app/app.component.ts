import { Component , OnInit } from '@angular/core';
import { Globals } from './globals';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [Globals]
})
export class AppComponent {
  title = 'antelope-dao-app';
  g: Globals;
  state : any  = "hide";

  constructor(public globals: Globals){
      this.g = globals;
  }
  public ngOnInit(): void {
    
  }
  
}

