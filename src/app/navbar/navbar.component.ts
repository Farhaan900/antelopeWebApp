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

  scrollToElement(element: any): void {
    console.log("scrolling to - ")
    let el = document.getElementById(element);
    console.log(el)
    el?.scrollIntoView({behavior: "smooth", inline: "nearest"});
}

}
