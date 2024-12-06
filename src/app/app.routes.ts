import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component'; 
import { CadastroComponent } from './pages/cadastro/cadastro.component'; 
import { UsuariosComponent } from './usuarios/usuarios.component';
<<<<<<< HEAD
import { HomeComponent } from './home/home.component';
import { UsuarioComponent } from './usuario/usuario.component';
=======
import { HomeComponent } from './pages/home/home.component';
>>>>>>> 7f757106066ddcd04b1de701ae7c308b04c279fd

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
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
    },
    {
        path: 'usuario/:id',
        component: UsuarioComponent
    }
];
