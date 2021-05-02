import { Component, OnInit } from '@angular/core';
import { TeamCards } from '../team-cards'

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  teamMembers: Array<TeamCards> = new Array<TeamCards>()
  

  constructor() { 
    this.teamMembers = [
      {
        imageName: "ravi1.png",
        name: "Ravi",
        position: "CEO, Founder"
      },
      {
        imageName: "dheeraj.png",
        name: "Dheeraj Kumar",
        position: "CBDO, Co-Founder"
      },
      {
        imageName: "chakradhar.png",
        name: "Chakradhar",
        position: "COO, Co-Founder"
      },
      {
        imageName: "edward.png",
        name: "Edward Ryall",
        position: "CFO / Mentor"
      },
      {
        imageName: "ravi1.png",
        name: "Ravi",
        position: "CEO, Founder"
      },
      {
        imageName: "ravi1.png",
        name: "Ravi",
        position: "CEO, Founder"
      }
    ]

  }

  ngOnInit(): void {
  }

}
