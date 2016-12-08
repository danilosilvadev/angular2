import { Component, OnInit } from '@angular/core';

import {CursosService} from './cursos.service';

@Component({
    selector: 'cursos-lista',
    template: `
    
    <h3> Olá {{ nome }} </h3>
    <ul>
    <li *ngFor="let curso of cursos"> {{ curso }} </li>
    </ul>

    `
})
export class CursosComponent implements OnInit {


 nome = 'Danilo';
 cursos;

 constructor(cursosService : CursosService){
   this.cursos = cursosService.getCursos();
 }

  ngOnInit() {
  }

}