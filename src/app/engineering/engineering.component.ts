import { Component, OnInit } from '@angular/core';
import { Globals } from '../globals';
@Component({
  selector: 'app-engineering',
  templateUrl: './engineering.component.html',
  styleUrls: ['./engineering.component.css'],
})
export class EngineeringComponent implements OnInit {
  g : Globals;
  constructor(public globals: Globals){
    this.g = globals;
  }
  ngOnInit(): void {
  }

}
