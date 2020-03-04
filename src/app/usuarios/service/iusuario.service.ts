import { Observable } from 'rxjs';

export interface IUsuarioService {
    list(): Observable<any>;
    getById(id: number): Observable<any>;
    insert(usuario: any): Observable<any>;
    delete(id: number): Observable<any>;
}