import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LibArtistsComponent } from './components/library/lib-artists/lib-artists.component';
import { LibraryComponent } from './components/library/library.component';
import { LibAlbumsComponent } from './components/library/lib-albums/lib-albums.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'library', component: LibraryComponent,
    children: [
      { path: 'artists', component: LibArtistsComponent },
      { path: 'albums', component: LibAlbumsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
