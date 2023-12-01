import { getRandomValue } from '../utils';

describe('getRandomValue', () => {
    it('should return a random value in range 0 to 255 inclusive', () => {
        for (let i = 0; i < 100_000; i++) {
            expect(getRandomValue()).toBeLessThan(256);
        }
    });
});
