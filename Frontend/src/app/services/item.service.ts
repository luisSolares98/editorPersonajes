import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { ConfigService } from './config.service';
import { RespuestaTop } from '../models/interfaces/Respuesta';
import { Avatar } from '../models/Avatar';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  urlApi = environment.urlApi;
  constructor(private http: HttpClient, private sConfig: ConfigService) { }
  selectAllItem() {
    const headers = this.sConfig.getHeaders();
    return this.http.get<RespuestaTop>(this.urlApi + 'item',  { headers });
  }
  selectItemXavatar(avatarId: number) {
    const headers = this.sConfig.getHeaders();
    return this.http.get<RespuestaTop>(this.urlApi + 'item/' + avatarId,  { headers });
  }
  update(avatar: Avatar) {
    const headers = this.sConfig.getHeaders();
    let obj = {
      "avatarId": avatar.id,
      "nombre": avatar.nombre,
      "usuarioId": avatar.usuarioId,
      "listItem": avatar.items
    }
    const params = JSON.stringify(obj);
    return this.http.put<RespuestaTop>(this.urlApi + 'item', params,  { headers });
  }
}
