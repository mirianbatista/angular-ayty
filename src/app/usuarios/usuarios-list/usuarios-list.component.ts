import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { Usuario } from '../models/usuarioDTO.entity';

@Component({
    selector: 'app-usuarios-list',
    templateUrl: './usuarios-list.component.html',
    styleUrls: ['./usuarios-list.component.css']
})
export class UsuariosListComponent implements OnInit {

    loading: boolean = true;
    users: Usuario[] = [];

    constructor(private service: UsuarioService) { }

    ngOnInit() {
        this.list();
    }

    list() {
        this.loading = true;
        this.service.list().subscribe(
            res => {
                this.loading = false;
                this.users = res;
            }, err => {
                console.log(err);
            }
        );
    }

    delete(id: number) {
        this.service.delete(id).subscribe(
            res => {
                this.list();
            }, err => {
                console.log(err)
            }
        );
        return false;
    }

}
