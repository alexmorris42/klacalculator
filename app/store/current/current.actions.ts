import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { AppState } from '../root-store';

@Injectable()
export class CurrentActions {
    static CURRENT_APPLY_NUMERIC_CHARACTER = 'CURRENT_APPLY_NUMERIC_CHARACTER';
    static CURRENT_REMOVE_CHARACTER = 'CURRENT_REMOVE_CHARACTER';
    static CURRENT_CLEAR = 'CURRENT_CLEAR';
    static CLEAR_ALL = 'CLEAR_ALL';

    constructor(private ngRedux: NgRedux<AppState>) { }

    public applyNumericCharacter(character: string) {
        this.ngRedux.dispatch({ type: CurrentActions.CURRENT_APPLY_NUMERIC_CHARACTER, payload: character });
    }

    public removeCharacter() {
        this.ngRedux.dispatch({ type: CurrentActions.CURRENT_REMOVE_CHARACTER, payload: null });
    }

    public clearCurrentOnly() {
        this.ngRedux.dispatch({ type: CurrentActions.CURRENT_REMOVE_CHARACTER, payload: null });
    }

    public clearAll() {
        // Doesn't fully make sense in CurrentActions, but there's not really a great home for this action
        this.ngRedux.dispatch({ type: CurrentActions.CLEAR_ALL, payload: null });
    }
}
