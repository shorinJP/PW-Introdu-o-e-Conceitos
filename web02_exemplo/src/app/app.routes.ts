import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Cadastro } from './cadastro/cadastro';
import { Contato } from './contato/contato';
import { Vitrine } from './vitrine/vitrine';

export const routes: Routes = [
    { path: '', component: Vitrine },
    { path: 'login', component: Login },
    { path: 'cadastro', component: Cadastro },
    { path: 'contato', component: Contato },
    { path: 'vitrine', component: Vitrine },
    { path: '**', redirectTo: '' }
];