import { Component, Injectable, Input, OnDestroy } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { map, Subject, Subscription, takeUntil } from 'rxjs';
import { IFormulariosPendentes } from '../store/app.state';

@Component({
  selector: 'jhi-form-modal',
  templateUrl: './form-modal.component.html',
})
export class NgbdModalAlunoContentComponent {
  @Input() title!: string;

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

  constructor(private modalService: NgbModal, private store: Store<any>) {}

  // createControlledForm(formularios: IFormulariosPendentes[]) {

  // }

  loadModal(formulariosPendentes: any) {
    if (formulariosPendentes && formulariosPendentes.length > 0) {
      const modalRef = this.modalService.open(NgbdModalAlunoContentComponent);
      modalRef.componentInstance.title =
        formulariosPendentes[0].formulario.nome;
    }
  }

  open() {
    this.activatedSubscription = this.pendentes$
      .pipe(takeUntil(this.done))
      .subscribe((data) => {
        console.log(data);
        this.loadModal(data);
      });
  }
}
