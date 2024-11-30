import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import sveltePreprocess from 'svelte-preprocess';

export default {
  input: 'src/svelte/index.ts',
  output: [
    {
      file: 'svelte/index.js',
      format: 'cjs',
      sourcemap: true
    },
    {
      file: 'svelte/index.mjs',
      format: 'es',
      sourcemap: true
    }
  ],
  external: ['svelte'],
  plugins: [
    svelte({
      preprocess: sveltePreprocess(),
      compilerOptions: {
        dev: process.env.NODE_ENV !== 'production'
      },
      emitCss: false
    }),
    resolve({
      browser: true,
      dedupe: ['svelte']
    }),
    commonjs(),
    typescript({
      sourceMap: true,
      include: ['src/svelte/**/*.ts', 'src/svelte/**/*.svelte', 'src/types/**/*.ts', 'src/utils/**/*.ts'],
      tsconfig: './tsconfig.json',
      outputToFilesystem: true,
      declarationDir: './svelte'
    })
  ]
};
