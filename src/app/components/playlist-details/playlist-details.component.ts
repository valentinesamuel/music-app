import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';
import { faPlayCircle, faHeart, faEllipsisH, faClock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-playlist-details',
  templateUrl: './playlist-details.component.html',
  styleUrls: ['./playlist-details.component.scss']
})



export class PlaylistDetailsComponent implements OnInit {
  playlistId
  description
  image
  name
  type
  tracks
  followers
  owner
  faPlayCircle = faPlayCircle
  faHeart = faHeart
  faEllipsisH = faEllipsisH
  faClock = faClock


  constructor(private router: Router,
    private route: ActivatedRoute, private spotifyService: SpotifyService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params) => {
        this.playlistId = params.id
        this.spotifyService.getSelectedPlaylists(this.playlistId).subscribe(
          (details) => {
            this.owner = details.owner
            this.followers= details.followers,


              this.description = details.description;
            this.type = details.type
            this.name = details.name
            this.image = details.images


            this.tracks = details.tracks
            this.tracks = this.tracks.items

          }
        )
      }
    );
  }
}

