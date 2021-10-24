import { ConfigService } from './config.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../models/Usuario';
import { RespuestaTop } from '../models/interfaces/Respuesta';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  urlApi = environment.urlApi;
  constructor(private http: HttpClient, private sConfig: ConfigService) { }

  isLogin(objUser: Usuario) {
    const headers = this.sConfig.getHeaders();

    let obj = {
      "email": objUser.email + "",
      "password": objUser.password + ""
    }
    const params = JSON.stringify(obj);
    return this.http.post<RespuestaTop>(this.urlApi + "login", params, { headers });
  }

  isSignUp(objUser: Usuario) {
    const headers = this.sConfig.getHeaders();
    let obj = {
      "email": objUser.email,
      "password": objUser.password
    }
    const params = JSON.stringify(obj);
    return this.http.post<RespuestaTop>(this.urlApi + "usuario", params, { headers });
  }
  validatorEmail(email: string): boolean {
    let regexp: RegExp = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    return regexp.test(email);
  }
}
