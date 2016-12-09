import { Component, OnInit } from '@angular/core';

import { InputPropertyComponent } from './input-property.component';

import { OutputPropertyComponent } from './output-property.component';


@Component({
    selector: 'data-binding',
    templateUrl: 'data-binding.component.html',
    styleUrls: ['data-binding.component.css']
})
export class dataBindingComponent implements OnInit {
    constructor() { }

    url ='https://smocci.com';
    urlImg = 'http://lorempixel.com/400/200/nature';

    valorInicial : number = 11;

    getValor(){
        return 1;
    }

    onClick(){
        alert('Botão Clicado');
    }
    
    onValorMudou(event){
        console.log(event);
        alert(event.novoValor);
    }

    ngOnInit() { }
}