import { AutenticacaoService } from './../../autenticacao/autenticacao.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario= '';
  senha= '';
  user = false;

  constructor(
      private authService:AutenticacaoService,
      private router:Router) { }

  ngOnInit(): void {
  }

  login(){

    this.user = this.authService.autenticar(this.usuario, this.senha);

    if(this.user){
      this.router.navigate(['animais']);
    }else {
      alert("Usuário ou senha inválido");
    }
  }

  /*
  login(){
    this.authService.autenticar(this.usuario, this.senha).subscribe(()=> {
      this.router.navigate(['animais'])
    }, (error) => {
      alert("Usuário ou senha inválido")
    })
  }
  */

}
