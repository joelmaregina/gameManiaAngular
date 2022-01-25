import { getCurrencySymbol } from '@angular/common';
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

mensagemDadosInvalidos = "";

mensagemLoginFeito = "";

onSubmit() {

  const listaPalavras: string [] = ["select ", "from ", "drop ", "or ", "having ", "group ", "by ", "insert ", "exec ", "\"", "\'", "--", "#", "*", ";" ]

  listaPalavras.forEach(palavra => {
    if(this.loginModel.email.toLowerCase().includes(palavra)){
      this.mensagemDadosInvalidos = "Dados inválidos: " + palavra;

      return;
    }
  });

  this.loginService.login(this.loginModel).subscribe( (response) => {
    console.log(response)
    this.mensagem = "";
    this.mensagemLoginFeito = "Login realizado com sucesso!";
    setTimeout(() => {this.router.navigateByUrl("/")}, 2500)

  }, (error) => {
    if (error.error == "Incorrect password"){
      this.mensagem = "Senha Incorreta";
    } else if (error.error == "Cannot find user") {
      this.mensagem = "Usuário não está cadastrado";
    } else if (error.error == "Password is too short" ) {
      this.mensagem =  "Senha muito curta";
    } else if(error.error == "Email and password are required"){
        this.mensagem = " Atenção! Os campos de email e senha não podem estar vazios";
    } else if (error.error == "Email format is invalid"){
      this.mensagem = "Formato de email digitado é inválido";
    }
  } )
  }

}
