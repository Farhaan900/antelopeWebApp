import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Globals } from '../globals';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  g : Globals ;

  waitlistEmail = new FormControl('');
  constructor(public globals: Globals){
    this.g = globals;
  }

  ngOnInit(): void {
  }

  registerForWaitlist(formData: any){
    console.log(formData.value)
  }

}
