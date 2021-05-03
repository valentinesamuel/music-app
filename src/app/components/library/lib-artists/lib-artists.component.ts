import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-lib-artists',
  templateUrl: './lib-artists.component.html',
  styleUrls: ['./lib-artists.component.scss']
})
export class LibArtistsComponent implements OnInit {
  topArtistData
  constructor(private spotifyServ: SpotifyService) { }

  ngOnInit(): void {
    this.spotifyServ.getTopArtists().subscribe((topArtists) => {
      this.topArtistData = topArtists;
      this.topArtistData = this.topArtistData.items
    })
  }

}
