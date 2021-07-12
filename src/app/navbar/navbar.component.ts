import { Component, OnInit } from '@angular/core';
import { Globals } from '../globals';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers : [Globals]
})
export class NavbarComponent implements OnInit {
  
  g: Globals;
  state : any  = "hide";
  themeImage : any = "../../assets/images/SVG/dark_mode.svg";
  constructor(public globals: Globals){
      this.g = globals;
  }
  
  themeChange(){
    if(this.g.theme == "dark"){
      this.g.theme = "light";
      this.themeImage = "../../assets/images/SVG/dark_mode.svg";
    }else{
      if(confirm('Warning:\nDark Mode is In Development Mode \nDo you want to continue')){
        this.g.theme = "dark";
        this.themeImage = "../../assets/images/SVG/light mode.svg";
      } 
    }
    const body = document.body;
    body.setAttribute('class',this.g.theme);
  }

  langChange(){
    if(this.g.language == "Fr"){
      this.g.language = "En";
    }else{
      this.g.language = "Fr";
    }
  }

  toggle(){
    if(this.state == "hide"){
      this.state = "";
    }else{
      this.state = "hide";
    }
  }
  ngOnInit(): void {
    console.log(this.g.name)
  }

}
