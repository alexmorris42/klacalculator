import { Component, Output, EventEmitter } from '@angular/core';
import { CurrentActions } from '../store/current/current.actions';

@Component({
  selector: 'calculator-buttons',
  templateUrl: 'app/components/calculator-buttons.component.html'
})
export class CalculatorButtonsComponent  {
    @Output() action = new EventEmitter<string>();

    constructor(
        public currentActions: CurrentActions
    ) {}

    public applyAction(value: string) {
        this.action.emit(value);
    }
}
