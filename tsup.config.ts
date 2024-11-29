import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/react/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  clean: true,
  external: ['react'],
  outDir: 'react',
  loader: {
    '.css': 'copy'
  }
});
