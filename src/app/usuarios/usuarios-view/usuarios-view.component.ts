import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../service/usuario.service';
import { UsuarioDTO } from '../models/usuarioDTO.entity';

@Component({
    selector: 'app-usuarios-view',
    templateUrl: './usuarios-view.component.html',
    styleUrls: ['./usuarios-view.component.css']
})
export class UsuariosViewComponent implements OnInit {

    private isLoading: boolean = true;
    private usuario: UsuarioDTO;

    constructor(private activatedRoute: ActivatedRoute, private service: UsuarioService) { }

    ngOnInit() {
        const id: number = +this.activatedRoute.snapshot.paramMap.get("id");
        this.service.getById(id).subscribe((result) => {
            this.usuario = result;
            this.isLoading = false;
        })
    }

}
