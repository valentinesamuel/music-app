import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  address
  ngOnInit() {
    this.address = this.spotify.authorize();
  }
  constructor(private spotify: SpotifyService) { }

  set() {

    console.log(this.address);

  }


}
