import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/data.service';
import { IFormulariosPendentes } from '../store/app.state';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  formularios: IFormulariosPendentes[] = [];
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService
      .getFormulariosPendentes() //returns an Observable (async operation)
      .subscribe((data: IFormulariosPendentes[]) => (this.formularios = data)); //subscribe to the Observable
  }
}
