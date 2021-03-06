import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TextoComponent } from './texto/texto.component';
import { CursosComponent } from './cursos/cursos.component';

import { CursosService } from './cursos/cursos.service';

import { dataBindingComponent } from './data-binding/data-binding.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';

import { InputPropertyComponent } from './data-binding/input-property.component';

import { OutputPropertyComponent } from './data-binding/output-property.component';

import { LifeCycleComponent } from './ciclo/life-cycle.component';


@NgModule({
  declarations: [
    AppComponent,
    TextoComponent,
    CursosComponent,
    dataBindingComponent,
    TwoWayDataBindingComponent,
    InputPropertyComponent,
    OutputPropertyComponent,
    LifeCycleComponent
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
