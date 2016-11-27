import { PayloadAction } from '../root-store';
import { CurrentActions } from '../current/current.actions';
import { PendingOperatorActions } from '../pending-operator/pending-operator.actions';

const INITIAL_STATE: string[] = [];

export function history(state: string[] = INITIAL_STATE, action: PayloadAction): string[] {
    switch (action.type) {
        case 'APPLY_OPERATOR':
            if(action.payload.operator && state.length > 0) {
                // Typical case: add the operator and the value to the existing state
                return [
                    ...state,
                    action.payload.operator,
                    action.payload.current
                ];
            }
            // Either there is no operator or this is the first item in the history, return just the current value
            return [action.payload.current];

        case CurrentActions.CLEAR_ALL:
            return INITIAL_STATE;
            
        default:
            return state;
    }
}
