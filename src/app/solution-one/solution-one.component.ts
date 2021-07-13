import { Component, OnInit } from '@angular/core';
import { Globals } from '../globals';
@Component({
  selector: 'app-solution-one',
  templateUrl: './solution-one.component.html',
  styleUrls: ['./solution-one.component.css'],
})
export class SolutionOneComponent implements OnInit {

  g : Globals;
  constructor(public globals: Globals){
    this.g = globals;
  }

  ngOnInit(): void {
  }

}
