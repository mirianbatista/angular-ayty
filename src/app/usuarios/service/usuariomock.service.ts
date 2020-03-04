import { Injectable } from '@angular/core';
import { IUsuarioService } from './iusuario.service';
import { Usuario } from '../models/usuarioDTO.entity';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UsuarioMockService implements IUsuarioService {

    usuarios: Usuario[] = [
        new Usuario(1, "Gustavo Maciel", "gustavo@mail.com"),
        new Usuario(2, "Vinnicius", "vinnicius@mail.com"),
    ]

    list(): Observable<any> {
        return new Observable<any>(
            (obs) => {
                obs.next(this.usuarios);
                obs.complete();
            }
        );
    }
    getById(id: number): Observable<any> {
        throw new Error("Method not implemented.");
    }
    insert(usuario: any): Observable<any> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): Observable<any> {
        const aux: Usuario[] = []
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
