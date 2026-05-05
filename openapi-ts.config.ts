// Purpose: OpenAPI code generation config for bSDD API SDK and TanStack Query factories
// Run: yarn generate-api
// Input: downloads the bSDD OpenAPI spec from SwaggerHub
// Output: shared/bsdd-api/generated/ (committed — no Node.js dependency at runtime)
import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
  input: 'https://api.swaggerhub.com/apis/buildingSMART/Dictionaries/v1/swagger.json',
  output: {
    path: 'shared/bsdd-api/generated',
    format: 'prettier',
  },
  plugins: [
    {
      // runtimeConfigPath is relative to the output directory (shared/bsdd-api/generated/)
      name: '@hey-api/client-fetch',
      runtimeConfigPath: '../openapi-runtime',
    },
    '@hey-api/typescript',
    '@hey-api/sdk',
    '@tanstack/react-query',
  ],
});
