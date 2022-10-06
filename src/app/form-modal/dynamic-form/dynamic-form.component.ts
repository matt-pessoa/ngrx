import { Component, Input, OnInit } from '@angular/core';
import {
  IFormulario,
  IFormulariosPendentes,
  IPergunta,
} from 'src/app/store/app.state';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
})
export class DynamicFormComponent implements OnInit {
  @Input() formulariosPendentes!: IFormulariosPendentes;

  formulario!: IFormulario | undefined;
  perguntas!: IPergunta[] | undefined;

  constructor() {}

  ngOnInit(): void {
    this.formulario = this.formulariosPendentes.formulario;
    this.perguntas = this.formulario?.perguntas;
  }
}
