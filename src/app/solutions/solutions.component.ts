import { Component, OnInit } from '@angular/core';
import { Globals } from '../globals';
@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.css'],
  providers : [ Globals]
})
export class SolutionsComponent implements OnInit {
  g : Globals;
  constructor(public globals: Globals){
    this.g = globals;
  }

  ngOnInit(): void {
  }

}
