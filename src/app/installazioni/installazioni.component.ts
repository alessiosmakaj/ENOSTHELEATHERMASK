import { Component } from '@angular/core';

interface InstallazionePlaceholder {
  title: string;
  meta: string;
  desc: string;
}

@Component({
  selector: 'app-installazioni',
  templateUrl: './installazioni.component.html',
  styleUrls: ['./installazioni.component.scss']
})
export class InstallazioniComponent {
  readonly installazioni: InstallazionePlaceholder[] = [
    { title: 'Installazione I',   meta: 'Cuoio, metallo, luce · Anno', desc: 'Descrizione dell\'installazione da inserire.' },
    { title: 'Installazione II',  meta: 'Cuoio, metallo, luce · Anno', desc: 'Descrizione dell\'installazione da inserire.' },
    { title: 'Installazione III', meta: 'Cuoio, metallo, luce · Anno', desc: 'Descrizione dell\'installazione da inserire.' },
    { title: 'Installazione IV',  meta: 'Cuoio, metallo, luce · Anno', desc: 'Descrizione dell\'installazione da inserire.' },
  ];
}
