import { Observable } from 'rxjs';
import { EmpresaDTO } from '../models/empresaDTO.entity';

export interface IEmpresaService {
    list(): Observable<any>;
    getById(id: number): Observable<any>;
    insert(empresa: any): Observable<any>;
    //delete(id: number): Observable<any>;
    //update(empresa: EmpresaDTO): Observable<any>;
}
