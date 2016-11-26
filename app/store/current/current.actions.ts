import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { AppState } from '../root-store';

@Injectable()
export class CurrentActions {
    static CURRENT_APPLY_NUMERIC_CHARACTER = 'CURRENT_APPLY_NUMERIC_CHARACTER';

    constructor(private ngRedux: NgRedux<AppState>) { }

    public applyNumericCharacter(character: string) {
        this.ngRedux.dispatch({ type: CurrentActions.CURRENT_APPLY_NUMERIC_CHARACTER, payload: character });
    }
}
