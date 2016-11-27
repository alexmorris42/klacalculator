import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { AppState } from '../root-store';

@Injectable()
export class PendingOperatorActions {
    static PENDING_BEGIN_OPERATOR = 'PENDING_BEGIN_OPERATOR';

    constructor(private ngRedux: NgRedux<AppState>) { }

    public begin(operator: string) {
        // Apply current operator if the current value exists
        let state: AppState = this.ngRedux.getState();
        if(state.current) {
            this.ngRedux.dispatch({ type: 'APPLY_OPERATOR', payload: {
                current: state.current,
                operator: state.pendingOperator
            } });
        }

        // Begin next operator
        this.ngRedux.dispatch({ type: PendingOperatorActions.PENDING_BEGIN_OPERATOR, payload: operator });
    }
}
