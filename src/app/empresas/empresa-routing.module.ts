import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { EmpresaListComponent } from './empresa-list/empresa-list.component';
import { EmpresaCreateComponent } from './empresa-create/empresa-create.component';
//import { EmpresaViewComponent } from './empresa-view/empresa-view.component';
//import { EmpresaEditComponent } from './empresa-edit/empresa-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
    {
        path: '',
        component: EmpresaListComponent,
    },
    {
    path: "create",
    component: EmpresaCreateComponent,
},
]

@NgModule({
    imports: [RouterModule.forChild(routes),
        FormsModule, ReactiveFormsModule
    ],
    exports: [RouterModule]
})
export class EmpresasRoutingModule { }