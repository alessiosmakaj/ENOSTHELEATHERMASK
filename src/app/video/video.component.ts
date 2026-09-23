import { Component } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent {
  readonly sections = [
    { title: 'AI', showcase: false },
    { title: 'Cortometraggi', showcase: true },
  ];
}
