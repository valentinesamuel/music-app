import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faBookReader } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  faHome = faHome;
  faBookReader = faBookReader;
  faSearch = faSearch;
  faHeart = faHeart;
  faPlusSquare = faPlusSquare;
  searchActive = true;
  homeActive = true;
  libraryActive = true;
  constructor(private spotifyServ: SpotifyService) { }

  ngOnInit(): void {
    // this.spotifyServ.getAnArtist().subscribe((user) => {
    //   console.log('🤶🤶', user);

    // });
  }
  goHome(){
    this.homeActive = !this.homeActive;
    console.log(this.homeActive);
    
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
    this.libraryActive = !this.libraryActive;
    console.log(this.libraryActive);
    setTimeout(() => {
      this.libraryActive = !this.libraryActive;
    }, 1000);
  }
}
