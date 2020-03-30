import { UsuarioDTO } from 'src/app/usuarios/models/usuarioDTO.entity';

export class EmpresaDTO {
    id: number;
    cnpj: string;
    name: string;
    razao_social: string;
    missao: string;
    visao: string;
    funcionarios: Array<UsuarioDTO>;

    constructor(id: number, cnpj: string, name: string, razao_social: string, missao: string, visao: string) {
        this.id = id;
        this.cnpj = cnpj;
        this.name = name;
        this.razao_social = razao_social;
        this.missao = missao;
        this.visao = visao;

    }
}