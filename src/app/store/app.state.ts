export enum StatusFormulario {
  PENDENTE = 'PENDENTE',

  RESPONDIDO = 'RESPONDIDO',

  NAORESPONDIDO = 'NAORESPONDIDO',
}

export interface IPergunta {
  enunciado?: string;
  id?: number;
  numero?: number;
  obrigatoria?: boolean;
  tipoPergunta?: string;
}

export interface IFormulario {
  dataCriacao?: 'string';
  id?: number;
  nome?: 'string';
  perguntas?: IPergunta[];
}

export interface IFormulariosPendentes {
  aluno?: { id: number };
  dataCriacao?: string;
  formulario?: IFormulario;
  id?: number;
  status?: StatusFormulario;
}

export interface IAppState {
  formulariosPendentes: IFormulariosPendentes[];
}

// devemos iniciar a aplicação com um estado inicial

export const appInitialState: IAppState = {
  formulariosPendentes: [],
};
