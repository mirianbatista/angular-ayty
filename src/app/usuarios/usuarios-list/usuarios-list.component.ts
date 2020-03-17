import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { UsuarioDTO } from '../models/usuarioDTO.entity';
import { Router } from '@angular/router';

@Component({
    selector: 'app-usuarios-list',
    templateUrl: './usuarios-list.component.html',
    styleUrls: ['./usuarios-list.component.css']
})
export class UsuariosListComponent implements OnInit {

    loading: boolean = true;
    users: UsuarioDTO[] = [];

    constructor(private service: UsuarioService, private router: Router) { }

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

    view(id: number) {
        this.router.navigate(["usuarios", "view", id]);
    }

    edit(id: number) {
        this.router.navigate(["usuarios", "edit", id]);
    }

}
