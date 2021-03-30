import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  authEndpoint = 'https://accounts.spotify.com/authorize';
  redirectUri = 'http://localhost:4200/';
  clientId = 'cde2240dafeb489e8b0cddabdf3a8844';
  finalUrl: any;
  scopes = [
    'user-read-currently-playing',
    'user-read-recently-played',
    'user-read-playback-state',
    'user-top-read',
    'user-modify-playback-state'];

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  authorize() {
    return this.finalUrl = `${this.authEndpoint}?client_id=${this.clientId}&response_type=code&redirect_uri=${this.redirectUri}&scopes?&scope=${this.scopes.join('%20')}&show_dialog=true`
  }

  getTokenFromUrl() {
    return this.route.queryParams
  }
}

