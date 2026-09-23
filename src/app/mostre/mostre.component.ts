import { Component } from '@angular/core';

interface Mostra {
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
  readonly mostre: Mostra[] = [
    { year: '2026', title: 'KROMOS DESIGN — «Ci-AO»', location: 'Esposizione collettiva · aprile' },
    { year: '2025', title: 'Khaus Party, Alibi Club', location: 'Roma · esposizione · ottobre' },
    { year: '2025', title: 'DEEPDARKDOOMSDAY × Filipsatattoo', location: 'Performance ed esposizione · settembre' },
    { year: '2024', title: 'Together Network', location: 'Performance · ottobre' },
    { year: '2024', title: 'Residenza artistica «Le mie mani»', location: 'Progetto di Mirko Leuzzi · agosto' },
    { year: '2024', title: 'Fiuggi Tattoo Convention', location: 'Performance · luglio' },
    { year: '2024', title: 'Campo Magnetico', location: 'Roma · performance · luglio' },
    { year: '2024', title: 'Casa del Diavolo, Trastevere', location: 'Roma · performance · giugno' },
    { year: '2023', title: 'Sanctuary Eco Retreat', location: 'Roma · mostra personale e performance · dicembre' },
    { year: '2023', title: 'Dude Club — Design Week', location: 'Milano · mostra personale e performance · aprile' },
    { year: '2023', title: 'Circolo degli Illuminati', location: 'Roma · mostra personale e performance · febbraio' },
    { year: '2022', title: 'Level Art Gallery', location: 'Mostra collettiva · dicembre' },
    { year: '2022', title: 'Culture Festival', location: 'Roma · novembre' },
    { year: '2022', title: 'Police Festival', location: 'Roma · ottobre' },
    { year: '2022', title: 'Za Art Gallery — «Contemporary slave»', location: 'Roma · ottobre' },
  ];
}
