import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NgRedux, select } from 'ng2-redux';

import { AppState } from './store/root-store';
import { CurrentActions } from './store/current/current.actions';

@Component({
    selector: 'kla-app',
    template: `
    <h1>KL&amp;A Calculator</h1>
    <div id="main-ui" class="container">
        <current-value [value]="current$ | async"></current-value>
        <calculator-buttons (action)="applyAction($event)"></calculator-buttons>
    </div>
  `,
})
export class AppComponent {
    @select() current$: Observable<string>;

    constructor(
        private ngRedux: NgRedux<AppState>,
        private currentActions: CurrentActions
    ) {}

    public applyAction(value: string) {
        this.currentActions.applyNumericCharacter(value);
    }
}
