import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
    //moduleId: module.id,
    selector: 'contador',
    template: `
    
    <div>
    <button type="button" class="btn btn-primary" (click)="decrementa()">-</button>
    <input type="text" [value] = "valor" readonly>
    <button type="button" class="btn btn-primary" (click)="incrementa()">+</button>
    </div>

    `
})
export class OutputPropertyComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

    @Output() mudouValor = new EventEmitter();


    @Input() valor : number = 0;
    decrementa(){
        this.valor--;
        this.mudouValor.emit({novoValor : this.valor});
    }
    incrementa(){
        this.valor++;
        this.mudouValor.emit({novoValor : this.valor});
    }
}