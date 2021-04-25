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
    this.router.navigate(['/home']);

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
    console.log(e);
    this.spotifyServ.getSelectedPlaylists(e.target.href).subscribe((play) => {
      console.log(play);

    })
  }

}
