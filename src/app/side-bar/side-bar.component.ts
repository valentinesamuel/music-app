import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  faCoffee = faCoffee;
  faHome = faHome;
  constructor(private spotifyServ: SpotifyService) { }

  ngOnInit(): void {
    // this.spotifyServ.getAnArtist().subscribe((user) => {
    //   console.log('🤶🤶', user);

    // });
  }

}
