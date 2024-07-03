import { Routes } from '@angular/router';
import { EpisodesComponent } from './episodes/episodes.component';
import { PhotosComponent } from './photos/photos.component';

export const routes: Routes = [
  { path: 'episodes', component: EpisodesComponent },
  { path: 'photos', component: PhotosComponent },
  { path: '', redirectTo: '/episodes', pathMatch: 'full' },
];
