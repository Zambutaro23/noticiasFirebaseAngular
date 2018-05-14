import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { NoticiaService } from '../../services/noticia.service';

import { Noticia } from '../../models/noticia';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NoticiasComponent implements OnInit {
  noticias: Noticia[];
  editState: boolean = false;
  noticiaToEdit: Noticia;

  constructor(public noticiaService: NoticiaService) { }

  ngOnInit() {
    this.noticiaService.getNoticias().subscribe(noticias => {
      this.noticias = noticias;
    });
  }

  deleteNoticia(event, noticia) {
    const response = confirm('¿Seguro que quieres borrar la noticia?');
    if (response ) {
      this.noticiaService.deleteNoticia(noticia);
    }
    return;
  }

  editNoticia(event, noticia) {
    this.editState = !this.editState;
    this.noticiaToEdit = noticia;
  }

  updateNoticia(noticia) {
    this.noticiaService.updateNoticia(noticia);
    this.noticiaToEdit = null;
    this.editState = false;
  }

}
