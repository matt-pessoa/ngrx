import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { MainComponent } from './main/main.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [AppComponent, MainComponent],
  imports: [BrowserModule, StoreModule.forRoot({}, {}), CoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
