import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  state : any  = "hide";
  toggle(){
    if(this.state == "hide"){
      this.state = "";
    }else{
      this.state = "hide";
    }
  }
  scrollToElement(element: any): void {
      console.log("scrolling to - ")
      let el = document.getElementById(element);
      console.log(el)
      el?.scrollIntoView({behavior: "smooth", inline: "nearest"});
  }

}
