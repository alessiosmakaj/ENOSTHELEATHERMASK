import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('heroVideo') heroVideo?: ElementRef<HTMLVideoElement>;

  videoReady = false;
  videoFailed = false;

  // Angular non riflette l'attributo `muted` sulla proprietà DOM: senza questo
  // il browser blocca l'autoplay al primo caricamento e parte solo dopo un refresh.
  ngAfterViewInit(): void {
    const video = this.heroVideo?.nativeElement;
    if (!video) return;
    video.muted = true;
    if (video.readyState >= 2) this.onVideoReady();
    video.play().catch(() => {});
  }

  play(): void {
    this.heroVideo?.nativeElement.play().catch(() => {});
  }

  onVideoReady(): void {
    this.videoReady = true;
  }

  onVideoError(): void {
    this.videoFailed = true;
  }
}
