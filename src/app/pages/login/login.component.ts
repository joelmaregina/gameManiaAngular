import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

userModel = new User("", "");

loginModel = new Login ();

mensagem = "";

onSubmit() {
  this.loginService.login(this.loginModel).subscribe( (response) => {
    console.log(response)
    this.mensagem = "Login realizado com sucesso!";
    this.router.navigateByUrl("/")

  }, (error) => {
    if (error.error == "Incorrect password"){
      this.mensagem == "Senha Incorreta";
    } else if (error.error == "Cannot find user") {
      this.mensagem = "Usuário não encontrado";
    } else if (error.error == "Password is too short" ) {
      this.mensagem =  "Senha muito curta";
    } else if(error.error == "Email and password are required"){
        this.mensagem = " Atenção! Os campos de email e senha não podem estar vazios";
    } else if (error.error == "Email format is invalid"){
      this.mensagem = "Formato de email está inválido";
    }
  } )
}

}
