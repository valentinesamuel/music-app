import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';
import { faPlayCircle, faHeart, faEllipsisH } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-playlist-details',
  templateUrl: './playlist-details.component.html',
  styleUrls: ['./playlist-details.component.scss']
})
export class PlaylistDetailsComponent implements OnInit {
  playlistId

  faPlayCircle = faPlayCircle
  faHeart = faHeart
  faEllipsisH= faEllipsisH

  constructor(private router: Router,
    private route: ActivatedRoute, private spotifyService: SpotifyService) { }

  ngOnInit(): void {
    // this.route.params.subscribe(
    //   (params) => {
    //     this.playlistId = params.id
    //     this.spotifyService.getSelectedPlaylists('37i9dQZEVXcRy4kETfZp0D').subscribe(
    //       (details) => {
    //         console.log(details);
    //       }
    //     )
    //   }
    // );

     
    }


}
