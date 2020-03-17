import { Observable } from 'rxjs';
import { UsuarioDTO } from '../models/usuarioDTO.entity';

export interface IUsuarioService {
    list(): Observable<any>;
    getById(id: number): Observable<any>;
    insert(usuario: any): Observable<any>;
    delete(id: number): Observable<any>;
    update(usuario: UsuarioDTO): Observable<any>;
}