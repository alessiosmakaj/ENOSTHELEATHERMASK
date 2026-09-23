import { Component, HostListener } from '@angular/core';

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

  toTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
