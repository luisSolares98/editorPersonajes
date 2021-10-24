import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Avatar } from 'src/app/models/Avatar';
import { Item } from 'src/app/models/Item';
import { Ojos } from 'src/app/models/Ojos';
import { AvatarService } from 'src/app/services/avatar.service';
import { ItemService } from '../../services/item.service';
import { Boca } from '../../models/Boca';
import { Cabello } from '../../models/Cabello';
import { Lente } from '../../models/Lente';
import { Cuerpo } from '../../models/Cuerpo';
import { Polera } from '../../models/Polera';
import { Pantalon } from '../../models/Pantalon';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-edicion',
  templateUrl: './edicion.component.html',
  styleUrls: ['./edicion.component.css']
})
export class EdicionComponent implements OnInit {
  avatar: Avatar;
  avatarId: any;
  @Input() clone: boolean = false;
  /* listado de Items */
  listItems: Item[];
  listOjos: Ojos[];
  listBoca: Boca[];
  listCabello: Cabello[];
  listLentes: Lente[];
  listCuerpo: Cuerpo[];
  listRopa: Polera[];
  listPantalon: Pantalon[];
  /* identificadores */
  objOjos: Ojos;
  objBoca: Item;
  objRopa: Item;
  objLentes: Item;
  objCuerpo: Item;
  objPantalon: Item;
  objCabello: Item;

  constructor(private sConfig: ConfigService, private sAvatar: AvatarService,private router: ActivatedRoute ,  private sItem: ItemService, private _route: Router) {
    this.avatarId = this.router.snapshot.paramMap.get("avatarId") || null;
    console.info("entrando al editor");
    console.log("inicializando las variables");
    this.avatar = new Avatar();
    this.objOjos = new Ojos();
    this.objBoca = new Boca();
    this.objLentes = new Lente();
    this.objPantalon = new Pantalon();
    this.objCuerpo = new Cuerpo();
    this.objCabello = new Cabello();
    this.objRopa = new Polera();
  
    this.listItems = [];
    this.listOjos = [];
    this.listCabello = [];
    this.listBoca = [];
    this.listLentes = [];
    this.listRopa = [];
    this.listCuerpo = [];
    this.listPantalon = [];
  }

  
  async ngOnInit() {
    if (this.avatarId) {
      console.log("se obtuvo un avatar");
      await this.getAvatar(this.avatarId);
    }
    this.sItem.selectAllItem().subscribe(resp => {
     console.info("se esta cargando los distintos items");
      this.listItems = resp.items;
      this.listOjos = resp.items.filter(item => 
        item.nombreCategoria == "Ojos"
      );
      this.listBoca = resp.items.filter(item => 
        item.nombreCategoria == "Boca"
      ); 
      this.listCabello = resp.items.filter(item => 
        item.nombreCategoria == "Cabello"
      );
      this.listLentes = resp.items.filter(item => 
        item.nombreCategoria == "Lente"
      ); 
      this.listRopa = resp.items.filter(item => 
        item.nombreCategoria == "Polera"
      );
      this.listCuerpo = resp.items.filter(item => 
        item.nombreCategoria == "Cuerpo"
      ); 
      this.listPantalon = resp.items.filter(item => 
        item.nombreCategoria == "Pantalon"
      ); 
      this.init();

    });
  }
  init() {
    console.info("obteniendo los items sujuetos al avatar");
    this.objOjos = this.search("Ojos")? this.search("Ojos") : new Ojos();
    this.objBoca = this.search("Boca")? this.search("Boca") : new Boca();
    this.objCabello = this.search("Cabello")? this.search("Cabello") : new Cabello();
    this.objPantalon = this.search("Pantalon")? this.search("Pantalon") : new Pantalon();
    this.objRopa = this.search("Polera")? this.search("Polera"): new Polera();
    this.objLentes = this.search("Lente")? this.search("Lente") : new Lente();
    this.objCuerpo = this.search("Cuerpo")? this.search("Cuerpo") : new Cuerpo();
  }
  getAvatar (avatarId: any) {
    return new Promise(resolve => {
      this.sAvatar.selectById(avatarId).subscribe(resp=> {
        this.avatar = resp.avatar;
        this.sItem.selectItemXavatar(resp.avatar.id).subscribe(resp2 => {
          this.avatar.items = resp2.items;
          resolve('true');
        });
      });
    });
    
  }
  cambio(obj: Item) {
    console.log("se esta cambiando el item escogido" , obj);
    if (obj.id == 0) {
      this.removeItems(obj.nombreCategoria);
      return;
    }
    this.setObj(obj);
  }

