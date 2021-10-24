import { Avatar } from './../models/Avatar';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { ConfigService } from './config.service';
import { RespuestaTop } from '../models/interfaces/Respuesta';
import { Usuario } from '../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class AvatarService {
  urlApi = environment.urlApi;
  constructor(private http: HttpClient, private sConfig: ConfigService) { }
  insert(avatar: Avatar, usuarioId: number) {
    const headers = this.sConfig.getHeaders();
    let obj = {
      "nombre": "el Personaje" + Math.floor(Math.random() * ( 9999 - 0)) + 0,
      "usuarioId": usuarioId,
      "listItem": avatar.items
    }
    const params = JSON.stringify(obj);
    console.log(avatar);
    return this.http.post<RespuestaTop>(this.urlApi + "/avatar", params, { headers });
  }
  selectById(idAvatar: number) {
    const headers = this.sConfig.getHeaders();
    return this.http.get<RespuestaTop>(this.urlApi + "avatar/" + idAvatar, {headers});
  }
  selectAllxUsuario(usuarioId: number) {
    const headers = this.sConfig.getHeaders();
    return this.http.get<RespuestaTop>(this.urlApi + 'avatar/usuario/' + usuarioId,  { headers });
  }
  selectAll() {
    const headers = this.sConfig.getHeaders();
    return this.http.get<RespuestaTop>(this.urlApi + 'avatar/' ,  { headers });
  }
  delete(avatarId: number) {
    const headers = this.sConfig.getHeaders();
    return this.http.delete<RespuestaTop>(this.urlApi + 'avatar/' + avatarId, {headers});
  }
}
