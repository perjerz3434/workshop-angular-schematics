import { Component } from '@angular/core';

@Component({
    selector: 'hello-jame',
    template: `<h1>Hello {{name}}</h1>`
})
export class HelloJameComponent {
    name = 'jame!'
}
