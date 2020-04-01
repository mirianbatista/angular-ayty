import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmpresamockService } from '../service/empresamock.service';
import { EmpresaDTO } from '../models/empresaDTO.entity';

@Component({
  selector: 'app-empresas-view',
  templateUrl: './empresas-view.component.html',
  styleUrls: ['./empresas-view.component.css']
})
export class EmpresasViewComponent implements OnInit {

    private isLoading: boolean = true;
    private empresa: EmpresaDTO;

    constructor(private activatedRoute: ActivatedRoute, private service: EmpresamockService) { }

    ngOnInit() {
        const id: number = +this.activatedRoute.snapshot.paramMap.get("id");
        this.service.getById(id).subscribe((result) => {
            this.empresa = result;
            this.isLoading = false;
        })
    }

}
