import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { DataService } from '../core/data.service';
import { IAppState, IFormulariosPendentes } from '../store/app.state';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  formularios: IFormulariosPendentes[] = [];
  constructor(
    private dataService: DataService,
    private store: Store<{ app: IAppState }>
  ) {}

  pendentes$ = this.store
    .select('app')
    .pipe(
      map(({ formulariosPendentes }: any) => formulariosPendentes[0].status)
    );

  ngOnInit(): void {
    // this.dataService
    //   .getFormulariosPendentes() //returns an Observable (async operation)
    //   .subscribe((data: IFormulariosPendentes[]) => {
    //     this.formularios = data;
    //     console.log(this.formularios);
    //   }); //subscribe to the Observable
  }
}
