import { Component } from '@angular/core';

@Component({
  selector: 'app-la-maschera',
  templateUrl: './la-maschera.component.html',
  styleUrls: ['./la-maschera.component.scss']
})
export class LaMascheraComponent {
  readonly masks = [
    { title: 'Boia', images: [] as string[], desc: [
      'BOIA nasce dall’immaginario splatter, slasher e horror gotico di Enos: una figura violenta che uccide simbolicamente ogni forma di prigionia e schiavitù.',
      'Realizzata attraverso vere Polo Ralph Lauren, la maschera trasforma un simbolo di lusso e status in materia di rivolta.',
      'È una maschera attiva, aggressiva e liberatoria: non subisce più la schiavitù, la combatte.',
      'È inoltre la prima maschera che può essere ricevuta e indossata dal pubblico, trasformando Enos da individuo a simbolo condiviso: l’inizio di un vero culto.'
    ] },
    { title: 'MohawkEnos', images: ['MOHAWK', 'MOHAWK-2', 'MOHAWK-3', 'MOHAWK-4', 'MOHAWK-5', 'MOHAWK-6', 'MOHAWK-7'].map(f => `assets/masks/${f}.jpg`), desc: [
      'Nasce dalla capigliatura mohawk e dall’estetica punk più cruda e radicale. Realizzata in scuba, la maschera diventa una pelle che immerge l’uomo nell’abisso della propria interiorità.',
      'L’abisso è anche una metafora della periferia: più ci si allontana dal centro, dalla bella vita e da ciò che viene mostrato, più si scende in profondità. Un fondale popolato da pesci, mostri e creature deformi diventa il riflesso di ciò che la società tende a nascondere: emarginazione, rabbia, dipendenze, solitudine, eccessi e autodistruzione.'
    ] },
    { title: 'SpikEnos', images: Array.from({ length: 12 }, (_, i) => `assets/masks/spikenos-${i + 1}.jpg`), desc: [
      'SPIKENOS è una maschera di pelle da slave, ricoperta di spuntoni che attraversano tutta la testa. Una forma spigolosa, rabbiosa e oscura, costruita come un’armatura della carne.',
      'È un elogio alla carne, al sangue e alla visceralità, dove il corpo diventa materia, ferita e ossessione. Un tributo all’immaginario di Hellraiser, che introduce Enos ancora più profondamente nell’horror: dolore, trasformazione, piacere, mostruosità e dannazione.',
      'SPIKENOS è una creatura nata dall’abisso: umana nella carne, mostruosa nella forma.'
    ] },
    { title: 'DistopichEnos', images: Array.from({ length: 7 }, (_, i) => `assets/masks/distopichenos-${i + 1}.jpg`), desc: [
      'La maschera Distopichenos rappresenta un’immagine potente e simbolica del futuro distopico di Enos, una figura che sembra sospesa tra due mondi: quello della nascita e quello del divenire.',
      'Realizzata in latex, la maschera assume la forma di una placenta, un involucro che racchiude e protegge, ma allo stesso tempo separa Enos dalla realtà esterna. La sua funzione di filtro traslucido permette solo di intravedere il volto sottostante, tatuato con simboli o segni che alludono alla sua trasformazione imminente.',
      'Enos, ancora imprigionato in questa forma embrionale, rappresenta un’entità che non è ancora pronta per emergere, in attesa di manifestare il suo pieno potenziale.'
    ] },
    { title: 'Dr.Enos', images: Array.from({ length: 11 }, (_, i) => `assets/masks/drenos-${i + 1}.jpg`), desc: [
      'La maschera DottorEnos celebra la potenza dell’individualità e la capacità di convertire le influenze della cultura pop in strumenti di protesta ed emancipazione.',
      'I fori oculari della maschera richiamano i celebri occhiali indossati da Kurt Cobain, simbolo di ribellione e controcultura.'
    ] },
    { title: 'SicariEnos', images: Array.from({ length: 9 }, (_, i) => `assets/masks/sicarienos-${i + 1}.jpg`), desc: [
      'La maschera Sicarienos è tinta di un rosso sangue che evoca il sapore della vita e della morte, richiamando alla mente di Enos la sua stessa esistenza e la vitalità che scorre nelle vene. Al suo centro, una croce emerge come simbolo di protezione, benedicendo l’anima di Enos dai suoi peccati e offrendo un punto di riferimento spirituale nel suo cammino. La croce viola e le lapidi sui lati della maschera rappresentano i lividi, simboli delle battaglie e delle ferite che ha subito nel corso della vita.'
    ] },
    { title: 'VisionariEnos', images: Array.from({ length: 10 }, (_, i) => `assets/masks/visionarienos-${i + 1}.jpg`), desc: [] as string[] },
    { title: 'TribalEnos', images: Array.from({ length: 4 }, (_, i) => `assets/masks/tribalenos-${i + 1}.jpg`), desc: [
      'Tribalenos è una maschera che incarna la stessa essenza primordiale del suo creatore. È più di un semplice ornamento, è una porta verso l’abisso dei desideri più ardenti e dei piaceri più profondi. È la liberazione incarnata, un’esplosione di emozioni viscerali che danzano nell’anima.'
    ] },
    { title: 'FendEnos-CoccodrillEnos', images: [] as string[], desc: [
      'Due maschere da slave, due facce della stessa Roma underground.',
      'FENDENOS, rivestita da una texture Fendi, è una reinterpretazione quasi blasfema della maison romana e della dipendenza dall’immaginario del lusso. Il desiderio di appartenergli, soprattutto da parte di chi ne è escluso, trasforma il lusso in un’ossessione: Enos lo prende, lo trascina nell’underground e lo rovina, trasformando il simbolo del prestigio in un segno di sottomissione.',
      'COCCODRILLENOS, con la sua texture da coccodrillo, rappresenta invece la ferocia e la freddezza necessarie per sopravvivere nella giungla urbana. Roma diventa un ambiente che costringe a sviluppare pelle dura, istinto e aggressività.',
      'Due maschere, una stessa città: lusso e povertà, desiderio e sottomissione, ferocia e sopravvivenza si incontrano nella carne di Enos.'
    ] },
    { title: 'LeatherMask', images: [] as string[], desc: [
      'La prima maschera di Enos, una slave mask in pelle customizzata, da cui nasce tutto il suo immaginario.',
      'Enos non si definisce un artista, ma un antieroe: indossa la maschera perché è schiavo del mondo contemporaneo, dei suoi vincoli, desideri, dipendenze e imposizioni.',
      'La consapevolezza di essere schiavo diventa però una forma di libertà: Enos usa la maschera per guardare e combattere la propria condizione, portandola all’estremo attraverso un immaginario crudo, violento e carnale.',
      'LEATHERMASK è quindi il simbolo dello schiavo contemporaneo e l’origine del culto di Enos.'
    ] }
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
