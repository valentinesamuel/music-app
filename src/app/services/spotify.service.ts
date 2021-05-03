import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export interface PlaylistData {
  description,
  images,
  name,
  tracks,
  type
}
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  authEndpoint = 'https://accounts.spotify.com/authorize';
  redirectUri = 'http://localhost:4200/';
  clientId = 'cde2240dafeb489e8b0cddabdf3a8844';
  finalUrl: any;
  requestEndPoint = 'https://api.spotify.com/v1/me/'

  requestToken: any;
  scopes = [
    'user-read-currently-playing',
    'user-read-playback-position',
    'user-read-recently-played',
    'playlist-modify-public',
    'user-read-playback-state',
    'user-top-read',
    'user-library-read',
    'playlist-read-private',
    'user-modify-playback-state'];

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  authorize() {
    return this.finalUrl = `${this.authEndpoint}?client_id=${this.clientId}&response_type=token&redirect_uri=${this.redirectUri}&scopes?&scope=${this.scopes.join('%20')}&show_dialog=true`
  }

  getToken() {
    return this.route.fragment.subscribe((fragment: string) => {
      try {
        this.requestToken = fragment.substring(0, fragment.indexOf("&")).split("=").pop();
      } catch (error) {
      }
    });

  }

  getTheUser() {
    return this.http.get('https://api.spotify.com/v1/me', {
      headers: new HttpHeaders(
        { 'Authorization': `Bearer ${this.requestToken}` }
      )
    })
  }

  getUserPlaylist() {
    return this.http.get('https://api.spotify.com/v1/me/playlists', {
      headers: new HttpHeaders(
        { 'Authorization': `Bearer ${this.requestToken}` }
      )
    })
  }

  browseCategories() {
    return this.http.get('https://api.spotify.com/v1/browse/categories', {
      headers: new HttpHeaders(
        { 'Authorization': `Bearer ${this.requestToken}` }
      )
    })
  }

  getTopArtists() {
    return this.http.get('https://api.spotify.com/v1/me/top/artists', {
      headers: new HttpHeaders(
        { 'Authorization': `Bearer ${this.requestToken}` }
      )
    })
  }

  getTopTracks() {
    return this.http.get('https://api.spotify.com/v1/me/top/tracks', {
      headers: new HttpHeaders(
        { 'Authorization': `Bearer ${this.requestToken}` }
      )
    })
  }

  getSavedAlbums() {
    return this.http.get('https://api.spotify.com/v1/me/albums', {
      headers: new HttpHeaders(
        { 'Authorization': `Bearer ${this.requestToken}` }
      )
    })
  }

  getShows() {
    return this.http.get('https://api.spotify.com/v1/me/shows', {
      headers: new HttpHeaders(
        { 'Authorization': `Bearer ${this.requestToken}` }
      )
    })
  }

  getSelectedPlaylists(id) {
    return this.http.get<PlaylistData>(`https://api.spotify.com/v1/playlists/${id}`, {
      headers: new HttpHeaders(
        { 'Authorization': `Bearer ${this.requestToken}` }
      )
    })
  }
}

