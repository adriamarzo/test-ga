import { concatenateStrings } from "..";

describe('concatenateStrings', () => {
    it('should return hola mundo', () => {
        expect(concatenateStrings('hola', 'mundo')).toBe('hola mundo');
    })
})