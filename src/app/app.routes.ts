import { Routes } from '@angular/router';
import { PlaygroundComponent } from './playground/playground.component';

export const routes: Routes = [
  { path: '', redirectTo: 'playground', pathMatch: 'full' },
  { path: 'playground', component: PlaygroundComponent },

];