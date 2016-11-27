import { Component, HostListener } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NgRedux, select } from 'ng2-redux';

import { AppState } from './store/root-store';
import { CurrentActions } from './store/current/current.actions';
import { PendingOperatorActions } from './store/pending-operator/pending-operator.actions';

@Component({
    selector: 'kla-app',
    template: `
    <h1>KL&amp;A Calculator</h1>
    <div id="main-ui" class="container">
        <current-value [value]="current$ | async" [total]="total$ | async"></current-value>
        <calculator-buttons (action)="applyAction($event)"></calculator-buttons>
    </div>
  `,
})
export class AppComponent {
    @select() current$: Observable<string>;
    @select() total$: Observable<number>;

    constructor(
        private ngRedux: NgRedux<AppState>,
        private currentActions: CurrentActions,
        private pendingOperatorActions: PendingOperatorActions
    ) {}

    @HostListener('document:keypress', ['$event'])
    public handleKeyPress(event: KeyboardEvent) {
        let key = event.key;
        if(key === 'x') {
            key = '*';
        }
        this.applyAction(key);
    }

    public applyAction(action: string) {
        if(action >= '0' && action <= '9') {
            this.currentActions.applyNumericCharacter(action);
        } else if(['+', '-', '*', '/'].indexOf(action) >= 0) {
            this.pendingOperatorActions.begin(action);
        } else if(action === '=') {
            this.pendingOperatorActions.finish();
        } else {
            console.log('Unknown action: ' + action);
        }
    }
}
