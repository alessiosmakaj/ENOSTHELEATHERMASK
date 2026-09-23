// src/app/app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { OpereComponent } from './opere/opere.component';
import { DipintiComponent } from './dipinti/dipinti.component';
import { InstallazioniComponent } from './installazioni/installazioni.component';
import { PerformanceComponent } from './performance/performance.component';
import { VideoComponent } from './video/video.component';
import { MostreComponent } from './mostre/mostre.component';
import { BiografiaComponent } from './biografia/biografia.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Home di default
  { path: 'opere', component: OpereComponent },
  { path: 'dipinti', component: DipintiComponent },
  { path: 'tattoo', redirectTo: 'performance' },
  { path: 'installazioni', component: InstallazioniComponent },
  { path: 'performance', component: PerformanceComponent },
  { path: 'video', component: VideoComponent },
  { path: 'mostre', component: MostreComponent },
  { path: 'chi-sono', component: BiografiaComponent },
  { path: '**', redirectTo: '' } // fallback
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
