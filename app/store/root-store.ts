import { Action, combineReducers } from 'redux';

import { current } from './current/current.reducers';

export interface PayloadAction extends Action {
    payload: any;
}

export interface AppState {
    current: string;

    total: number;
}

export const INITIAL_STATE: AppState = {
    current: '',

    total: 0
};

export const rootReducer = combineReducers<AppState>({
    current
});