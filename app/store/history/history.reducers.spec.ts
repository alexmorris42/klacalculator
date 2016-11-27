import { async, TestBed } from '@angular/core/testing';

import { history } from './history.reducers';
import { CurrentActions } from '../current/current.actions';

////////  SPECS  /////////////
describe('HistoryReducer', function () {

    it('should store the operator that is applied and the result', () => {
        let result = history(['123', '+', '345'], { type: 'APPLY_OPERATOR', payload: {
            current: '3',
            operator: '-'
        } });
        expect(result).toEqual(['123', '+', '345', '-', '3']);
    });

    it('should ignore the first operator', () => {
        let result = history([], { type: 'APPLY_OPERATOR', payload: {
            current: '3',
            operator: '+'
        } });
        expect(result).toEqual(['3']);
    });

    it('should reset itself when the previous operator is blank', () => {
        let result = history(['123', '+', '345'], { type: 'APPLY_OPERATOR', payload: {
            current: '3',
            operator: ''
        } });
        expect(result).toEqual(['3']);
    });

    it('should clear when clear all is requested', () => {
        let result = history(['123', '+', '345'], { type: CurrentActions.CLEAR_ALL, payload: null });
        expect(result).toEqual([]);
    });
});
