import { async, TestBed } from '@angular/core/testing';

import { total } from './total.reducers';

////////  SPECS  /////////////
describe('PendingOperatorReducer', function () {

    it('should perform addition correctly', () => {
        let result = total(6, { type: 'APPLY_OPERATOR', payload: {
            current: '3',
            operator: '+'
        } });
        expect(result).toBe(9);
    });

    it('should perform subtraction correctly', () => {
        let result = total(6, { type: 'APPLY_OPERATOR', payload: {
            current: '3',
            operator: '-'
        } });
        expect(result).toBe(3);
    });

    it('should perform multiplication correctly', () => {
        let result = total(6, { type: 'APPLY_OPERATOR', payload: {
            current: '3',
            operator: '*'
        } });
        expect(result).toBe(18);
    });

    it('should perform division correctly', () => {
        let result = total(6, { type: 'APPLY_OPERATOR', payload: {
            current: '3',
            operator: '/'
        } });
        expect(result).toBe(2);
    });

    it('should perform no-operation correctly', () => { // This is the state the we are in after clicking '=' if no other operator is chosen before more values are typed
        let result = total(6, { type: 'APPLY_OPERATOR', payload: {
            current: '5',
            operator: ''
        } });
        expect(result).toBe(5);
    });
});
