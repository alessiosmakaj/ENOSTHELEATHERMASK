import { Component } from '@angular/core';

interface Painting {
  title: string;
  meta: string;
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
    { title: '7AM', meta: 'Acrilico, sex toys, latex e polaroid su scuba · 250×150 cm · 2026', images: [
      '7am.jpg', '7am-dettaglio-1.jpg', '7am-dettaglio-2.jpg', '7am-dettaglio-3.jpg'
    ].map(f => BASE + f) },
    { title: 'Autocannibalismo', meta: 'Acrilico, sex toys, latex e vetrificante su ecopelle · 130×100 cm · 2026', images: [
      'autocannibalismo.jpg', 'autocannibalismo-dettaglio-1.jpg', 'autocannibalismo-dettaglio-2.jpg', 'autocannibalismo-dettaglio-3.jpg'
    ].map(f => BASE + f) },
    { title: 'Cadavere Bollente', meta: 'Acrilico, sex toys, polaroid e latex su scuba · 200×150 cm · 2026', images: [
      'cadavere-bollente.jpg', 'cadavere-bollente-dettaglio-1.jpg', 'cadavere-bollente-dettaglio-2.jpg', 'cadavere-bollente-dettaglio-3.jpg'
    ].map(f => BASE + f) },
    { title: 'Carneficina', meta: 'Acrilico, sex toys, latex, polaroid e vetrificante su scuba · 170×170 cm · 2026', images: [
      'carneficina.jpg', 'carneficina-dettaglio-1.jpg', 'carneficina-dettaglio-2.jpg', 'carneficina-dettaglio-3.jpg', 'carneficina-dettaglio-4.jpg'
    ].map(f => BASE + f) },
    { title: 'Fame', meta: 'Acrilico, sex toys, latex, vetrificante e polaroid su scuba · 250×150 cm · 2026', images: [
      'fame.jpg', 'fame-dettaglio-1.jpg', 'fame-dettaglio-2.jpg', 'fame-dettaglio-3.jpg'
    ].map(f => BASE + f) },
    { title: 'Mattatoio', meta: 'Acrilico, sex toys, polaroid, latex, vetrificante e cotone su scuba · 160×160 cm · 2026', images: [
      'mattatoio.jpg', 'mattatoio-dettaglio-1.jpg', 'mattatoio-dettaglio-2.jpg', 'mattatoio-dettaglio-3.jpg'
    ].map(f => BASE + f) },
    { title: 'Morte in Diretta', meta: 'Acrilico, sex toys, polaroid, latex, vetrificante, pelle vera e pelliccia sintetica su tela · 150×130 cm · 2026', images: [
      'morte-in-diretta.jpg', 'morte-in-diretta-dettaglio-1.jpg', 'morte-in-diretta-dettaglio-2.jpg', 'morte-in-diretta-dettaglio-3.jpg'
    ].map(f => BASE + f) },
    { title: 'Dominazione Bipolare', meta: 'Acrilico e sex toys su cotone a righe', images: [
      'dominazione-bipolare.jpg', 'dominazione-bipolare-dettaglio-1.jpg', 'dominazione-bipolare-dettaglio-2.jpg', 'dominazione-bipolare-dettaglio-3.jpg'
    ].map(f => BASE + f) },
    { title: 'Incubi Dissociativi', meta: 'Acrilico e sex toys su scuba', images: [
      'incubi-dissociativi.jpg', 'incubi-dissociativi-dettaglio-1.jpg', 'incubi-dissociativi-dettaglio-2.jpg', 'incubi-dissociativi-dettaglio-3.jpg', 'incubi-dissociativi-dettaglio-4.jpg'
    ].map(f => BASE + f) },
    { title: 'Lofiforme', meta: 'Acrilico e vernice su cotone a righe', images: [
      'lofiforme.jpg', 'lofiforme-dettaglio-1.jpg', 'lofiforme-dettaglio-2.jpg'
    ].map(f => BASE + f) },
    { title: 'Necroserotonina', meta: 'Acrilico e sex toys su ecopelle', images: [
      'necroserotonina.jpg', 'necroserotonina-dettaglio-1.jpg', 'necroserotonina-dettaglio-2.jpg', 'necroserotonina-dettaglio-3.jpg', 'necroserotonina-dettaglio-4.jpg'
    ].map(f => BASE + f) },
    { title: 'Portale di Sangue', meta: 'Acrilico, sex toys, latex e vetrificante su ecopelle · 130×100 cm · 2025', images: [
      'portale-di-sangue.jpg', 'portale-di-sangue-dettaglio-1.jpg', 'portale-di-sangue-dettaglio-2.jpg', 'portale-di-sangue-dettaglio-3.jpg', 'portale-di-sangue-dettaglio-4.jpg'
    ].map(f => BASE + f) },
    { title: 'Speranza Annegata', meta: 'Acrilico, sex toys, latex, vetrificante e polaroid · 130 cm · 2025', images: [
      'speranza-annegata.jpg', 'speranza-annegata-dettaglio-1.jpg'
    ].map(f => BASE + f) },
    { title: 'Necropolenos (Amore/Morte)', meta: 'Acrilico, latex, sex toys, resina e sangue su ecopelle e tela · 170×320 cm · 2025', images: [
      'necropolenos.jpg', 'necropolenos-dettaglio-1.jpg', 'necropolenos-dettaglio-2.jpg', 'necropolenos-dettaglio-3.jpg', 'necropolenos-dettaglio-4.jpg'
    ].map(f => BASE + f) },
    { title: 'Slasherenos, l\'anima', meta: 'Acrilico e sex toys su tela · 160×160 cm · 2025', images: [
      'slasherenos.jpg', 'slasherenos-dettaglio-1.jpg', 'slasherenos-dettaglio-2.jpg'
    ].map(f => BASE + f) },
    { title: 'Amore in Putrefazionenos', meta: 'Acrilico, sangue, budella, cuore e sex toys su tela · 160×180 cm · 2025', images: [
      'amore-in-putrefazionenos.jpg', 'amore-in-putrefazionenos-dettaglio-1.jpg', 'amore-in-putrefazionenos-dettaglio-2.jpg', 'amore-in-putrefazionenos-dettaglio-3.jpg'
    ].map(f => BASE + f) },
    { title: 'Dieselenos', meta: 'Sex toys, acrilico e latex su tela · 160×360 cm · 2025', images: [
      'dieselenos.jpg', 'dieselenos-dettaglio-1.jpg', 'dieselenos-dettaglio-2.jpg'
    ].map(f => BASE + f) },
    { title: 'Marciumenos', meta: 'Sex toys e acrilico su tela · 140×190 cm · 2025', images: [
      'marciumenos.jpg', 'marciumenos-dettaglio-1.jpg', 'marciumenos-dettaglio-2.jpg'
    ].map(f => BASE + f) },
    { title: 'Fognenos', meta: 'Acrilico e sex toys su tela · 160×260 cm · 2025', images: [
      'fognenos.jpg', 'fognenos-dettaglio-1.jpg', 'fognenos-dettaglio-2.jpg'
    ].map(f => BASE + f) },
  ];

  scrollStrip(event: MouseEvent, direction: 1 | -1): void {
    const strip = (event.currentTarget as HTMLElement)
      .closest('.painting__viewport')
      ?.querySelector('.painting__strip') as HTMLElement | null;
    strip?.scrollBy({ left: direction * strip.clientWidth, behavior: 'smooth' });
  }
}
