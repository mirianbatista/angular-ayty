import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpresaListComponent } from './empresa-list/empresa-list.component';
import { RouterModule } from '@angular/router';
import { EmpresasRoutingModule } from './empresa-routing.module';
import { EmpresaCreateComponent } from './empresa-create/empresa-create.component';



@NgModule({
  declarations: [EmpresaListComponent, EmpresaCreateComponent],
  imports: [
    CommonModule,
    EmpresasRoutingModule,
  ]
})
export class EmpresasModule { }
