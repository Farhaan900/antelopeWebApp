import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-social-links',
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.css']
})
export class SocialLinksComponent implements OnInit {

  @Input() spacing: string | undefined;

  colorRed: string = "20px";

  socialLinks = [
    {
      imageName: "Linkedin.png",
      link: "#"
    },
    {
      imageName: "Twitter.png",
      link: "#"
    }, 
    {
      imageName: "Discord.png",
      link: "#"
    }, 
    {
      imageName: "Reddit.png",
      link: "#"
    }, 
    {
      imageName: "Telegram.png",
      link: "#"
    }, 
    {
      imageName: "Youtube.png",
      link: "#"
    },
  ]

  constructor() { }

  ngOnInit(): void {
    console.log(this.spacing)
  }

}
