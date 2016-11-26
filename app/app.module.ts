import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { CalculatorButtonsComponent } from './components/calculator-buttons.component';
import { SingleButtonComponent } from './components/single-button.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [
    AppComponent,

    CalculatorButtonsComponent,
    SingleButtonComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
