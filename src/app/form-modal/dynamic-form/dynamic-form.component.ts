import { Component, Input, OnInit } from '@angular/core';
import { IFormulariosPendentes } from 'src/app/store/app.state';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
})
export class DynamicFormComponent implements OnInit {
  @Input() formulariosPendentes!: IFormulariosPendentes[];

  constructor() {}

  ngOnInit(): void {
    console.log(this.formulariosPendentes);
  }
}
