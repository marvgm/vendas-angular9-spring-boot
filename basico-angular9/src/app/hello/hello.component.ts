import { Component } from '@angular/core'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
    selector: 'hello',
    templateUrl: './hello.component.html'
})
export class HelloComponent {

    nome: string;

    constructor(){
        this.nome = 'MARCOS';
    }

}