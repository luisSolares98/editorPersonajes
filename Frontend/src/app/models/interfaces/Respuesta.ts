import { Avatar } from "../Avatar";
import { Usuario } from "../Usuario";
import { Item } from '../Item';

export interface RespuestaTop {
    status: number;
    mensaje: string;
    usuario: Usuario;
    avatares: Avatar[];
    avatar: Avatar;
    items: Item[];
}