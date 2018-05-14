import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { NoticiaService } from '../../services/noticia.service';
import { Noticia } from '../../models/noticia';

@Component({
  selector: 'app-add-noticia',
  templateUrl: './add-noticia.component.html',
  styleUrls: ['./add-noticia.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddNoticiaComponent implements OnInit {
  noticia: Noticia = {
   titulo: '',
   texto: '',
   imagen: '',
   fecha: '' 
  };
  constructor(private noticiaService: NoticiaService) { }

  ngOnInit() {
  }

  onSubmit() {
    if(this.noticia.titulo != '' && this.noticia.texto != '' && this.noticia.imagen != '' && this.noticia.fecha != '') {
      this.noticiaService.addNoticia(this.noticia);
      this.noticia.titulo = '';
      this.noticia.texto = '';
      this.noticia.imagen = '';
      this.noticia.fecha = '';
    }
  }

}
