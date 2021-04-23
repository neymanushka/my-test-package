import resolve from '@rollup/plugin-node-resolve'; 
import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/index.js',
	sourcemap: true,
    format: 'umd',
	name: 'super-test'
  },
  plugins: [
	typescript({lib: ["es5", "es6", "dom"], target: "es2020",declaration: true }),
	commonjs({extensions: ['.js','ts']}),
	resolve({ browser: true })
  ]
};
