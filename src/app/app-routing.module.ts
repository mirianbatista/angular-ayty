import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
    
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full',
    },
    {
        path: 'usuarios',
        loadChildren: './usuarios/usuarios.module#UsuariosModule',
    },
    {
        path: 'empresas',
        loadChildren: './empresas/empresas.module#EmpresasModule',
    },
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes),
      FormsModule, ReactiveFormsModule
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
