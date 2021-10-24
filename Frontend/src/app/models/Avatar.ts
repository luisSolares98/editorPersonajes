import { Item } from './Item';
import { Cuerpo } from './Cuerpo';
import { Cabello } from './Cabello';
import { Lente } from './Lente';
import { Boca } from "./Boca";
import { Ojos } from "./Ojos";
import { Polera } from './Polera';
import { Pantalon } from './Pantalon';
export class Avatar {
    
    constructor(private _id?: number, private _nombre?: string, private _fecha?: Date, private _items: Item[] = [], private _usuarioId: number = 0) {
    }
    public get id(): number {
        return this._id || 0;
    }

    public set id(id: number) {
        this._id = id;
    }
    public get usuarioId(): number {
        return this._usuarioId || 0;
    }

    public set usuarioId(id: number) {
        this._usuarioId = id;
    }
    public get nombre(): string {
        return this._nombre || '';
    }

    public set nombre(nombre: string) {
        this.nombre = nombre;
    }

    public get fecha(): Date {
        return this._fecha || new Date();
    }

    public set fecha(fecha: Date) {
        this._fecha = fecha;
    }

    public get items(): Item[] {
        return this._items || [];
    }
    public set items(item: Item[]) {
        this._items = item;
    }
    addItem(item: Item): void {
        switch (item.nombreCategoria) {
            case "Ojos":
                this.createOjos(item);
                break;
            case "Cuerpo":
                this.createCuerpo(item);
                break;
            case "Boca":
                this.createBoca(item);
                break;
            case "Lentes":
                this.createLente(item);
                break;
            case "Cabello":
                this.createCabello(item);
                break;
            case "Polera":
                this.createRopaSuperior(item);
                break;
            case "Pantalon":
                this.createRopaInferior(item);
                break;
        }
    }
    private getPosicion(nombreCategoria: string): number {
        for (let index = 0; index < this._items.length; index++) {
            const element = this._items[index];
            if (element.nombreCategoria == nombreCategoria) {
                return index;
            }
        }
        return -1;
    }
    removeItems(nombreCategoria: string): boolean {
        const index = this.getPosicion(nombreCategoria);
        if (index == -1) {
            return false;
        }
        this._items.splice(index, 1);
        return true;
    }
    private createCuerpo(item: Cuerpo): void {
        this.removeItems(item.nombreCategoria);
        this._items?.push(item);
    }
    private createOjos(item: Ojos): void {
        this.removeItems(item.nombreCategoria);
        this._items?.push(item);
    }
    private createBoca(item: Boca): void {
        this.removeItems(item.nombreCategoria);
        this._items?.push(item);
    }
    private createLente(item: Lente): void {
        this.removeItems(item.nombreCategoria);
        this._items?.push(item);
    }
    private createRopaSuperior(item: Polera): void {
        this.removeItems(item.nombreCategoria);
        this._items?.push(item);
    }
    private createRopaInferior(item: Pantalon): void {
        this.removeItems(item.nombreCategoria);
        this._items?.push(item);
    }
    private createCabello(item: Cabello): void {
        this.removeItems(item.nombreCategoria);
        this._items?.push(item);
    }
    
}