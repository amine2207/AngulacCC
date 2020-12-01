import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenreComponent } from './genre/genre.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddGenreComponent } from './add-genre/add-genre.component';
import { UpdateGenreComponent } from './update-genre/update-genre.component';
import { JeuxComponent } from './jeux/jeux.component';
import { UpdateJeuComponent } from './update-jeu/update-jeu.component';
import { LaisserCommentaireComponent } from './laisser-commentaire/laisser-commentaire.component';
import { ListCommentairesComponent } from './list-commentaires/list-commentaires.component';

@NgModule({
  declarations: [
    AppComponent,
    GenreComponent,
    MenuComponent,
    AddGenreComponent,
    UpdateGenreComponent,
    JeuxComponent,
    UpdateJeuComponent,
    LaisserCommentaireComponent,
    ListCommentairesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
