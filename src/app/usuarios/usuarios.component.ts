import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})

export class UsuariosComponent {
  usuarios = [
    { nome: 'Marilia', email: 'marilia@mail.com' },
    { nome: 'Carlos', email: 'carlos@mail.com' },
    { nome: 'Ana', email: 'ana@mail.com' },
    { nome: 'João', email: 'joao@mail.com' },
    { nome: 'Fernanda', email: 'fernanda@mail.com' },
    { nome: 'Lucas', email: 'lucas@mail.com' },
    { nome: 'Beatriz', email: 'beatriz@mail.com' },
    { nome: 'Gustavo', email: 'gustavo@mail.com' },
    { nome: 'Juliana', email: 'juliana@mail.com' },
    { nome: 'Rafael', email: 'rafael@mail.com' }
  ];


}
