import { Component, HostListener } from '@angular/core';
import { splatBlood } from './blood-splatter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'EnosSite';
  showToTop = false;

  @HostListener('window:scroll')
  onScroll(): void {
    this.showToTop = window.scrollY > 400;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(e: MouseEvent): void {
    const el = (e.target as Element | null)?.closest?.('.btn, [data-blood]');
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
