import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})

export class UsuarioComponent {
  @Input() id: number | undefined;
  usuario: { id: number; nome: string; email: string } | undefined;

  ngOnInit() {
    console.log(this.id)
    // this.usuario = this.usuariosComponent.usuarios.find(u => u.id === this.id);
  }
}
