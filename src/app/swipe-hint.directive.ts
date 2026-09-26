import { AfterViewInit, Directive, ElementRef, Input, OnDestroy } from '@angular/core';

const CHEVRON = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 4 8 8-8 8" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

// Su mobile, quando il primo carosello con più foto della pagina entra in vista,
// lascia intravedere la foto successiva per far capire che si può scorrere.
@Directive({ selector: '[appSwipeHint]' })
export class SwipeHintDirective implements AfterViewInit, OnDestroy {
  @Input('appSwipeHint') enabled = true;
  private io?: IntersectionObserver;
  private timer?: number;

  constructor(private host: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    const el = this.host.nativeElement;
    if (!this.enabled || !window.matchMedia('(max-width: 768px)').matches) { return; }
    el.setAttribute('data-swipe-hint', '');
    if (document.querySelector('[data-swipe-hint]') !== el) { return; }

    this.io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        this.io?.disconnect();
        this.play(el);
      }
    }, { threshold: 0.6 });
    this.io.observe(el);
  }

  private play(el: HTMLElement): void {
    const hint = document.createElement('span');
    hint.className = 'swipe-hint';
    hint.innerHTML = CHEVRON;
    el.appendChild(hint);
    el.classList.add('swipe-nudge');

    const stop = () => {
      window.clearTimeout(this.timer);
      el.classList.remove('swipe-nudge');
      hint.remove();
    };
    el.addEventListener('pointerdown', stop, { once: true });
    this.timer = window.setTimeout(stop, 3000);
  }

  ngOnDestroy(): void {
    this.io?.disconnect();
    window.clearTimeout(this.timer);
  }
}
