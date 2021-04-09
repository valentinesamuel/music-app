import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.navigate(['shows'], { relativeTo: this.route })
  }
  toPodcast(){
    this.router.navigate(['shows'], { relativeTo: this.route })
  }
  toAlbums(){
    this.router.navigate(['albums'], { relativeTo: this.route })
  }
  toArtists(){
    this.router.navigate(['artists'], { relativeTo: this.route })
  }

}
