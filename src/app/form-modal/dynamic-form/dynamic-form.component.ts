import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Subject, Subscription, takeUntil } from 'rxjs';
import {
  IAppState,
  IFormulariosPendentes,
  IPergunta,
  setForm,
} from 'src/app/store/app.state';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
})
export class DynamicFormComponent implements OnInit {
  @Input() formulariosPendentes!: IFormulariosPendentes[];

  formulariosNaoEnviados!: IFormulariosPendentes[] | undefined;
  formularioAtual!: IFormulariosPendentes | undefined;
  perguntas!: IPergunta[] | undefined;
  pendentes$ = this.store
    .select('app')
    .pipe(map(({ formulariosPendentes }: any) => formulariosPendentes));
  pendentes!: IFormulariosPendentes[];
  activatedSubscription!: Subscription;
  done = new Subject();
  formTranslate!: any[];

  constructor(private store: Store<{ app: IAppState }>) {}

  // getFormulariosPendentesRedux() {
  //   this.activatedSubscription = this.pendentes$
  //     .pipe(takeUntil(this.done))
  //     .subscribe((data) => {
  //       console.log(data);
  //     });
  // }

  ngOnInit(): void {
    this.formulariosNaoEnviados = this.formulariosPendentes;
    this.formularioAtual = this.formulariosPendentes[0];
    this.perguntas = this.formularioAtual?.formulario?.perguntas;
  }
}
