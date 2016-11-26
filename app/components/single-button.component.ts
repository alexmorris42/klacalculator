import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'single-button',
  template: `<div class="col-sm-4"><button class="btn btn-default" (click)="action.emit(text)">{{text}}</button></div>`
})
export class SingleButtonComponent  {
    @Input() text: string;
    @Output() action = new EventEmitter<string>();
}
