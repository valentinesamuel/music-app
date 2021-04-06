import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {
savedAlbumsData
  constructor(private spotifyServ:SpotifyService) { }

  ngOnInit(): void {
    this.spotifyServ.getSavedAlbums().subscribe((savedAlbums) => {
      this.savedAlbumsData= savedAlbums
      this.savedAlbumsData= this.savedAlbumsData.items
    });
  }

}
