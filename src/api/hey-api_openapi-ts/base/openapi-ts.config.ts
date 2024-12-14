import { defineConfig, defaultPlugins } from '@hey-api/openapi-ts';

export default defineConfig({
    client: '@hey-api/client-fetch',
    input: 'src/api/schemas/petstore/petstore.json',
    output: 'src/api/hey-api_openapi-ts/base/__generated__/petstore',
    plugins: [
        ...defaultPlugins,
    ],
});