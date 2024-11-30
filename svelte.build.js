const { build } = require('@sveltejs/kit/src/core/build');
const { writeFileSync, mkdirSync } = require('fs');
const { resolve } = require('path');

async function buildSvelte() {
  try {
    // Ensure the svelte output directory exists
    mkdirSync(resolve(__dirname, 'svelte'), { recursive: true });

    // Build the Svelte component
    const result = await build({
      input: resolve(__dirname, 'src/svelte/TailwindScreenSize.svelte'),
      output: resolve(__dirname, 'svelte'),
      format: ['esm', 'cjs']
    });

    // Write the index.js file
    writeFileSync(
      resolve(__dirname, 'svelte/index.js'),
      `export { default as TailwindScreenSize } from './TailwindScreenSize.js';`
    );
  } catch (error) {
    console.error('Error building Svelte component:', error);
    process.exit(1);
  }
}

buildSvelte();
