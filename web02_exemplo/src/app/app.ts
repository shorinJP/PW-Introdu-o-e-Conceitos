import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // IMPORTANTE: adicione esta linha
import { CommonModule } from '@angular/common'; // Opcional, mas útil

@Component({
  selector: 'app-root',
  imports: [RouterModule, CommonModule], // RouterModule PRECISA estar aqui!
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'minha-loja';
}