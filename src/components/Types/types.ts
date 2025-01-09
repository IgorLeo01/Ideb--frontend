
export interface UserDataEspecialista extends Partial<PerfilData> {
    id: number;
    roles: string;
    nome: string;
    email: string;
    senha: string;
    celular: string;
    cpf: string;
    genero: string;
    especialidade: string;
    objetivo: string;
    anoInicioAtendimentos: number;
    crp: string;
  }

  export interface UserDataEmpresa {
    nome: string;
    email: string;
    senha: string;
    celular: string;
    cnpj: string;
    areaAtuacao: string;
    quantidadeVinculos: number;
    contato: string;
  }  

  export interface EspecialistaDTO {
    id: number;
    nome: string;
    especialidade: string;
    anoInicioAtendimentos: number;
    crp?: string;
    perfilDTO: {
      foto: string;
      descricaoPessoal?: string;
      experiencia?: string;
      especialidadesArea?: string[];
      formacao?: string;
  };
  }

  export interface DisponibilidadeData {
    especialistaId: number;
    dataInicio: string;
    dataFim: string;
    disponibilidades: {
      data: string;
      horarios: string[];
    }[];
  }


export interface PerfilData {
    foto: string;
    dataNascimento: string;
    endereco: string;
    experiencia: string;
    especialidadesArea: string[];
    descricaoPessoal: string;
}

export interface ProfessionalData {
  tipoProfissional: string;
  idiomas: string[];
  assinatura: string;
  formacao: string;
  resumo: string;
}

export interface FinancialData {
  cpf: string;
  cnpj: string;
  nomeBanco: string;
  agencia: string;
  conta: string;
  digito: string;
  pixTipoChave: string;
  pixChave: string;
}
