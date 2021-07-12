import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-token-economics',
  templateUrl: './token-economics.component.html',
  styleUrls: ['./token-economics.component.css']
})
export class TokenEconomicsComponent implements OnInit {


    constructor() {
       
    }

    stats : any = [
      {
        "name" : "Community",
        "percentage" : "75%",
        "color" :"#FE815F"
      },
      {
        "name" : "Seed",
        "percentage" : "2%",
        "color" : "#87045F"
      },
      {
        "name" : "Private",
        "percentage" : "7%",
        "color" : "#BA2E5D"
      },
      {
        "name" : "Public",
        "percentage" : "0.7%",
        "color" : "#FEF2CD"
      },
      {
        "name" : "Advisors",
        "percentage" : "2%",
        "color" : "#FEC100"
      },
      {
        "name" : "Governance",
        "percentage" : "13.3%",
        "color" : "#663201"
      }
    ]

    ngOnInit() {}

}
