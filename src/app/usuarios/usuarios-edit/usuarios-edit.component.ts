import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioDTO } from '../models/usuarioDTO.entity';

@Component({
    selector: 'app-usuarios-edit',
    templateUrl: './usuarios-edit.component.html',
    styleUrls: ['./usuarios-edit.component.css']
})
export class UsuariosEditComponent implements OnInit {

    private formGroup: FormGroup;
    private submitted: boolean = false;
    private isLoading: boolean = true;
    private usuario: UsuarioDTO;

    constructor(
        private service: UsuarioService,
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private formBuilder: FormBuilder
    ) { }

    ngOnInit() {
        const id: number = +this.activatedRoute.snapshot.paramMap.get("id");
        this.service.getById(id).subscribe((result) => {
            this.usuario = result;
            this.isLoading = false;
            this.generateForm();
        });
    }

    get form() {
        return this.formGroup.controls;
    }

    generateForm() {
        this.formGroup = this.formBuilder.group(
            {
                name: [this.usuario.name, [Validators.required]],
                email: [this.usuario.email, [Validators.required, Validators.email]],
            }
        );
    }

    onSubmit() {
        this.submitted = true;
        if(this.submitted && this.formGroup.invalid) {
            return;
        }

        const auxUser = new UsuarioDTO(this.usuario.id, this.form["name"].value, this.form["email"].value)

        this.service.update(auxUser).subscribe((result) => {
            this.router.navigate(["usuarios", "view", this.usuario.id]);
        });
    }

}
