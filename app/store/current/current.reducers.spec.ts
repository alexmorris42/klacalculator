import { async, TestBed } from '@angular/core/testing';

import { current } from './current.reducers';
import { CurrentActions } from './current.actions';

////////  SPECS  /////////////
describe('CurrentReducer', function () {

    it('should create new string when state is default', () => {
        let result = current(undefined, { type: CurrentActions.CURRENT_APPLY_NUMERIC_CHARACTER, payload: '7' });
        expect(result).toBe('7');
    });

    it('should concatenate new numbers at the end of the string', () => {
        let result = current('2310', { type: CurrentActions.CURRENT_APPLY_NUMERIC_CHARACTER, payload: '7' });
        expect(result).toBe('23107');
    });

    it('should ignore leading zero', () => {
        let result = current(undefined, { type: CurrentActions.CURRENT_APPLY_NUMERIC_CHARACTER, payload: '0' });
        expect(result).toBe('');
    });
});
