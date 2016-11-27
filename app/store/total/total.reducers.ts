import { PayloadAction } from '../root-store';

const INITIAL_STATE: number = 0;

export function total(state: number = INITIAL_STATE, action: PayloadAction): number {
    switch (action.type) {
        case 'APPLY_OPERATOR':
            let value = parseFloat(action.payload.current);
            switch(action.payload.operator) {
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

        default:
            return state;
    }
}
