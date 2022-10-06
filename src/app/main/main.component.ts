import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DataService } from '../core/data.service';
import { FormModalAlunoComponent } from '../form-modal/form-modal.component';
import { IAppState, IFormulariosPendentes, setForm } from '../store/app.state';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  formularios: IFormulariosPendentes[] = [];
  constructor(
    private dataService: DataService,
    private formModel: FormModalAlunoComponent,
    private store: Store<{ app: IAppState }>
  ) {}

  // pendentes$ = this.store
  //   .select('app')
  //   .pipe(
  //     map(({ formulariosPendentes }: any) => formulariosPendentes[0].status)
  //   );

  getFormulariosPendentes() {
    this.dataService
      .getFormulariosPendentes()
      .subscribe((data: IFormulariosPendentes[]) => {
        console.log(data);
        this.store.dispatch(setForm({ formulariosPendentes: data }));
        this.formModel.open();
      });
  }

  ngOnInit(): void {
    this.getFormulariosPendentes();
  }
}
