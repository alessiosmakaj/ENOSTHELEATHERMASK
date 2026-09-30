import { AfterViewInit, Directive, ElementRef, OnDestroy } from '@angular/core';

// Video muto in loop, senza controlli: parte solo quando lo swipe lo porta in vista, come una gif.
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
      if (entry.isIntersecting) { video.play().catch(() => {}); }
      else { video.pause(); }
    }, { threshold: 0.6 });
    this.io.observe(video);
  }

  ngOnDestroy(): void {
    this.io?.disconnect();
  }
}
