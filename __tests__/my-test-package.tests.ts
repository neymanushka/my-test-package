import { test } from '../src/index'

const t = 42;

describe('test init', () => {
	it('first test', () => {
		expect(test()).toBe(45);
	});
});