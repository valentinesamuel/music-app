import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-lib-episodes',
  templateUrl: './lib-episodes.component.html',
  styleUrls: ['./lib-episodes.component.scss']
})
export class LibEpisodesComponent implements OnInit {
episodesData
  constructor(private spotifyServ: SpotifyService) { }

  ngOnInit(): void {

  
  }

}
