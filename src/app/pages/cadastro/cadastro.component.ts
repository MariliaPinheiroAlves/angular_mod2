import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})

export class CadastroComponent {
  btnEntrar() {
    console.log('função btnEntrar')
  }

  cadastrar() {
    console.log('função cadastrar')
  }
}
