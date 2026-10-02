import { Component } from '@angular/core';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.scss']
})
export class PerformanceComponent {
  readonly performanceVideos = [
    { title: 'Lofiforme e Dominazione Bipolare · 2026', src: 'assets/video/lofiforme-dominazione-bipolare.mp4' },
    { title: 'Cadavere 01 02 · 2026', src: 'assets/video/cadavere-01-02.mp4' },
    { title: 'Carne Marchiata · 2025', src: 'assets/video/carne-marchiata.mp4' },
    { title: 'Amore in Putrefazionenos · 2025', src: 'assets/video/amore-in-putrefazionenos.mp4' },
    { title: 'Necropolenos · 2025', src: 'assets/video/necropolenos-performance.mp4' },
    { title: 'Dipendentenos · 2024', src: 'assets/enos.mp4' },
    { title: 'Cadaverenos · 2024', src: 'assets/video/cadaverenos-performance.mp4' },
    { title: 'Sicarienos · 2024', src: 'assets/video/sicarienos-performance.mp4' },
    { title: 'Noirealismenos · 2024', src: 'assets/video/noirealismenos.mp4' },
  ];

  // "images" presente = carosello (video muto in loop come prima slide, poi le foto); altrimenti video singolo con controlli.
  readonly tattooVideos: { title: string; src: string; images?: string[] }[] = [
    { title: 'Devozione · 2026', src: 'assets/tattoo/devozione-ia.mp4', images: ['assets/tattoo/devozione-1.jpg', 'assets/tattoo/devozione-2.jpg'] },
    { title: 'Maradona · 2026', src: 'assets/video/maradona.mp4' },
    { title: 'Carneficina · 2026', src: 'assets/video/carneficina-tattoo.mp4' },
    { title: 'Amore e Morte — da Necropolenos · 2025', src: 'assets/video/amore-morte-necropolenos.mp4' },
  ];

  posterFor(src: string): string {
    const base = src.split('/').pop()!.replace('.mp4', '.jpg');
    return `assets/video/thumbs/${base}`;
  }

  tattooSlideCount(item: { images?: string[] }): number {
    return (item.images?.length || 0) + 1;
  }

  onTattooStripScroll(event: Event): void {
    const strip = event.target as HTMLElement;
    const viewport = strip.parentElement as HTMLElement;
    viewport.classList.toggle('is-start', strip.scrollLeft <= 2);
    viewport.classList.toggle('is-end', strip.scrollLeft + strip.clientWidth >= strip.scrollWidth - 2);
  }

  scrollTattooStrip(event: MouseEvent, direction: 1 | -1): void {
    const strip = (event.currentTarget as HTMLElement)
      .closest('.card__media')
      ?.querySelector('.card__strip') as HTMLElement | null;
    strip?.scrollBy({ left: direction * strip.clientWidth, behavior: 'smooth' });
  }
}
