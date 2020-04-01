import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpresaListComponent } from './empresa-list/empresa-list.component';
import { RouterModule } from '@angular/router';
import { EmpresasRoutingModule } from './empresa-routing.module';
import { EmpresaCreateComponent } from './empresa-create/empresa-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmpresasViewComponent } from './empresas-view/empresas-view.component';
import { EmpresasEditComponent } from './empresas-edit/empresas-edit.component';
import { MatTabsModule } from '@angular/material';



@NgModule({
  declarations: [
    EmpresaListComponent, 
    EmpresaCreateComponent, 
    EmpresasViewComponent, 
    EmpresasEditComponent,
  ],
  imports: [
    CommonModule,
    EmpresasRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
  ]
})
export class EmpresasModule { }
