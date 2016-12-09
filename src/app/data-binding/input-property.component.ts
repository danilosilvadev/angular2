import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'curso',
    template: '{{ nomeCurso }}'
})
export class InputPropertyComponent implements OnInit {
   
    constructor() { }

    ngOnInit() { }
    @Input('nome') nomeCurso: string = '';

}