import { Component } from '@angular/core';

interface Installazione {
  title: string;
  meta: string;
  images: string[];
}

const BASE = 'assets/installazioni/';

@Component({
  selector: 'app-installazioni',
  templateUrl: './installazioni.component.html',
  styleUrls: ['./installazioni.component.scss']
})
export class InstallazioniComponent {
  // Dal più recente al più vecchio.
  readonly installazioni: Installazione[] = [
    { title: 'Gogna Viva', meta: 'Latex, legno, stampa in 3D e vernice · 2025', images: [
      'gogna-viva-1.jpg', 'gogna-viva-2.jpg', 'gogna-viva-3.jpg', 'gogna-viva-4.jpg'
    ].map(f => BASE + f) },
    { title: 'Carcassa02', meta: 'Acrilico, pelle lucida su pelle · 2026', images: [BASE + 'carcassa-02.jpg'] },
    { title: 'Carcassa01', meta: 'Acrilico, pelle lucida su pelle · 2026', images: [BASE + 'carcassa-01.jpg'] },
    { title: 'Adolescenzenos', meta: 'Spray, sex toys, acrilico, poliuretano, tubi, maschera di pelle e Vans · 2024', images: [BASE + 'adolescenzenos.jpg'] },
    { title: 'Lapidenos', meta: 'Sex toys, acrilico, spray, poliuretano, maschera di pelle e croce in legno · 2024', images: [BASE + 'lapidenos.jpg'] },
    { title: 'Martirenos', meta: 'Acrilico, spray, poliuretano e Dr. Martens · 2024', images: [BASE + 'martirenos.jpg'] },
    { title: 'Mazzaferratenos', meta: 'Acrilico, sex toys, spray, catene e maschera · 2024', images: [BASE + 'mazzaferratenos.jpg'] },
    { title: 'Kromosenos', meta: 'Acrilico, sex toys, lamiera e neon su forex · 2023', images: [BASE + 'kromosenos.jpg'] },
    { title: 'Crocenos 01', meta: '2023', images: [BASE + 'crocenos-01.jpg'] },
    { title: 'Senza titolo', meta: 'Spray marker e sex toys su cartello stradale · 2022', images: [BASE + 'cartello-2022.jpg'] },
  ];

  onStripScroll(event: Event): void {
    const strip = event.target as HTMLElement;
    const viewport = strip.parentElement as HTMLElement;
    viewport.classList.toggle('is-start', strip.scrollLeft <= 2);
    viewport.classList.toggle('is-end', strip.scrollLeft + strip.clientWidth >= strip.scrollWidth - 2);
  }

  scrollStrip(event: MouseEvent, direction: 1 | -1): void {
    const strip = (event.currentTarget as HTMLElement)
      .closest('.inst__viewport')
      ?.querySelector('.inst__strip') as HTMLElement | null;
    strip?.scrollBy({ left: direction * strip.clientWidth, behavior: 'smooth' });
  }
}
