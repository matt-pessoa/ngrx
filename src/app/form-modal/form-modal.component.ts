import { Component, Injectable, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { map, Subject, Subscription, takeUntil } from 'rxjs';
import { IFormulariosPendentes } from '../store/app.state';

@Component({
  selector: 'jhi-form-modal',
  templateUrl: './form-modal.component.html',
})
export class NgbdModalAlunoContentComponent {
  @Input() formulariosPendentes!: IFormulariosPendentes;

  constructor(public activeModal: NgbActiveModal) {}
}

@Injectable()
export class FormModalAlunoComponent {
  pendentes$ = this.store
    .select('app')
    .pipe(map(({ formulariosPendentes }: any) => formulariosPendentes));
  pendentes!: IFormulariosPendentes[];
  activatedSubscription!: Subscription;
  done = new Subject();
  formTranslate!: any[];

  constructor(private modalService: NgbModal, private store: Store<any>) {}

  translateTipoPergunta(tipoPergunta: string) {
    if (tipoPergunta === 'ESCALA') {
      return 'range';
    } else if (tipoPergunta === 'BINARIO') {
      return 'text';
    } else {
      return 'text';
    }
  }

  createControlledForm(formulariosPendentes: IFormulariosPendentes[]) {
    this.formTranslate = formulariosPendentes.map(({ formulario }: any) => {
      return formulario.perguntas.map((p: any) => {
        return {
          id: p.numero,
          label: p.enunciado,
          value: '',
          type: this.translateTipoPergunta(p.tipoPergunta),
          validators: {
            required: p.obrigatoria,
          },
        };
      });
    });

    return this.formTranslate;
  }

  loadModal(formulariosPendentes: IFormulariosPendentes[]) {
    if (formulariosPendentes && formulariosPendentes.length > 0) {
      const modalRef = this.modalService.open(NgbdModalAlunoContentComponent);
      modalRef.componentInstance.formulariosPendentes = formulariosPendentes[0]; //passa apenas um dos formulários pendentes
    }
  }

  open() {
    this.activatedSubscription = this.pendentes$
      .pipe(takeUntil(this.done))
      .subscribe((data) => {
        this.loadModal(data);
      });
  }
}
