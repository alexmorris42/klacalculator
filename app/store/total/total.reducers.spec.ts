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
});
