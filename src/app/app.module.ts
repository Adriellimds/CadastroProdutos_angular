import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BebidasComponent } from './bebidas/bebidas.component';
import { BebidasEditComponent } from './bebidas-edit/bebidas-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    BebidasComponent,
    BebidasComponent,
    BebidasEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
