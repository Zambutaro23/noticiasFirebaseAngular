import { Component, OnInit } from '@angular/core';
import { NoticiaService } from '../../services/noticia.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string = '';
  password:string = '';
  constructor(public noticiaService:NoticiaService, private router:Router) {
   }

  
  ngOnInit() {
  }

  login(){
    console.log("hola");
    this.noticiaService.login(this.username,this.password);
    this.router.navigate(['/noticias']);
  }

  register(){
    this.noticiaService.register(this.username,this.password);
  }

}
