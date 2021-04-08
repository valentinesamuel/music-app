import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-lib-shows',
  templateUrl: './lib-shows.component.html',
  styleUrls: ['./lib-shows.component.scss']
})
export class LibShowsComponent implements OnInit {

  constructor(private spotifyServ:SpotifyService) { }

  ngOnInit(): void {
    this.spotifyServ.getShows().subscribe((shows)=>{
      console.log(shows);
      
    })
  }

}
