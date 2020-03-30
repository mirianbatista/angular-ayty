import { Injectable } from '@angular/core';
import { IEmpresaService } from './iempresa.service';
import { EmpresaDTO } from '../models/empresaDTO.entity';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpresamockService implements IEmpresaService {

  empresas: EmpresaDTO[] = [
    new EmpresaDTO(1, "01234567890000", "Zero", "Empresa Número Zero", "Contribuir para redução das desigualdades sociais do país.", "Qualificar pessoas pobres."),
    new EmpresaDTO(2, "01234567890000", "Dois", "Empresa Número Dois", "Contribuir para redução das desigualdades sociais do país.", "Qualificar pessoas pobres."),
]

  lastId: number = 2;

  list(): Observable<any> {
    return new Observable<any>(
        (obs) => {
            obs.next(this.empresas);
            obs.complete();
        }
    );
  }
  
  getById(id: number): Observable<any> {
      let auxEmpresa: EmpresaDTO;
      this.empresas.forEach((empresa) => {
          if(empresa.id == id) auxEmpresa = empresa;
      });
      return new Observable<EmpresaDTO>((obs) => {
          obs.next(auxEmpresa);
          obs.complete();
      });
  }

  insert(empresa: any): Observable<any> {
    this.empresas.push(empresa);
    empresa.id = ++this.lastId;
    return new Observable<any> (
        (obs) => {
            obs.next(empresa);
            obs.complete();
        }
    );
  }

  constructor() { }
}