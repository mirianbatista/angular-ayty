import { Injectable } from '@angular/core';
import { IUsuarioService } from './iusuario.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService implements IUsuarioService {
    list(): import("rxjs").Observable<any> {
        throw new Error("Method not implemented.");
    }
    getById(id: number): import("rxjs").Observable<any> {
        throw new Error("Method not implemented.");
    }
    insert(usuario: any): import("rxjs").Observable<any> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): import("rxjs").Observable<any> {
        throw new Error("Method not implemented.");
    }

  constructor() { }
}
