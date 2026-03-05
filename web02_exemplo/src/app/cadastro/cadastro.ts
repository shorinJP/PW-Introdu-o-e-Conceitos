import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-cadastro',
  imports: [RouterModule], 
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
})
export class Cadastro {
    public alerta:String = "";

    public cadastrar(){
      this.alerta = "Cadastro realizado com sucesso! Bem-vindo(a)!";
    }
}