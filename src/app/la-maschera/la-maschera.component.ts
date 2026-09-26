import { Component } from '@angular/core';

@Component({
  selector: 'app-la-maschera',
  templateUrl: './la-maschera.component.html',
  styleUrls: ['./la-maschera.component.scss']
})
export class LaMascheraComponent {
  readonly masks = [
    { title: 'MohawkEnos', images: ['MOHAWK', 'MOHAWK-2', 'MOHAWK-3', 'MOHAWK-4', 'MOHAWK-5', 'MOHAWK-6', 'MOHAWK-7'].map(f => `assets/masks/${f}.jpg`) },
    { title: 'SpikEnos', images: Array.from({ length: 12 }, (_, i) => `assets/masks/spikenos-${i + 1}.jpg`) },
    { title: 'DistopichEnos', images: Array.from({ length: 7 }, (_, i) => `assets/masks/distopichenos-${i + 1}.jpg`) },
    { title: 'Dr.Enos', images: Array.from({ length: 11 }, (_, i) => `assets/masks/drenos-${i + 1}.jpg`) },
    { title: 'SicariEnos', images: Array.from({ length: 9 }, (_, i) => `assets/masks/sicarienos-${i + 1}.jpg`) }
  ];

  onCarouselScroll(event: Event): void {
    const strip = event.target as HTMLElement;
    const viewport = strip.parentElement as HTMLElement;
    viewport.classList.toggle('is-start', strip.scrollLeft <= 2);
    viewport.classList.toggle('is-end', strip.scrollLeft + strip.clientWidth >= strip.scrollWidth - 2);
  }

  scrollCarousel(event: MouseEvent, direction: 1 | -1): void {
    const strip = (event.currentTarget as HTMLElement)
      .closest('.mask-carousel__viewport')
      ?.querySelector('.mask-carousel__strip') as HTMLElement | null;
    strip?.scrollBy({ left: direction * strip.clientWidth, behavior: 'smooth' });
  }
}
