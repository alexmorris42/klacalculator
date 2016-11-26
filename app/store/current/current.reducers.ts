import { PayloadAction } from '../root-store';
import { CurrentActions } from './current.actions';

const INITIAL_STATE: string = '';

export function current(state: string = INITIAL_STATE, action: PayloadAction): string {
    switch (action.type) {
        case CurrentActions.CURRENT_APPLY_NUMERIC_CHARACTER:
            return state;

        default:
            return state;
    }
}
