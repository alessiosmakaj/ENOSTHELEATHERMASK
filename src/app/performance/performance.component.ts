import { Component } from '@angular/core';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.scss']
})
export class PerformanceComponent {
  readonly performanceVideos = [
    { title: 'Dipendentenos · 2024', src: 'assets/enos.mp4' },
    { title: 'Cadaverenos', src: 'assets/video/cadaverenos-performance.mp4' },
    { title: 'Carne Marchiata', src: 'assets/video/carne-marchiata.mp4' },
    { title: 'Lofiforme e Dominazione Bipolare', src: 'assets/video/lofiforme-dominazione-bipolare.mp4' },
    { title: 'Amore in Putrefazionenos', src: 'assets/video/amore-in-putrefazionenos.mp4' },
    { title: 'Necropolenos', src: 'assets/video/necropolenos-performance.mp4' },
    { title: 'Cadavere 01 02', src: 'assets/video/cadavere-01-02.mp4' },
    { title: 'Sicarienos', src: 'assets/video/sicarienos-performance.mp4' },
    { title: 'Noirealismenos', src: 'assets/video/noirealismenos.mp4' },
  ];

  readonly tattooVideos = [
    { title: 'Amore e Morte — da Necropolenos', src: 'assets/video/amore-morte-necropolenos.mp4' },
    { title: 'Maradona', src: 'assets/video/maradona.mp4' },
    { title: 'Carneficina', src: 'assets/video/carneficina-tattoo.mp4' },
  ];

  posterFor(src: string): string {
    const base = src.split('/').pop()!.replace('.mp4', '.jpg');
    return `assets/video/thumbs/${base}`;
  }
}
