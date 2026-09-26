import { Component } from '@angular/core';

@Component({
  selector: 'app-la-maschera',
  templateUrl: './la-maschera.component.html',
  styleUrls: ['./la-maschera.component.scss']
})
export class LaMascheraComponent {
  readonly mohawkImages = [
    'assets/masks/MOHAWK.jpg',
    'assets/masks/MOHAWK-2.jpg',
    'assets/masks/MOHAWK-3.jpg',
    'assets/masks/MOHAWK-4.jpg',
    'assets/masks/MOHAWK-5.jpg',
    'assets/masks/MOHAWK-6.jpg',
    'assets/masks/MOHAWK-7.jpg'
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
