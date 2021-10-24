import { Item } from './Item';

export class Pantalon extends Item{
    constructor (id: number = 0, posicion_x: number = 0, posicion_y: number = 0, posicion_z: number = 0,ancho: number = 0, alto: number = 0, nombre: string = "", nombreCategoria: string = "Pantalon") {
        super(id, posicion_x, posicion_y, posicion_z, ancho, alto, nombre, nombreCategoria);
    }
}