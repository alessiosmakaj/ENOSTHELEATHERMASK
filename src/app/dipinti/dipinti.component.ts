import { Component } from '@angular/core';

interface Painting {
  title: string;
  year: number;
  images: string[]; // main image first, then dettagli
}

const BASE = 'assets/dipinti/';

@Component({
  selector: 'app-dipinti',
  templateUrl: './dipinti.component.html',
  styleUrls: ['./dipinti.component.scss']
})
export class DipintiComponent {
  readonly paintings: Painting[] = [
    { title: '7AM', year: 2026, images: [
      '7am.jpg', '7am-dettaglio-1.jpg', '7am-dettaglio-2.jpg', '7am-dettaglio-3.jpg'
    ].map(f => BASE + f) },
    { title: 'Autocannibalismo', year: 2026, images: [
      'autocannibalismo.jpg', 'autocannibalismo-dettaglio-1.jpg', 'autocannibalismo-dettaglio-2.jpg', 'autocannibalismo-dettaglio-3.jpg'
    ].map(f => BASE + f) },
    { title: 'Cadavere Bollente', year: 2026, images: [
      'cadavere-bollente.jpg', 'cadavere-bollente-dettaglio-1.jpg', 'cadavere-bollente-dettaglio-2.jpg', 'cadavere-bollente-dettaglio-3.jpg'
    ].map(f => BASE + f) },
    { title: 'Carneficina', year: 2026, images: [
      'carneficina.jpg', 'carneficina-dettaglio-1.jpg', 'carneficina-dettaglio-2.jpg', 'carneficina-dettaglio-3.jpg', 'carneficina-dettaglio-4.jpg'
    ].map(f => BASE + f) },
    { title: 'Fame', year: 2026, images: [
      'fame.jpg', 'fame-dettaglio-1.jpg', 'fame-dettaglio-2.jpg', 'fame-dettaglio-3.jpg'
    ].map(f => BASE + f) },
    { title: 'Mattatoio', year: 2026, images: [
      'mattatoio.jpg', 'mattatoio-dettaglio-1.jpg', 'mattatoio-dettaglio-2.jpg', 'mattatoio-dettaglio-3.jpg'
    ].map(f => BASE + f) },
    { title: 'Morte in Diretta', year: 2026, images: [
      'morte-in-diretta.jpg', 'morte-in-diretta-dettaglio-1.jpg', 'morte-in-diretta-dettaglio-2.jpg', 'morte-in-diretta-dettaglio-3.jpg'
    ].map(f => BASE + f) },
  ];

  scrollStrip(event: MouseEvent, direction: 1 | -1): void {
    const strip = (event.currentTarget as HTMLElement)
      .closest('.painting__viewport')
      ?.querySelector('.painting__strip') as HTMLElement | null;
    strip?.scrollBy({ left: direction * strip.clientWidth, behavior: 'smooth' });
  }
}
