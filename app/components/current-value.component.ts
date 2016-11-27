import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'current-value',
  template: `
    <div class="row">
        <div class="col-sm-12">{{value || '0'}}</div>
    </div>
    `
})
export class CurrentValueComponent  {
    @Input() value: string;
}
