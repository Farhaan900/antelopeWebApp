import { Component, OnInit } from '@angular/core';
import { Globals } from '../globals';
@Component({
  selector: 'app-ecosystem',
  templateUrl: './ecosystem.component.html',
  styleUrls: ['./ecosystem.component.css'],
  providers : [Globals]
})
export class EcosystemComponent implements OnInit {

  g : Globals;
  constructor(public globals: Globals){
    this.g = globals;
  }

  ngOnInit(): void {
  }

}
