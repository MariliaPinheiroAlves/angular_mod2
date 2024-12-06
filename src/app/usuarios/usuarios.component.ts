import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Observable, of } from 'rxjs';
import { UserList, UserServiceService } from '../services/user-service.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [RouterLink, AsyncPipe],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})

export class UsuariosComponent {
  constructor(private readonly userService: UserServiceService) { };
  
  usuarios$: Observable<UserList> = of([]);

  private readonly _router = inject(Router);

  ngOnInit() {
    this.usuarios$ = this.userService.getAllUsers();
  }

  renderUsuario(id: number) {
    this._router.navigate([`/usuario/${id}`]);
  }
}
