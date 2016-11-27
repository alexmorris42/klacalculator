import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'history',
  template: `
    <div class="row">
        <div class="col-sm-12"><span *ngFor="let item of values"> {{item}}</span> {{operator}}</div>
    </div>
    `
})
export class HistoryComponent  {
    @Input() values: string[];
    @Input() pendingOperator: string;

    public get operator(): string {
        return this.values && this.values.length > 0
            ? this.pendingOperator
            : '';
    }
}
