import { Component } from '@angular/core';

@Component({
    selector: 'hello-ola',
    template: `<h1>Ola {{name}}</h1>`
})
export class HelloOlaComponent {
    name = 'Ola'
}
