import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from 'angularfire2/firestore';

import { AngularFireAuth } from 'angularfire2/auth';

import { Noticia } from '../models/noticia';

import { Observable } from 'rxjs/Observable';

import * as firebase from 'firebase/app';
@Injectable()
export class NoticiaService {
  noticiasCollection: AngularFirestoreCollection<Noticia>;
  noticias: Observable<Noticia[]>;
  noticiaDoc: AngularFirestoreDocument<Noticia>;

  constructor(public afs:AngularFirestore, public afAuth: AngularFireAuth) {
    this.noticiasCollection = this.afs.collection('Noticias');
    // this.tasks = this.afs.collection('tasks').valueChanges();
    this.noticias = this.noticiasCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Noticia;
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }

  login(email,password) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  }
  logout() {
    this.afAuth.auth.signOut();
  }

  register(email,password){
    this.afAuth.auth.createUserWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });

  }

  getNoticias() {
    return this.noticias;
  }

  addNoticia(noticia: Noticia) {
    this.noticiasCollection.add(noticia);
  }

  deleteNoticia(noticia: Noticia) {
    this.noticiaDoc = this.afs.doc(`noticias/${noticia.id}`);
    this.noticiaDoc.delete();
  }

  updateNoticia(noticia: Noticia) {
    this.noticiaDoc = this.afs.doc(`noticias/${noticia.id}`);
    this.noticiaDoc.update(noticia);
  }
}
