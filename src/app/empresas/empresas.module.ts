import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpresaListComponent } from './empresa-list/empresa-list.component';
import { RouterModule } from '@angular/router';
import { EmpresasRoutingModule } from './empresa-routing.module';



@NgModule({
  declarations: [EmpresaListComponent],
  imports: [
    CommonModule,
    EmpresasRoutingModule,
  ]
})
export class EmpresasModule { }
