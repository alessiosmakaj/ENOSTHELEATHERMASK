import { Component, HostListener, NgZone } from '@angular/core';
import { splatBlood } from './blood-splatter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'EnosSite';
  showToTop = false;

  // Lo scroll gira fuori da Angular: la change detection parte solo quando il pulsante deve davvero comparire o sparire.
  constructor(zone: NgZone) {
    zone.runOutsideAngular(() => {
      window.addEventListener('scroll', () => {
        const show = window.scrollY > 400;
        if (show !== this.showToTop) { zone.run(() => (this.showToTop = show)); }
      }, { passive: true });
    });
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(e: MouseEvent): void {
    const t = e.target as Node | null;
    const el = (t instanceof Element ? t : t?.parentElement)?.closest('.btn, [data-blood]');
    if (!el) { return; }
    const oil = el.getAttribute('data-blood') === 'oil';
    if (e.detail === 0) {
      const r = el.getBoundingClientRect();
      splatBlood(r.left + r.width / 2, r.top + r.height / 2, oil);
    } else {
      splatBlood(e.clientX, e.clientY, oil);
    }
  }

  toTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
