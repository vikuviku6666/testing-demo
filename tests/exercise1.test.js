const exercise1 = require('../exercise1');

describe('FizzBuzz', () => {
	it('should throw if input is not a number', () => {
		// const args = [null, undefined, 'a', {}];
		// args.forEach((a) => {
		// 	expect(() => {
		// 		exercise1.fizzBuzz(a);
		// 	}).toThrow();
		// });
		expect(() => {exercise1.fizzBuzz('a')}).toThrow();
		expect(() => {exercise1.fizzBuzz(null)}).toThrow();
		expect(() => {exercise1.fizzBuzz(undefined)}).toThrow();
		expect(() => {exercise1.fizzBuzz({})}).toThrow();
	});
	it('should return FizzBuzz if input is divisible by 3 and 5', () => {
		const result = exercise1.fizzBuzz(15);
		expect(result).toBe('FizzBuzz');
	});
	it('should return Fizz if input is divisible by 3', () => {
		const result = exercise1.fizzBuzz(9);
		expect(result).toBe('Fizz');
	});
	it('should return Buzz if input is divisible by 5', () => {
		const result = exercise1.fizzBuzz(10);
		expect(result).toBe('Buzz');
	});
	it('should return input if input is not divisible by (3 and 5) or 3 or 5', () => {
		const result = exercise1.fizzBuzz(7);
		expect(result).toBe(7);
	});
});
