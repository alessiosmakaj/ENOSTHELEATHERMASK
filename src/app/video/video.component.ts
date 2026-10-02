import { Component } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent {
  readonly videos = [
    { title: 'Incubo di Carne — parte 1 · 2025', src: 'assets/video/incubo-di-carne-pt1.mp4' },
    { title: 'Incubo di Carne — parte 2 · 2025', src: 'assets/video/incubo-di-carne-pt2.mp4' },
    { title: 'Portalenos · 2024', src: 'assets/video/portalenos.mp4' },
    { title: 'Risurrezionenos · 2024', src: 'assets/video/risurrezionenos.mp4' },
    { title: 'Sottomissionenos · 2024', src: 'assets/video/sottomissionenos.mp4' },
    { title: 'Portalenos 2 · 2024', src: 'assets/video/portalenos-2.mp4' },
    { title: 'Madrenos · 2024', src: 'assets/video/madrenos.mp4' },
    { title: '24 Uovenos · 2024', src: 'assets/video/24uovenos.mp4' },
    { title: 'Gognenos · 2024', src: 'assets/video/gognenos-corto.mp4' },
    { title: 'Funeralenos · 2024', src: 'assets/video/funeralenos.mp4' },
    { title: 'Distopichenoshotel — parte 1 · 2024', src: 'assets/video/distopichenoshotel-1.mp4' },
    { title: 'Distopichenoshotel — parte 2 · 2024', src: 'assets/video/distopichenoshotel-2.mp4' },
    { title: 'Distopichenoshotel — parte 3 · 2024', src: 'assets/video/distopichenoshotel-3.mp4' },
    { title: 'Distopichenoshotel — parte 4 · 2024', src: 'assets/video/distopichenoshotel-4.mp4' },
    { title: 'Distopichenoshotel — parte 5 · 2024', src: 'assets/video/distopichenoshotel-5.mp4' },
    { title: 'Distopichenoshotel — parte 6 · 2024', src: 'assets/video/distopichenoshotel-6.mp4' },
    { title: 'Benedettenos', src: 'assets/video/benedettenos.mp4' },
    { title: 'Orrore in Polaroid', src: 'assets/video/orrore-in-polaroid.mp4' },
  ];

  posterFor(src: string): string {
    return src.replace('assets/video/', 'assets/video/thumbs/').replace('.mp4', '.jpg');
  }
}
