import { isEmptyExpression } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from './services/spotify.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  token: any
  loggedIn = false
  constructor(private spotifyServ: SpotifyService, private route: ActivatedRoute) { }
  ngOnInit() {
    this.route.fragment.subscribe((d) => {
      if (d) {
        this.token=this.spotifyServ.getToken();
        // let te
        // te= typeof this.route.fragment
        // console.log(te);
        
      }else{
        this.token
      }
    });
  }


}
