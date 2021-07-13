import { Component, OnInit } from '@angular/core';
import { Globals } from '../globals';
@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css'],
})
export class CommunityComponent implements OnInit {

  g : Globals;
  constructor(public globals: Globals){
    this.g = globals;
  }

  ngOnInit(): void {
  }

}
