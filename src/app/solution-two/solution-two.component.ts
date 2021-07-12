import { Component, OnInit } from '@angular/core';
import { Globals } from '../globals';
@Component({
  selector: 'app-solution-two',
  templateUrl: './solution-two.component.html',
  styleUrls: ['./solution-two.component.css'],
  providers : [Globals]
})
export class SolutionTwoComponent implements OnInit {

  g : Globals;
  constructor(public globals: Globals){
    this.g = globals;
  }

  ngOnInit(): void {
  }

}
