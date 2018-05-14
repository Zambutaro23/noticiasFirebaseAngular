import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import  { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { NoticiasComponent } from './components/noticias/noticias.component';

import { NoticiaService } from './services/noticia.service';
import { AddNoticiaComponent } from './components/add-noticia/add-noticia.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';

import {APP_ROUTING} from './app.routes';



@NgModule({
  declarations: [
    AppComponent,
    NoticiasComponent,
    AddNoticiaComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    AngularFireModule.initializeApp(environment.firebase, 'angularfs'),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [
    NoticiaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
