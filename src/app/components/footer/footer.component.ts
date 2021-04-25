import { Component, OnInit } from '@angular/core';
import { faHeart, faPlayCircle, faRandom, faRedo, faForward, faBackward, faPauseCircle, faPause, } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  status = true
  stateIcon = faPlayCircle;
  faHeart = faHeart;
  faPlayCircle = faPlayCircle;
  faRandom = faRandom;
  faRedo = faRedo;
  faForward = faForward;
  faPauseCircle = faPauseCircle;
  faBackward = faBackward;
  value
  constructor() { }

  ngOnInit(): void {
  }

  onPauseAndPlay() {
    this.status = !this.status;
    if (this.status) {
      this.stateIcon = faPlayCircle;
    } else {
      this.stateIcon = faPauseCircle;
    }

  }

  rangeValue(e) {
    console.log(e);

  }
}
