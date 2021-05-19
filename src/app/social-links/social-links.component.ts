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
      link: "https://www.linkedin.com/company/smacoteq-it"
    },
    {
      imageName: "Twitter.png",
      link: "https://twitter.com/ANTELOPEDAO"
    }, 
    {
      imageName: "Discord.png",
      link: "https://discord.gg/ZUK59p79aG"
    }, 
    {
      imageName: "Reddit.png",
      link: "#"
    }, 
    {
      imageName: "Telegram.png",
      link: "https://t.me/joinchat/fZil3r7YwaI3ZGQ0"
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
