module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	collectCoverage: true,
	coverageReporters: ['html', 'text'],
	globals: {
		'ts-jest': {
			tsconfig: {
			},
		},
	},
};
