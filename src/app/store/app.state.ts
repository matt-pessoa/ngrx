import { createAction, createReducer, on, props } from '@ngrx/store';

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
  dataCriacao?: string;
  id?: number;
  nome?: string;
  perguntas?: IPergunta[];
}

export interface IFormulariosPendentes {
  aluno?: { id: number };
  dataCriacao?: string;
  formulario?: IFormulario;
  id?: number;
  status?: StatusFormulario | string;
}

export interface IAppState {
  formulariosPendentes: IFormulariosPendentes[];
}

// devemos iniciar a aplicação com um estado inicial

export const appInitialState: IAppState = {
  formulariosPendentes: [
    {
      aluno: { id: 357202 },
      dataCriacao: '2023',
      formulario: {
        dataCriacao: '2023',
        nome: 'formulario02',
        perguntas: [
          {
            enunciado: 'Seu nome é?',
            id: 2604400,
            numero: 1,
            obrigatoria: true,
            tipoPergunta: 'BINARIO',
          },
          {
            enunciado: 'Discorra?',
            id: 2604400,
            numero: 1,
            obrigatoria: false,
            tipoPergunta: 'TEXTO',
          },
        ],
      },
      id: 2604400,
      status: 'RESPONDIDO',
    },
  ],
};

export const setForm = createAction(
  '[Forms Pendentes] adiciona forms pendentes',
  props<{ formulariosPendentes: IFormulariosPendentes[] }>()
);

export const appReducer = createReducer(
  appInitialState,
  on(setForm, (state, { formulariosPendentes }) => {
    state = {
      formulariosPendentes,
    };
    return state;
  })
);
