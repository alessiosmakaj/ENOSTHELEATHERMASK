import { AfterViewInit, Directive, ElementRef, OnDestroy } from '@angular/core';

// Video muto in loop, senza controlli: parte solo quando lo swipe lo porta in vista, come una gif.
// Un solo video alla volta in riproduzione: su scroll veloce da telefono, far partire e fermare
// tanti video insieme (decoder multipli) è la causa più probabile dei crash osservati su mobile.
let currentlyPlaying: HTMLVideoElement | null = null;

@Directive({ selector: 'video[appPlayOnVisible]' })
export class PlayOnVisibleDirective implements AfterViewInit, OnDestroy {
  private io?: IntersectionObserver;

  constructor(private host: ElementRef<HTMLVideoElement>) {}

  ngAfterViewInit(): void {
    const video = this.host.nativeElement;
    // L'attributo muted da solo non basta: Angular può ricreare il nodo dopo il parsing
    // e lasciare .muted a false, bloccando l'autoplay silenzioso.
    video.muted = true;
    this.io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        if (currentlyPlaying && currentlyPlaying !== video) { currentlyPlaying.pause(); }
        currentlyPlaying = video;
        video.play().catch(() => {});
      } else {
        video.pause();
        if (currentlyPlaying === video) { currentlyPlaying = null; }
      }
    }, { threshold: 0.6 });
    this.io.observe(video);
  }

  ngOnDestroy(): void {
    this.io?.disconnect();
    if (currentlyPlaying === this.host.nativeElement) { currentlyPlaying = null; }
  }
}
