import { PayloadAction } from '../root-store';
import { CurrentActions } from '../current/current.actions';

const INITIAL_STATE: number = 0;

export function total(state: number = INITIAL_STATE, action: PayloadAction): number {
    switch (action.type) {
        case 'APPLY_OPERATOR':
            let value = parseFloat(action.payload.current);
            switch(action.payload.operator) {
                case '':
                    return value;
                case '+':
                    return state + value;
                case '-':
                    return state - value;
                case '*':
                    return state * value;
                case '/':
                    return state / value;
            }
            return state;

        case CurrentActions.CLEAR_ALL:
            return INITIAL_STATE;
            
        default:
            return state;
    }
}
