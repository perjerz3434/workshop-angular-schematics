import { Component } from '@angular/core';

@Component({
    selector: 'hello-ng-my',
    template: `<h1>Ola {{name}}</h1>`
})
export class HelloNgMyComponent {
    name = 'ng My'
}
