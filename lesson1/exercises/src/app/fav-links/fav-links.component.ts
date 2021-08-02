import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  title = "Favourite Links";
  favLinks = ["https://www.google.com","https://www.youtube.com"];
  constructor() { }

  ngOnInit() {
  }

}
