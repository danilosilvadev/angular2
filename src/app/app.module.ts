import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TextoComponent } from './texto/texto.component';
import { CursosComponent } from './cursos/cursos.component';

import { CursosService } from './cursos/cursos.service';

import { dataBindingComponent } from './data-binding/data-binding.component';


@NgModule({
  declarations: [
    AppComponent,
    TextoComponent,
    CursosComponent,
    dataBindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
