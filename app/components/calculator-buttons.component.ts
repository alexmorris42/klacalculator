import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'calculator-buttons',
  templateUrl: 'app/components/calculator-buttons.component.html'
})
export class CalculatorButtonsComponent  {
    @Output() action = new EventEmitter<string>();

    public applyAction(value: string) {
        this.action.emit(value);
    }
}
