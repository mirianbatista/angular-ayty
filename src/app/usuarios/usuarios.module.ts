import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosListComponent } from './usuarios-list/usuarios-list.component';
import { UsuarioService } from './service/usuario.service';
import { UsuarioMockService } from './service/usuariomock.service';
import { UsuarioCreateComponent } from './usuario-create/usuario-create.component';



@NgModule({
  declarations: [UsuariosComponent, UsuariosListComponent, UsuarioCreateComponent],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
  ],
  providers: [
      {
          provide: UsuarioService,
          useClass: UsuarioMockService
      },
  ]
})
export class UsuariosModule { }
