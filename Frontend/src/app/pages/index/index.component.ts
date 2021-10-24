import { Component, OnInit } from '@angular/core';
import { AvatarService } from '../../services/avatar.service';
import { Avatar } from '../../models/Avatar';
import { Router } from '@angular/router';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  listAvatar: Avatar[];
  constructor(private sAvatar: AvatarService, private _router: Router, private sConfig: ConfigService) { 
    this.listAvatar = [];
  }

  ngOnInit(): void {
    this.list();
    console.info("entrando a dashbord");
  }
  list() {
    this.sAvatar.selectAllxUsuario(parseInt(this.sConfig.getCookie("usuarioId"))).subscribe(resp=> {
      console.info("opteniendo los diseños creados por el usuario");
      this.listAvatar = resp.avatares;
    });
  }
  edit(avatarId: number) {
    this._router.navigate(["edit", avatarId]);
  }
  delete(avatarId: number) {
    this.sAvatar.delete(avatarId).subscribe(resp=> {
      this.list();
    });
  }

}
