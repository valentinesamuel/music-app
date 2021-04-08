import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LibArtistsComponent } from './components/library/lib-artists/lib-artists.component';
import { LibraryComponent } from './components/library/library.component';
import { LibAlbumsComponent } from './components/library/lib-albums/lib-albums.component';
import { LibShowsComponent } from './components/library/lib-shows/lib-shows.component';
import { LibEpisodesComponent } from './components/library/lib-episodes/lib-episodes.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'library', component: LibraryComponent,
    children: [
      { path: 'artists', component: LibArtistsComponent },
      { path: 'albums', component: LibAlbumsComponent },
      { path: 'shows', component: LibShowsComponent },
      { path: 'episodes', component: LibEpisodesComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
