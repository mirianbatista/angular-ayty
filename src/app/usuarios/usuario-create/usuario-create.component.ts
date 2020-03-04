import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioDTO } from '../models/usuarioDTO.entity';

@Component({
    selector: 'app-usuario-create',
    templateUrl: './usuario-create.component.html',
    styleUrls: ['./usuario-create.component.css']
})
export class UsuarioCreateComponent implements OnInit {

    private formGroup: FormGroup;
    private submitted: boolean = false;

    constructor(private service: UsuarioService, private formBuilder: FormBuilder, private route: Router) { }

    ngOnInit() {
        this.generateForm();
    }

    get form() {
        return this.formGroup.controls;
    }

    generateForm() {
        this.formGroup = this.formBuilder.group(
            {
                name: ['', [Validators.required]],
                email: ['', [Validators.email, Validators.required]],
            }
        );
    }

    onSubmit() {
        this.submitted = true;
        if(this.formGroup.invalid) {
            return;
        }

        const user: UsuarioDTO = new UsuarioDTO(
            null,
            this.formGroup.controls["name"].value,
            this.formGroup.controls["email"].value,
        );

        this.service.insert(user).subscribe(
            result => {
                this.route.navigate(['/usuarios']);
            }, err => {

            }
        );
    }
    onReset() {
        this.submitted = false;
        this.formGroup.reset();
    }

}
