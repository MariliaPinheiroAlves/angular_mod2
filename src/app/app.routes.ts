import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component'; 
import { CadastroComponent } from './pages/cadastro/cadastro.component'; 
import { UsuariosComponent } from './usuarios/usuarios.component';
import { HomeComponent } from './pages/home/home.component'; 

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'cadastro',
        component: CadastroComponent
    },
    {
        path: 'usuarios',
        component: UsuariosComponent
    }
];
