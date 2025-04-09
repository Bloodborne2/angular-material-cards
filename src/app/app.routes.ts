import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PessoaLoginComponent } from './pages/pessoa-login/pessoa-login.component';
import { PessoaListagemComponent } from './pages/pessoa-listagem/pessoa-listagem.component';


export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home',
    },
    {
        path: 'pessoas/login',
        component: PessoaLoginComponent,
        title: 'Login',
    },

    {
        path: 'pessoa-listagem',
        component: PessoaListagemComponent,
        title: 'Listagem de Pessoa',
    }


];
