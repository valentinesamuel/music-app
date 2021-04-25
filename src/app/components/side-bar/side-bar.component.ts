import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { faPlusSquare, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faBookReader } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  faHome: IconDefinition = faHome;
  faBookReader: IconDefinition = faBookReader;
  faSearch: IconDefinition = faSearch;
  faHeart: IconDefinition = faHeart;
  faPlusSquare: IconDefinition = faPlusSquare;
  searchActive = true;
  homeActive = true;
  libraryActive = true;
  playlistData
  id

  constructor(private spotifyServ: SpotifyService, private router: Router) { }

  ngOnInit(): void {
    //This should be uncommented  // this.router.navigate(['/home']);
    //This is for the main time to allow me develop the playlist page in peace
    this.router.navigate(['/playlist', '37i9dQZEVXcRy4kETfZp0D']);
    // this.spotifyServ.getSelectedPlaylists('37i9dQZEVXcRy4kETfZp0D').subscribe(
    //   (details) => {
    //     console.log(details);
    //   }
    // )

    this.spotifyServ.getUserPlaylist().subscribe((playlist) => {
      this.playlistData = playlist
      this.playlistData = this.playlistData.items
    })
  }
  goHome() {
    this.router.navigate(['/home']);
    this.homeActive = !this.homeActive;


    setTimeout(() => {
      this.homeActive = !this.homeActive;
    }, 1000);
  }

  goToSearch() {
    this.searchActive = !this.searchActive;
    console.log(this.searchActive);
    setTimeout(() => {
      this.searchActive = !this.searchActive;
    }, 1000);
  }

  goToLibrary() {
    this.router.navigate(['/library', 'shows']);
    this.libraryActive = !this.libraryActive;
    setTimeout(() => {
      this.libraryActive = !this.libraryActive;
    }, 1000);
  }

  goToPlaylist(e) {
    this.router.navigate(['/playlist', e.target.id]);
  }

}
