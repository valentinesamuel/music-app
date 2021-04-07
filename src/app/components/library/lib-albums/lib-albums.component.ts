import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-lib-albums',
  templateUrl: './lib-albums.component.html',
  styleUrls: ['./lib-albums.component.scss']
})
export class LibAlbumsComponent implements OnInit {
  savedAlbumsData
  constructor(private spotifyServ: SpotifyService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    
    // this.spotifyServ.getSavedAlbums().subscribe((savedAlbums) => {
    //   this.savedAlbumsData = savedAlbums
    //   this.savedAlbumsData = this.savedAlbumsData.items
    // });
  }

}
