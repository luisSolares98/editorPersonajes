import { Avatar } from './Avatar';
export class Usuario {
    
    constructor(private _id:number = 0, private _email: string = "", private _password: string = "", private _listAvatar: Avatar[] = []) {
    }

    public get id():number {
        return this._id;
    }
    public set id(id: number){
        this._id = id;
    }
    public get email(): string {
        return this._email;
    }
    public set email(email: string) {
        this._email = email;
    }
    public get password(): string {
        return this._password;
    }
    public set password(password: string) {
        this._password = password;
    }
    public get listAvatar(): Avatar[] {
        return this._listAvatar;
    }
    public set listAvatar(listAvatar: Avatar[]) {
        this._listAvatar = listAvatar;
    }
    public avatarAdd(avatar: Avatar) {
        this._listAvatar.push(avatar);
    }
}