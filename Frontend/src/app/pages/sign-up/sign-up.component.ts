import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/Usuario';
import { UsuarioService } from '../../services/usuario.service';
import { ConfigService } from '../../services/config.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['../login/login.component.css']
})
export class SignUpComponent implements OnInit {

  objUser: Usuario;
  constructor(private sUsuario: UsuarioService, private sConfig: ConfigService, private _router: Router) {
    this.objUser = new Usuario();
  }

  ngOnInit() {
    console.info("ingresando a registro");
  }
  onSubmit() {
    if ( !this.sUsuario.validatorEmail(this.objUser.email) ) {
      alert("introduzca un email valido");
      return;
    }
    this.sUsuario.isSignUp(this.objUser).subscribe(resp => {
      if (resp.status == 200 && resp.usuario) {
        console.info("usuario registrado exitosamente");
        console.info(resp.usuario);
        this.sConfig.setCookie(resp.usuario.id + "");
        this._router.navigate(["index"]);
        return;
      }
    }, error => {
      console.error("ocurrio un error al momento de consultar la D.B", error.error.mensaje.sqlMessage);
      alert(error.error.mensaje.sqlMessage);
    });
  }


}
