import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import {Usuario} from '../../models/Usuario';
import { ConfigService } from 'src/app/services/config.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  objUser: Usuario;
  constructor(private sUsuario: UsuarioService, private _router: Router,private sConfig: ConfigService) {
    this.objUser = new Usuario();
  }

  ngOnInit() {
    this.sConfig.setCookie("");
    console.info("ingresando a login");

  }
  onSubmit() {
    if ( !this.sUsuario.validatorEmail(this.objUser.email) ) {
      alert("introduzca un email valido");
      return;
    }
    this.sUsuario.isLogin(this.objUser).subscribe(resp => {
      if (resp.status == 200 && resp.usuario) {
        console.info("usuario logeado exitosamente");
        console.info(resp.usuario);
        this.sConfig.setCookie(resp.usuario.id + "");
        this._router.navigate(["index"]);
        console.log(resp);
        return;
      }
    });
  }

}
