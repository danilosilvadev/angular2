import { Component, OnInit } from '@angular/core';

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

  constructor() { }

 nome = 'Danilo';
 cursos = ['math', 'portuguese', 'english', 'java'];

  ngOnInit() {
  }

}