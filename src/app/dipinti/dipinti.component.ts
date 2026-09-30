import { Component } from '@angular/core';

interface Painting {
  title: string;
  meta: string;
  images: string[]; // main image first, then dettagli
  video?: string; // slide finale, muto e in loop
}

const BASE = 'assets/dipinti/';

const withDetails = (slug: string, n: number): string[] =>
  [`${slug}.jpg`, ...Array.from({ length: n }, (_, i) => `${slug}-dettaglio-${i + 1}.jpg`)].map(f => BASE + f);

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
    { title: 'Barenos', meta: 'Sex toys e acrilico su tela · 160×120 cm · 2025', images: withDetails('barenos', 3) },
    { title: 'Betonierenos', meta: 'Sex toys e acrilico su tela · 160×120 cm · 2025', images: withDetails('betonierenos', 3) },
    { title: 'Carcassenos', meta: 'Sex toys e acrilico su tela · 140×190 cm · 2025', images: withDetails('carcassenos', 3) },
    { title: 'Decadenzenos pt.1', meta: 'Sex toys e acrilico su tela · 160×160 cm · 2025', images: withDetails('decadenzenos-pt1', 3) },
    { title: 'Decadenzenos pt.2', meta: 'Sex toys e acrilico su tela · 160×160 cm · 2025', images: withDetails('decadenzenos-pt2', 2) },
    { title: 'Eutanasienos', meta: 'Sex toys e acrilico su tela · 160×120 cm · 2025', images: withDetails('eutanasienos', 3) },
    { title: 'Ghigliottinones', meta: 'Latex, sex toys e acrilico su tela · 160×120 cm · 2025', images: withDetails('ghigliottinones', 3) },
    { title: 'Paludenos', meta: 'Sex toys e acrilico su tela · 160×120 cm · 2025', images: withDetails('paludenos', 3) },
    { title: 'Passivenos', meta: 'Acrilico, olio, stampa 3D, sex toys, ecopelle e denim su tela · 180×95 cm · 2025', images: withDetails('passivenos', 3) },
    { title: 'Labirintenos', meta: 'Acrilico, lamiera, sex toys e stampa 3D su tela · 130×160 cm · 2025', images: [
      'labirintenos.jpg', 'labirintenos-2.jpg', 'labirintenos-3.jpg', 'labirintenos-dettaglio-1.jpg', 'labirintenos-dettaglio-2.jpg', 'labirintenos-dettaglio-3.jpg', 'labirintenos-dettaglio-4.jpg'
    ].map(f => BASE + f) },
    { title: 'Boienos', meta: 'Acrilico, lamiera, sex toys e stampa 3D su tela · 160×90 cm · 2025', images: [
      'boienos.jpg', 'boienos-2.jpg', 'boienos-dettaglio-1.jpg', 'boienos-dettaglio-2.jpg', 'boienos-dettaglio-3.jpg'
    ].map(f => BASE + f) },
    { title: 'Oltretombenos', meta: 'Acrilico, sex toys e lamiera su tela · 2025', images: [
      'oltretombenos.jpg', 'oltretombenos-2.jpg', 'oltretombenos-dettaglio-1.jpg', 'oltretombenos-dettaglio-2.jpg', 'oltretombenos-dettaglio-3.jpg'
    ].map(f => BASE + f) },
    { title: 'Isolamentenos', meta: 'Acrilico, lamiera, sex toys e stampa 3D su tela · 135×100 cm · 2025', images: [
      'isolamentenos.jpg', 'isolamentenos-2.jpg', 'isolamentenos-dettaglio-1.jpg', 'isolamentenos-dettaglio-2.jpg', 'isolamentenos-dettaglio-3.jpg'
    ].map(f => BASE + f) },
    { title: 'Borderlinenos', meta: 'Tecnica mista su tela · 155×95 cm · 2025', images: [
      'borderlinenos.jpg', 'borderlinenos-2.jpg', 'borderlinenos-dettaglio-1.jpg', 'borderlinenos-dettaglio-2.jpg', 'borderlinenos-dettaglio-3.jpg', 'borderlinenos-dettaglio-4.jpg'
    ].map(f => BASE + f) },
    { title: 'Generazionenos', meta: 'Tecnica mista su tela · 2025', images: [
      'generazionenos.jpg', 'generazionenos-2.jpg', 'generazionenos-dettaglio-1.jpg', 'generazionenos-dettaglio-2.jpg', 'generazionenos-dettaglio-3.jpg', 'generazionenos-dettaglio-4.jpg'
    ].map(f => BASE + f) },
    { title: 'Sopravvisutenos', meta: 'Tecnica mista su tela · 145×85 cm · 2025', images: [
      'sopravvisutenos.jpg', 'sopravvisutenos-2.jpg', 'sopravvisutenos-dettaglio-1.jpg', 'sopravvisutenos-dettaglio-2.jpg', 'sopravvisutenos-dettaglio-3.jpg', 'sopravvisutenos-dettaglio-4.jpg'
    ].map(f => BASE + f) },
    { title: 'Mummienos', meta: 'Acrilico, sex toys e latex su ecopelle · 110×100 cm · 2024', images: [BASE + 'mummienos.jpg'], video: BASE + 'mummienos-ia.mp4' },
    { title: 'Umorenos', meta: 'Acrilico, sex toys e latex su ecopelle · 110×100 cm · 2024', images: [BASE + 'umorenos.jpg'], video: BASE + 'umorenos-ia.mp4' },
    { title: 'Dipendentenos', meta: 'Acrilico, sex toys e latex su ecopelle · 110×100 cm · 2024', images: [BASE + 'dipendentenos.jpg'], video: BASE + 'dipendentenos-ia.mp4' },
    { title: 'Sabbienos', meta: 'Acrilico, sex toys e latex su ecopelle · 110×100 cm · 2024', images: [BASE + 'sabbienos.jpg'], video: BASE + 'sabbienos-ia.mp4' },
    { title: 'Distopichenos', meta: 'Acrilico, sex toys e latex su ecopelle · 110×100 cm · 2024', images: [BASE + 'distopichenos-2024.jpg'], video: BASE + 'distopichenos-2024-ia.mp4' },
    { title: 'Narcisistenos', meta: 'Acrilico, sex toys e latex su ecopelle e tela · 110×100 cm · 2024', images: [BASE + 'narcisistenos.jpg'], video: BASE + 'narcisistenos-ia.mp4' },
    { title: 'Giunglenos', meta: 'Matita, sex toys e latex su tela · 110×100 cm · 2024', images: [BASE + 'giunglenos.jpg'], video: BASE + 'giunglenos-ia.mp4' },
    { title: 'Cordonenos', meta: 'Acrilico, sex toys e latex su ecopelle · 110×100 cm · 2024', images: [BASE + 'cordonenos.jpg'], video: BASE + 'cordonenos-ia.mp4' },
    { title: 'Placentenos', meta: 'Acrilico, sex toys e latex su tela · 110×100 cm · 2024', images: [BASE + 'placentenos.jpg'], video: BASE + 'placentenos-ia.mp4' },
    { title: 'Suicidenos', meta: 'Acrilico, pena, sex toys e latex su tela · 110×100 cm · 2024', images: [BASE + 'suicidenos.jpg'], video: BASE + 'suicidenos-ia.mp4' },
    { title: 'Lobotomizazionenos', meta: 'Acrilico, sex toys e latex su tela ed ecopelle · 110×100 cm · 2024', images: [BASE + 'lobotomizazionenos.jpg'], video: BASE + 'lobotomizazionenos-ia.mp4' },
    { title: 'Armaturenos', meta: 'Acrilico, sex toys e latex su ecopelle · 110×100 cm · 2024', images: [BASE + 'armaturenos.jpg'], video: BASE + 'armaturenos-ia.mp4' },
    { title: 'Relazionenos', meta: '2024', images: [BASE + 'reazionenos.jpg'], video: BASE + 'relazionenos-ia.mp4' },
    { title: 'Insonnienos', meta: 'Sex toys e acrilico su denim ed ecopelle · 135×100 cm · 2024', images: [
      'insonnienos.jpg', 'insonnienos-2.jpg', 'insonnienos-dettaglio-1.jpg', 'insonnienos-dettaglio-2.jpg', 'insonnienos-dettaglio-3.jpg', 'insonnienos-dettaglio-4.jpg'
    ].map(f => BASE + f) },
    { title: 'Visionarienos', meta: 'Sex toys e acrilico su denim ed ecopelle · 2024', images: [
      'visionarienos.jpg', 'visionarienos-2.jpg', 'visionarienos-dettaglio-1.jpg', 'visionarienos-dettaglio-2.jpg'
    ].map(f => BASE + f) },
    { title: 'Mortenos', meta: 'Acrilico e sex toys su tela ed ecopelle · 135×100 cm · 2023', images: [
      'mortenos.jpg', 'mortenos-2.jpg', 'mortenos-dettaglio-1.jpg', 'mortenos-dettaglio-2.jpg', 'mortenos-dettaglio-3.jpg', 'mortenos-dettaglio-4.jpg', 'mortenos-dettaglio-5.jpg', 'mortenos-retro-1.jpg', 'mortenos-retro-2.jpg'
    ].map(f => BASE + f) },
    { title: 'Sentimentenos', meta: 'Sex toys e acrilico su ecopelle · 135×100 cm · 2023', images: [
      'sentimentenos.jpg', 'sentimentenos-2.jpg', 'sentimentenos-dettaglio-1.jpg', 'sentimentenos-dettaglio-2.jpg', 'sentimentenos-dettaglio-3.jpg', 'sentimentenos-dettaglio-4.jpg'
    ].map(f => BASE + f) },
    { title: 'Albenos', meta: 'Acrilico e sex toys su tela ed ecopelle · 2023', images: withDetails('albenos', 5) },
    { title: 'Condannatenos', meta: 'Acrilico, sex toys e lamiera su ecopelle · 2023', images: [
      'condannatenos.jpg', 'condannatenos-2.jpg', 'condannatenos-dettaglio-1.jpg', 'condannatenos-dettaglio-2.jpg', 'condannatenos-dettaglio-3.jpg', 'condannatenos-dettaglio-4.jpg'
    ].map(f => BASE + f) },
    { title: 'Sanctuary Eco Retreat', meta: 'Opera realizzata per la performance al Sanctuary Eco Retreat · 2023', images: [
      'sanctuary.jpg', 'sanctuary-2.jpg', 'sanctuary-dettaglio-1.jpg'
    ].map(f => BASE + f) },
  ];

  // Nasconde la freccia dove non ci sono altre immagini in quella direzione.
  onStripScroll(event: Event): void {
    const strip = event.target as HTMLElement;
    const viewport = strip.parentElement as HTMLElement;
    viewport.classList.toggle('is-start', strip.scrollLeft <= 2);
    viewport.classList.toggle('is-end', strip.scrollLeft + strip.clientWidth >= strip.scrollWidth - 2);
  }

  slideCount(p: Painting): number {
    return p.images.length + (p.video ? 1 : 0);
  }

  scrollStrip(event: MouseEvent, direction: 1 | -1): void {
    const strip = (event.currentTarget as HTMLElement)
      .closest('.painting__viewport')
      ?.querySelector('.painting__strip') as HTMLElement | null;
    strip?.scrollBy({ left: direction * strip.clientWidth, behavior: 'smooth' });
  }
}
