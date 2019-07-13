import { Component } from '@angular/core';

@Component({
    selector: 'hello-a',
    template: `<h1>Hello {{name}}</h1>`
})
export class HelloAComponent {
    name = 'a'
}
