import '@testing-library/jest-dom/extend-expect';
import utils from '../components/Utils';

test('checking sum', () => {
    expect(utils.sum([1, 2])).toBe(3);
    expect(utils.sum([1, 5, 3])).toBe(9);
});

test('random number from array', () => {
    const rnNum = utils.random(1, 9);
    expect(rnNum).toBeGreaterThan(0)
    expect(rnNum).toBeLessThan(10);
});

test('random sum from available numbers in array', () => {
    const availableNumbers = [6, 7, 8];
    const max = 9;
    const randomSum = utils.randomSumIn(availableNumbers, max);
    const sumInArray = availableNumbers.some((num) => num === randomSum);
    expect(sumInArray).toBeTruthy();
});

test('numbers in given range', () => {
    expect(utils.range(3, 6)).toEqual([3, 4, 5, 6]);
});