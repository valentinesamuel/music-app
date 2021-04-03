import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpotifyService } from '../services/spotify.service';
import { faPlay } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  test
  faplay = faPlay
  categoriesData
  topArtistData

  constructor(private spotifyServ: SpotifyService, private router: Router) { }

  ngOnInit(): void {
    this.spotifyServ.browseCategories().subscribe((categories) => {
      this.categoriesData = categories;
      this.categoriesData = this.categoriesData.categories.items
    });

    this.spotifyServ.getTopArtists().subscribe((topArtists) => {
      this.topArtistData = topArtists;
      this.topArtistData= this.topArtistData.items
    })
  }

}
