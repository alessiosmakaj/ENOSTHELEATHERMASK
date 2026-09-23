import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  videoReady = false;
  videoFailed = false;

  onVideoReady(): void {
    this.videoReady = true;
  }

  onVideoError(): void {
    this.videoFailed = true;
  }
}
