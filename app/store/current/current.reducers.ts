import { PayloadAction } from '../root-store';
import { CurrentActions } from './current.actions';

const INITIAL_STATE: string = '';

export function current(state: string = INITIAL_STATE, action: PayloadAction): string {
    switch (action.type) {
        case CurrentActions.CURRENT_APPLY_NUMERIC_CHARACTER:
            let value: string = action.payload.toString();
            if(value === '0' && !state) {
                return state; // Do not add a leading zero
            }
            return state.toString() + value;

        default:
            return state;
    }
}
