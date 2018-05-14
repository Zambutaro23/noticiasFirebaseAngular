import {RouterModule, Routes} from '@angular/router';
import {NoticiasComponent} from './components/noticias/noticias.component';
import {AddNoticiaComponent} from './components/add-noticia/add-noticia.component';
import {LoginComponent} from './components/login/login.component';

const APP_ROUTES : Routes = [
    {path: 'noticias',component:NoticiasComponent},
    {path: 'add-noticias',component:AddNoticiaComponent},
    {path: 'login',component:LoginComponent},
    {path: '',pathMatch:'full',redirectTo:'login'},
    {path: '**',pathMatch:'full',redirectTo:'login'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true});
