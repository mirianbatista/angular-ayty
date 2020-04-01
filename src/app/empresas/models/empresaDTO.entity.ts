import { UsuarioDTO } from 'src/app/usuarios/models/usuarioDTO.entity';

export class EmpresaDTO {
    id: number;
    cnpj: string;
    nome_fant: string;
    razao_social: string;
    missao: string;
    visao: string;
    funcionarios: Array<UsuarioDTO>;
    
    constructor(id: number, cnpj: string, nome_fant: string, razao_social: string, missao: string, visao: string, funcionarios: Array<UsuarioDTO>) {
        this.id = id;
        this.cnpj = cnpj;
        this.nome_fant = nome_fant;
        this.razao_social = razao_social;
        this.missao = missao;
        this.visao = visao;
        this.funcionarios = funcionarios;
    }
}