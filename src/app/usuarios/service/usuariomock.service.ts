import { Injectable } from '@angular/core';
import { IUsuarioService } from './iusuario.service';
import { UsuarioDTO } from '../models/usuarioDTO.entity';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UsuarioMockService implements IUsuarioService {

    usuarios: UsuarioDTO[] = [
        new UsuarioDTO(1, "Gustavo Maciel", "gustavo@mail.com"),
        new UsuarioDTO(2, "Vinnicius", "vinnicius@mail.com"),
    ]

    lastId: number = 2;

    list(): Observable<any> {
        return new Observable<any>(
            (obs) => {
                obs.next(this.usuarios);
                obs.complete();
            }
        );
    }
    getById(id: number): Observable<any> {
        let auxUser: UsuarioDTO;
        this.usuarios.forEach((user) => {
            if(user.id == id) auxUser = user;
        });
        return new Observable<UsuarioDTO>((obs) => {
            obs.next(auxUser);
            obs.complete();
        });
    }


    insert(usuario: any): Observable<any> {
        this.usuarios.push(usuario);
        usuario.id = ++this.lastId;
        return new Observable<any> (
            (obs) => {
                obs.next(usuario);
                obs.complete();
            }
        );
    }
    delete(id: number): Observable<any> {
        const aux: UsuarioDTO[] = []
        this.usuarios.forEach((user) => {
            if(user.id != id) {
                aux.push(user);
            }
        });
        this.usuarios = aux;        
        return new Observable<any>(
            (obs) => {
                obs.next(true);
                obs.complete();
            }
        );
    }

    constructor() { }
}
