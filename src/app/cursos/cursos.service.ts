import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

    getCursos(){
        return ['math', 'portuguese', 'english', 'java', 'angular 2'];
    }

}