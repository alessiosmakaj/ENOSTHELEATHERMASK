import { Component } from '@angular/core';

interface DipintoOpera {
  title: string;
  meta: string;
  desc: string;
}

@Component({
  selector: 'app-dipinti',
  templateUrl: './dipinti.component.html',
  styleUrls: ['./dipinti.component.scss']
})
export class DipintiComponent {
  readonly dipinti: DipintoOpera[] = [
    {
      title: 'Necropolenos',
      meta: 'Pittura materica · 170×320 cm · 2025',
      desc: '«I miei sentimenti e le mie azioni sono una necropoli in un circo di morti.»'
    },
    {
      title: 'Amore in Putrefazionenos',
      meta: 'Acrilico, sangue, viscere, oggetti del desiderio · 160×180 cm · 2025',
      desc: '«Amore marcio. Su un letto di ricordi morti. Non so se tornerai.»'
    },
  ];
}
