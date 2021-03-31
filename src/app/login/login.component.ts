import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  address: any
  token: any
  ngOnInit() {
    this.address = this.spotify.authorize();
    this.token = this.spotify.getToken();
  }
  constructor(private spotify: SpotifyService) { }
  set() {
    this.spotify.getAnArtist().subscribe((data) => {
      console.log(data);
    });
  }
}
