export class Item {

    constructor(private _id: number, private _posicion_x: number, private _posicion_y: number, private _posicion_z:number, private _ancho: number, private _alto: number, private _nombre: string, private _nombreCategoria: string) {
    
    }
    public get id(): number {
        return this._id;
    }

    public set id(id: number) {
        this._id = id;
    }
    public get nombre(): string {
        return this._nombre;
    }

    public set nombre(nombre: string) {
        this._nombre = nombre;
    }

    public set nombreCategoria(nombreCategoria: string) {
        this._nombreCategoria = nombreCategoria;
    }

    public get nombreCategoria(): string {
        return this._nombreCategoria;
    }
    public get posicion_x(): number {
        return this._posicion_x;
    }

    public set posicion_x(posicion_x: number) {
        this._posicion_x = posicion_x;
    }
    public get posicion_z(): number {
        return this._posicion_z;
    }

    public set posicion_z(posicion_z: number) {
        this._posicion_z = posicion_z;
    }
    public get posicion_y(): number {
        return this._posicion_y;
    }

    public set posicion_y(posicion_y: number) {
        this._posicion_y = posicion_y;
    }
    public get ancho(): number {
        return this._ancho;
    }

    public set ancho(ancho: number) {
        this._ancho = ancho;
    }
    public get alto(): number {
        return this._alto;
    }

    public set alto(alto: number) {
        this._alto = alto;
    }

}