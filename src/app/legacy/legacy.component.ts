import { Component, OnInit } from '@angular/core';
import { Globals } from '../globals';

@Component({
  selector: 'app-legacy',
  templateUrl: './legacy.component.html',
  styleUrls: ['./legacy.component.css'],
})
export class LegacyComponent implements OnInit {
  g: Globals;

  constructor(public globals: Globals){
      this.g = globals;
  }
  ngOnInit(): void {
    console.log(this.g.name)
  }
  id:any  = "access"
  tabChange(ids:any){
    console.log(ids);
    this.id = ids;
  }
}
