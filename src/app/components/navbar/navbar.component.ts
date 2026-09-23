import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  menuOpen = false;
  isMobile = window.innerWidth <= 768;

  @HostListener('window:resize')
  onResize() {
    this.isMobile = window.innerWidth <= 768;
    if (!this.isMobile) {
      this.menuOpen = false;
    }
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }
}
