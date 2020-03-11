import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { EmpresaListComponent } from './empresa-list/empresa-list.component';
const routes: Routes = [
    {
        path: '',
        component: EmpresaListComponent,
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EmpresasRoutingModule { }