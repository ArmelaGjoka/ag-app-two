import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgLibModule } from 'ag-lib';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
