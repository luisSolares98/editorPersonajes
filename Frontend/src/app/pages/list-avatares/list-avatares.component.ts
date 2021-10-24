import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Avatar } from '../../models/Avatar';
import { AvatarService } from '../../services/avatar.service';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-list-avatares',
  templateUrl: './list-avatares.component.html',
  styleUrls: ['./list-avatares.component.css']
})
export class ListAvataresComponent implements OnInit {

  listAvatar: Avatar[];
  constructor(private sAvatar: AvatarService, private _router: Router, private sConfig: ConfigService) { 
    this.listAvatar = [];
  }

  ngOnInit(): void {
    this.list();
    console.info("entrando a los diseños creados por el usaurio")
  }
  list() {
    this.sAvatar.selectAll().subscribe(resp=> {
      this.listAvatar = resp.avatares.filter(obj =>  { return obj.usuarioId != parseInt(this.sConfig.getCookie("usuarioId"))});
    });
  }
  clonar(avatarId: number) {
    this._router.navigate(["clone", avatarId]);
  }

}
