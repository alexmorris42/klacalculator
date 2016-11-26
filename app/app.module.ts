import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgReduxModule, NgRedux, DevToolsExtension } from 'ng2-redux';

import { AppState, INITIAL_STATE, rootReducer } from './store/root-store';

import { CurrentActions } from './store/current/current.actions';

import { AppComponent }  from './app.component';
import { CalculatorButtonsComponent } from './components/calculator-buttons.component';
import { SingleButtonComponent } from './components/single-button.component';

@NgModule({
  imports:      [
    BrowserModule,
    NgReduxModule
  ],
  declarations: [
    AppComponent,

    CalculatorButtonsComponent,
    SingleButtonComponent
  ],
  providers:    [
    CurrentActions
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
  constructor(
    ngRedux: NgRedux<AppState>,
    devTools: DevToolsExtension) {

    let enhancers: any[] = [];

    if (devTools.isEnabled()) {
        enhancers = [ ...enhancers, devTools.enhancer() ];
    }

    ngRedux.configureStore(rootReducer, INITIAL_STATE, [], enhancers);
  }
}
