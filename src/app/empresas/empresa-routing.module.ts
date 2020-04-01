import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { EmpresaListComponent } from './empresa-list/empresa-list.component';
import { EmpresaCreateComponent } from './empresa-create/empresa-create.component';
import { EmpresasViewComponent } from './empresas-view/empresas-view.component';
import { EmpresasEditComponent } from './empresas-edit/empresas-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material';


const routes: Routes = [
    {
        path: '',
        component: EmpresaListComponent,
    },
    {
    path: "create",
    component: EmpresaCreateComponent,
    },
    {
        path: "view/:id",
        component: EmpresasViewComponent,
    },
    {
        path: "edit/:id",
        component: EmpresasEditComponent,
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes),
        FormsModule, ReactiveFormsModule, MatTabsModule
    ],
    exports: [RouterModule]
})
export class EmpresasRoutingModule { }