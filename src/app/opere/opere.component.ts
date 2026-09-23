import { Component } from '@angular/core';

interface OperaPlaceholder {
  title: string;
  meta: string;
  desc: string;
}

@Component({
  selector: 'app-opere',
  templateUrl: './opere.component.html',
  styleUrls: ['./opere.component.scss']
})
export class OpereComponent {
  readonly opere: OperaPlaceholder[] = [
    {
      title: 'Necropolenos',
      meta: 'Pittura materica · 170×320 cm · 2025',
      desc: 'Sangue, viscere e oggetti del desiderio incastonati nella materia: una necropoli in un circo di morti.'
    },
    {
      title: 'Amore in Putrefazionenos',
      meta: 'Acrilico, sangue, viscere · 160×180 cm · 2025',
      desc: 'Eros e thanatos non si oppongono ma si contaminano: un letto di ricordi morti, ancora desideranti.'
    },
    { title: 'Dieselenos',    meta: 'Opera del corpus Blood Viscera Bones', desc: 'Nel lessico della decadenza, il device «-enos» applicato alla materia.' },
    { title: 'Labirintenos',  meta: 'Opera del corpus Blood Viscera Bones', desc: 'Un percorso a soglie multiple, tra identità e ombra.' },
    { title: 'Fognenos',      meta: 'Opera del corpus Blood Viscera Bones', desc: 'Fogna e rovina, autoritratto frammentato nel lessico della decadenza.' },
    { title: 'Marciumenos',   meta: 'Opera del corpus Blood Viscera Bones', desc: 'Materia lasciata decadere e cicatrizzare, tra rottura e rinascita.' },
  ];
}
