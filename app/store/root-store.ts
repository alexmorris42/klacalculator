import { Action, combineReducers } from 'redux';

import { current } from './current/current.reducers';
import { history } from './history/history.reducers';
import { pendingOperator } from './pending-operator/pending-operator.reducers';
import { total } from './total/total.reducers';

export interface PayloadAction extends Action {
    payload: any;
}

export interface AppState {
    current: string;
    pendingOperator: string;

    history: string[];
    total: number;
}

export const INITIAL_STATE: AppState = {
    current: '',
    pendingOperator: '+',

    history: [],
    total: 0
};

export const rootReducer = combineReducers<AppState>({
    current,
    pendingOperator,

    history,
    total
});
