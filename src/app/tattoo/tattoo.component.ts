import { Component } from '@angular/core';

@Component({
  selector: 'app-tattoo',
  templateUrl: './tattoo.component.html',
  styleUrls: ['./tattoo.component.scss']
})
export class TattooComponent {
  readonly placeholders = [1, 2, 3, 4];
}
