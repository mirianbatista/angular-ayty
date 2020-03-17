import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { UsuariosListComponent } from './usuarios-list/usuarios-list.component';
import { UsuarioCreateComponent } from './usuario-create/usuario-create.component';
import { UsuariosViewComponent } from './usuarios-view/usuarios-view.component';
import { UsuariosEditComponent } from './usuarios-edit/usuarios-edit.component';

const routes: Routes = [
    {
        path: '',
        component: UsuariosListComponent,
    },
    {
        path: "create",
        component: UsuarioCreateComponent,
    },
    {
        path: "view/:id",
        component: UsuariosViewComponent,
    },
    {
        path: "edit/:id",
        component: UsuariosEditComponent,
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsuariosRoutingModule { }