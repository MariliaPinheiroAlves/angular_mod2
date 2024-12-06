import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface IUsuario {
  id: number;
  nome: string;
  email: string;
}

export type UserList = IUsuario[];

@Injectable({
  providedIn: 'root'
})

export class UserServiceService {
  private readonly usuarios: UserList = [
    { id: 1, nome: 'Marilia', email: 'marilia@mail.com' },
    { id: 2, nome: 'Carlos', email: 'carlos@mail.com' },
    { id: 3, nome: 'Ana', email: 'ana@mail.com' },
    { id: 4, nome: 'João', email: 'joao@mail.com' },
    { id: 5, nome: 'Fernanda', email: 'fernanda@mail.com' },
    { id: 6, nome: 'Lucas', email: 'lucas@mail.com' },
    { id: 7, nome: 'Beatriz', email: 'beatriz@mail.com' },
    { id: 8, nome: 'Gustavo', email: 'gustavo@mail.com' },
    { id: 9, nome: 'Juliana', email: 'juliana@mail.com' },
    { id: 10, nome: 'Rafael', email: 'rafael@mail.com' }
  ];

  getAllUsers(): Observable<UserList> {
    return of(this.usuarios)
  }

  getUserById(id: number): Observable<IUsuario | undefined> {
    const usuario = this.usuarios.find(u => u.id === id);
    return of(usuario);
  }
}
