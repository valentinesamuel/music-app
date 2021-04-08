import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './authentication/login/login.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { HomeComponent } from './components/home/home.component';
import { LibraryComponent } from './components/library/library.component';
import { AlbumCardComponent } from './ui-elements/album-card/album-card.component';
import { StringShortnerPipe } from './pipes/string-shortner.pipe';
import { LibArtistsComponent } from './components/library/lib-artists/lib-artists.component';
import { LibAlbumsComponent } from './components/library/lib-albums/lib-albums.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SideBarComponent,
    HomeComponent,
    LibraryComponent,
    AlbumCardComponent,
    StringShortnerPipe,
    LibArtistsComponent,
    LibAlbumsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
