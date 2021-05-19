import { Component, HostListener, OnInit } from '@angular/core';
import { TeamCards } from '../team-cards'

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  teamMembers: Array<TeamCards> = new Array<TeamCards>()
  carouselWidth: number = 900;

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
    this.resizecarousel()
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    console.log(window.innerWidth);
    this.resizecarousel();
  }

  resizecarousel() {
    if (window.innerWidth < 500) {
      this.carouselWidth = 200
    }
    else if (window.innerWidth < 700) {
      this.carouselWidth = 470
    }
    else if (window.innerWidth < 1000) {
      this.carouselWidth = 670
    }
    else if (window.innerWidth >= 1000) {
      this.carouselWidth = 900
    }
  }

}
