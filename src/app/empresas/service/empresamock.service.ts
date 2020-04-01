import { Injectable } from '@angular/core';
import { IEmpresaService } from './iempresa.service';
import { EmpresaDTO } from '../models/empresaDTO.entity';
import { Observable } from 'rxjs';
import { UsuarioDTO } from 'src/app/usuarios/models/usuarioDTO.entity';

@Injectable({
    providedIn: 'root'
})
export class EmpresamockService implements IEmpresaService {

  empresas: EmpresaDTO[] = [
    new EmpresaDTO(1, "01.234.567/8900-00", "Zero", "Empresa Número Zero", "Contribuir para redução das desigualdades sociais do país.", "Qualificar pessoas pobres.", [new UsuarioDTO(1, "Gustavo Maciel", "gustavo@mail.com")]),
    new EmpresaDTO(2, "01.234.567/8900-00", "Quarenta e Dois", "Empresa Número Quarenta e Dois", "Contribuir para redução das desigualdades sociais do país.", "Qualificar pessoas pobres.", [new UsuarioDTO(2, "Vinnicius", "vinnicius@mail.com")]),
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

  update(empresa: EmpresaDTO): Observable<any> {
    let oldEmpresa = this.empresas
    .filter(empresa => empresa.id == empresa.id)
    .pop();

    Object.assign(oldEmpresa, empresa);

    return new Observable<any>((obs) => {
        obs.next(empresa);
        obs.complete();
    });
  }

  delete(id: number): Observable<any> {
    const aux: EmpresaDTO[] = []
    this.empresas.forEach((empresa) => {
        if(empresa.id != id) {
            aux.push(empresa);
        }
    });
    this.empresas = aux;        
    return new Observable<any>(
        (obs) => {
            obs.next(true);
            obs.complete();
        }
    );
  }

  constructor() { }
}