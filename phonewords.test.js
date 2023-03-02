const phonewords = require('./phonewords');

describe('Phonewords', () => {
    it('should return an array of values', () => {
        const phoneNumber = '3662277';
        const words = [
            'foo',
            'bar',
            'baz',
            'foobar',
            'emo',
            'cap',
            'car',
            'cat'
        ];

        const result = phonewords(phoneNumber, words);

        expect(result).toContain('bar');
        expect(result).toContain('cap');
        expect(result).toContain('car');
        expect(result).toContain('emo');
        expect(result).toContain('foo');
        expect(result).toContain('foobar');
    });

    it('should return an array of values', () => {
        const phoneNumber = '8274451';
        const words = [
            'tap',
            'tar',
            'brig',
            'pig',
            'fig',
            'lap',
            'vape'
        ];

        const result = phonewords(phoneNumber, words);

        expect(result).toContain('tap');
        expect(result).toContain('tar');
        expect(result).toContain('brig');
        expect(result).toContain('pig');
    });
});