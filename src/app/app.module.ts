import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { MainComponent } from './main/main.component';
import { CoreModule } from './core/core.module';
import { appReducer } from './store/app.state';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {
  FormModalAlunoComponent,
  NgbdModalAlunoContentComponent,
} from './form-modal/form-modal.component';
import { DynamicFormComponent } from './form-modal/dynamic-form/dynamic-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NgbdModalAlunoContentComponent,
    DynamicFormComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ app: appReducer }),
    CoreModule,
    NgbModule,
  ],
  providers: [FormModalAlunoComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
