import { Component, OnInit } from '@angular/core';
import { EmpresamockService } from '../service/empresamock.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmpresaDTO } from '../models/empresaDTO.entity';
 
@Component({
  selector: 'app-empresas-edit',
  templateUrl: './empresas-edit.component.html',
  styleUrls: ['./empresas-edit.component.css']
}) 
export class EmpresasEditComponent implements OnInit {

    private formGroup: FormGroup;
    private submitted: boolean = false;
    private isLoading: boolean = true;
    private empresa: EmpresaDTO;

    constructor(
        private service: EmpresamockService,
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private formBuilder: FormBuilder
    ) { }

    ngOnInit() {
        const id: number = +this.activatedRoute.snapshot.paramMap.get("id");
        this.service.getById(id).subscribe((result) => {
            this.empresa = result;
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
            nome_fant: [this.empresa.nome_fant, [Validators.required]],
            razao_social: [this.empresa.razao_social, [Validators.required]],
            cnpj: [this.empresa.cnpj, [Validators.required]],
            missao: [this.empresa.missao, [Validators.required]],
            visao: [this.empresa.visao, [Validators.required]],
            funcionarios: [this.empresa.funcionarios],
        }
        );
    }

    onSubmit() {
        this.submitted = true;
        if(this.submitted && this.formGroup.invalid) {
            return;
        }

        const auxEmpresa = new EmpresaDTO(
          this.empresa.id, 
          this.form["cnpj"].value, 
          this.form["nome_fant"].value, 
          this.form["razao_social"].value, 
          this.form["missao"].value, 
          this.form["visao"].value, 
          this.form["funcionarios"].value)

        this.service.update(auxEmpresa).subscribe((result) => {
            this.router.navigate(["empresas", "view", this.empresa.id]);
        });
    }


}
