import {classes} from '../classes';

describe('classes', () => {
    it('accept 1 className', () => {
        const result = classes('a');
        expect(result).toEqual('a');
    });
    it('accept 2 classNames', () => {
        const result = classes('a', 'b');
        expect(result).toEqual('a b');
    });
    it('accept undefined', () => {
        const result = classes('a', undefined);
        expect(result).toEqual('a');
    });
});
