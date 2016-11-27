import { PayloadAction } from '../root-store';
import { PendingOperatorActions } from './pending-operator.actions';

const INITIAL_STATE: string = '+';

export function pendingOperator(state: string = INITIAL_STATE, action: PayloadAction): string {
    switch (action.type) {
        case PendingOperatorActions.PENDING_BEGIN_OPERATOR:
            return action.payload;

        case 'APPLY_OPERATOR':
            return '';

        default:
            return state;
    }
}
