import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'data-binding',
    templateUrl: 'data-binding.component.html',
    styleUrls: ['data-binding.component.css']
})
export class dataBindingComponent implements OnInit {
    constructor() { }

    url ='https://smocci.com';
    urlImg = 'http://lorempixel.com/400/200/nature';

    getValor(){
        return 1;
    }

    onClick(){
        alert('Botão Clicado');
    }
    

    ngOnInit() { }
}