import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IFormulariosPendentes } from '../store/app.state';

@Injectable()
export class DataService {
  baseUrl: string = 'assets/';

  constructor(private http: HttpClient) {}

  getFormulariosPendentes(): Observable<IFormulariosPendentes[]> {
    return this.http.get<IFormulariosPendentes[]>(
      this.baseUrl + 'formulariosPendentes.json'
    );
  }
}
