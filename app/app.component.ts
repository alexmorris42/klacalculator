import { Component } from '@angular/core';

@Component({
  selector: 'kla-app',
  template: `
    <h1>KL&amp;A Calculator</h1>
    <calculator-buttons (action)="applyAction($event)"></calculator-buttons>
  `,
})
export class AppComponent  {

  public applyAction(value: string) {
    console.log(value);
  }
}
