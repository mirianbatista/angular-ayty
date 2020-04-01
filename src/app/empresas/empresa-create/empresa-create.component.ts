import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpresamockService } from '../service/empresamock.service';
import { EmpresaDTO } from '../models/empresaDTO.entity';
import { UsuarioDTO } from 'src/app/usuarios/models/usuarioDTO.entity';
import { UsuarioMockService } from 'src/app/usuarios/service/usuariomock.service';


@Component({
  selector: 'app-empresa-create',
  templateUrl: './empresa-create.component.html',
  styleUrls: ['./empresa-create.component.css']
})
export class EmpresaCreateComponent implements OnInit {

  private formGroup: FormGroup;
  private submitted: boolean = false;
  public usuarios: Array<UsuarioDTO>;

  constructor(private service: EmpresamockService, private formBuilder: FormBuilder, private route: Router, private usuariosService: UsuarioMockService) { }

  ngOnInit() {
    this.generateForm();
    this.usuariosService.list().subscribe(result => {
        this.usuarios = result;
    })
  }

  get form() {
      return this.formGroup.controls;
  }

  generateForm() {
      this.formGroup = this.formBuilder.group(
          {
              nome_fant: ['', [Validators.required]],
              razao_social: ['', [Validators.required]],
              cnpj: ['', [Validators.required]],
              missao: ['', [Validators.required]],
              visao: ['', [Validators.required]],
              funcionarios: [''],
          }
      );
  }

  onSubmit() {
      this.submitted = true;
      console.log(this.formGroup.value)
      if(this.formGroup.invalid) {
          return;
      }

      const empresa: EmpresaDTO = new EmpresaDTO(
          null,
          this.formGroup.controls["nome_fant"].value,
          this.formGroup.controls["razao_social"].value,
          this.formGroup.controls["cnpj"].value,
          this.formGroup.controls["missao"].value,
          this.formGroup.controls["visao"].value,
          this.formGroup.controls["funcionarios"].value,
      );

      this.service.insert(empresa).subscribe(
          result => {
              this.route.navigate(['/empresas']);
          }, err => {

          }
      );
  }
  onReset() {
      this.submitted = false;
      this.formGroup.reset();
  }

  }
