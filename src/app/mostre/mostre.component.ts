import { Component } from '@angular/core';

interface MostraPlaceholder {
  year: string;
  title: string;
  location: string;
}

@Component({
  selector: 'app-mostre',
  templateUrl: './mostre.component.html',
  styleUrls: ['./mostre.component.scss']
})
export class MostreComponent {
  readonly mostre: MostraPlaceholder[] = [
    { year: '—', title: 'Prossima esposizione in programmazione', location: 'Da annunciare' },
  ];
}
