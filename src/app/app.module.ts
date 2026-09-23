import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { BiografiaComponent } from './biografia/biografia.component';
import { MostreComponent } from './mostre/mostre.component';
import { VideoComponent } from './video/video.component';
import { OpereComponent } from './opere/opere.component';
import { InstallazioniComponent } from './installazioni/installazioni.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DipintiComponent } from './dipinti/dipinti.component';
import { PerformanceComponent } from './performance/performance.component';
import { LaMascheraComponent } from './la-maschera/la-maschera.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BiografiaComponent,
    MostreComponent,
    VideoComponent,
    OpereComponent,
    InstallazioniComponent,
    NavbarComponent,
    FooterComponent,
    DipintiComponent,
    PerformanceComponent,
    LaMascheraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
