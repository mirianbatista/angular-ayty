import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosListComponent } from './usuarios-list/usuarios-list.component';
import { UsuarioService } from './service/usuario.service';
import { UsuarioMockService } from './service/usuariomock.service';
import { UsuarioCreateComponent } from './usuario-create/usuario-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsuariosViewComponent } from './usuarios-view/usuarios-view.component';



@NgModule({
  declarations: [UsuariosComponent, UsuariosListComponent, UsuarioCreateComponent, UsuariosViewComponent],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
      {
          provide: UsuarioService,
          useClass: UsuarioMockService
      },
  ]
})
export class UsuariosModule { }
