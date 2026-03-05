import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-login',
  imports: [RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
    public alerta:String = "";

    public logar(){
      this.alerta = "Login realizado com sucesso!";
    }
}