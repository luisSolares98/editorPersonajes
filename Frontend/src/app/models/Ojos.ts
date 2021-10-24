import { Item } from './Item';

export class Ojos extends Item{
    constructor (id: number = 0, posicion_x: number = 0, posicion_y: number = 0, posicion_z: number = 0,ancho: number = 0, alto: number = 0, nombre: string = "", nombreCategoria: string = "Ojos") {
        super(id, posicion_x, posicion_y, posicion_z, ancho, alto, nombre, nombreCategoria);
    }
    /*protected get nombreCategoria(): string {
        return this._nombreCategoria;
    }
    protected set nombreCategoria(value: string) {
        this._nombreCategoria = value;
    }
    protected get nombre(): string {
        return this._nombre;
    }
    protected set nombre(value: string) {
        this._nombre = value;
    }
    protected get alto(): number {
        return this._alto;
    }
    protected set alto(value: number) {
        this._alto = value;
    }
    protected get ancho(): number {
        return this._ancho;
    }
    protected set ancho(value: number) {
        this._ancho = value;
    }
    protected get posicion_y(): number {
        return this._posicion_y;
    }
    protected set posicion_y(value: number) {
        this._posicion_y = value;
    }
    protected get posicion_x(): number {
        return this._posicion_x;
    }
    protected set posicion_x(value: number) {
        this._posicion_x = value;
    }
    protected get id(): number {
        return this._id;
    }
    protected set id(value: number) {
        this._id = value;
    }
    constructor (private _id: number, private _posicion_x: number, private _posicion_y: number, private _ancho: number, private _alto: number, private _nombre: string, private _nombreCategoria: string) {
        super(_id, _posicion_x, _posicion_y, _ancho, _alto, _nombre, _nombreCategoria);
    }*/
}