  setObj(obj: Item) {
    switch (obj.nombreCategoria) {
      case "Ojos":
        for (let index = 0; index < this.listOjos.length; index++) {
          const element = this.listOjos[index];
          if (element.id == obj.id) {
            this.objOjos.id = obj.id;
            this.objOjos.nombre = element.nombre;
            this.objOjos.posicion_x = element.posicion_x;
            this.objOjos.posicion_y = element.posicion_y;
            this.objOjos.posicion_z = element.posicion_z;
            this.objOjos.ancho = element.ancho;
            this.objOjos.alto = element.alto;
            this.addItem(this.objOjos);
            break;
          }
        }
        break;
      case "Cuerpo":
        for (let index = 0; index < this.listCuerpo.length; index++) {
          const element = this.listCuerpo[index];
          if (element.id == obj.id) {
            this.objCuerpo.id = obj.id;
            this.objCuerpo.nombre = element.nombre;
            this.objCuerpo.posicion_x = element.posicion_x;
            this.objCuerpo.posicion_y = element.posicion_y;
            this.objCuerpo.posicion_z = element.posicion_z;
            this.objCuerpo.ancho = element.ancho;
            this.objCuerpo.alto = element.alto;
            this.addItem(this.objCuerpo);
            break;
          }
        }
        break;
      case "Boca":
        this.listBoca.forEach(element => {
          if (element.id == obj.id) {
            this.objBoca.id = obj.id;
            this.objBoca.nombre = element.nombre;
            this.objBoca.posicion_x = element.posicion_x;
            this.objBoca.posicion_y = element.posicion_y;
            this.objBoca.posicion_z = element.posicion_z;
            this.objBoca.ancho = element.ancho;
            this.objBoca.alto = element.alto;
            this.addItem(this.objBoca);
            return;
          }
        });
        break;
      case "Lente":
        this.listLentes.forEach(element => {
          if (element.id == obj.id) {
            this.objLentes.id = obj.id;
            this.objLentes.nombre = element.nombre;
            this.objLentes.posicion_x = element.posicion_x;
            this.objLentes.posicion_y = element.posicion_y;
            this.objLentes.posicion_z = element.posicion_z;
            this.objLentes.ancho = element.ancho;
            this.objLentes.alto = element.alto;
            this.addItem(this.objLentes);
            return;
          }
        });
        break;
      case "Polera":
        this.listRopa.forEach(element => {
          if (element.id == obj.id) {
            this.objRopa.id = obj.id;
            this.objRopa.nombre = element.nombre;
            this.objRopa.posicion_x = element.posicion_x;
            this.objRopa.posicion_y = element.posicion_y;
            this.objRopa.posicion_z = element.posicion_z;
            this.objRopa.ancho = element.ancho;
            this.objRopa.alto = element.alto;
            this.addItem(this.objRopa);
          }
        });
        break;
      case "Pantalon":
        this.listPantalon.forEach(element => {
          if (element.id == obj.id) {
            this.objPantalon.id = obj.id;
            this.objPantalon.nombre = element.nombre;
            this.objPantalon.posicion_x = element.posicion_x;
            this.objPantalon.posicion_y = element.posicion_y;
            this.objPantalon.posicion_z = element.posicion_z;
            this.objPantalon.ancho = element.ancho;
            this.objPantalon.alto = element.alto;
            this.addItem(this.objPantalon);
            return;
          }
        });
        break;
      case "Cabello":
        this.listCabello.forEach(element => {
          if (element.id == obj.id) {
            this.objCabello.id = obj.id;
            this.objCabello.nombre = element.nombre;
            this.objCabello.posicion_x = element.posicion_x;
            this.objCabello.posicion_y = element.posicion_y;
            this.objCabello.posicion_z = element.posicion_z;
            this.objCabello.ancho = element.ancho;
            this.objCabello.alto = element.alto;
            this.addItem(this.objCabello);
            return;
          }
        });
        break;
    }
  }
  removeItems(nombreCategoria: string){ 
    console.info("se esta removiendo un item, categoria del Item", nombreCategoria )
    const index = this.getPosicion(nombreCategoria);
    if (index == -1) {
        return false;
    }
    this.avatar.items.splice(index, 1);
    return true;
  }
  getPosicion(nombreCategoria: string): number {
    for (let index = 0; index < this.avatar.items.length; index++) {
        const element = this.avatar.items[index];
        if (element.nombreCategoria == nombreCategoria) {
            return index;
        }
    }
    return -1;
  }
  addItem(item: Item): void {
    console.info("se esta añadiendo el Item")
    this.removeItems(item.nombreCategoria);
    this.avatar.items.push(item);
  }
  search(nombre: string): Item {
    return this.avatar.items.filter(obj => obj.nombreCategoria == nombre)[0];
  }
  save() {
    if (this.avatarId) {
      
      console.info("se esta actualizando el avatar...");
      this.sItem.update(this.avatar).subscribe(resp => {
        alert(resp.mensaje)
        console.info("se actualizo el avatar");
      });
      return;
    }
    console.info("se esta insertando un nuevo avatar...")
    this.sAvatar.insert(this.avatar, parseInt(this.sConfig.getCookie("usuarioId"))).subscribe(resp => {
        alert(resp.mensaje);
        console.info("se esta  inserto el avatar");

    });
  }
  clonar() {
    console.info("se esta clonando un avatar");
    this.sAvatar.insert(this.avatar, parseInt(this.sConfig.getCookie("usuarioId"))).subscribe(resp => {
      alert(resp.mensaje);
      console.info("avatar clonado");
      this._route.navigate(["list"]);

    });
  }
  generateRamdon() {
    console.info("obteniendo personaje Random");
    let listRandom: Item[] = [];
    let max = this.listOjos.length;

    listRandom.push(this.listOjos[Math.floor(Math.random() * ( this.listOjos.length - 0)) + 0]);
    listRandom.push(this.listPantalon[Math.floor(Math.random() * ( this.listPantalon.length - 0)) + 0]);
    listRandom.push(this.listRopa[Math.floor(Math.random() * ( this.listRopa.length - 0)) + 0]);
    listRandom.push(this.listCabello[Math.floor(Math.random() * ( this.listCabello.length - 0)) + 0]);
    listRandom.push(this.listCuerpo[Math.floor(Math.random() * ( this.listCuerpo.length - 0)) + 0]);
    listRandom.push(this.listBoca[Math.floor(Math.random() * ( this.listBoca.length - 0)) + 0]);
    listRandom.push(this.listLentes[Math.floor(Math.random() * ( this.listLentes.length - 0)) + 0]);

    listRandom.forEach(element => {
      this.setObj(element);
    });
  }
}
