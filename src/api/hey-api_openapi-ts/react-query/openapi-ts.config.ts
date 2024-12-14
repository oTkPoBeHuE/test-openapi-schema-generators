import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
    client: '@hey-api/client-fetch',
    input: 'src/api/schemas/petstore/petstore.yaml',
    output: {
        format: 'prettier',
        lint: 'eslint',
        path: 'src/api/hey-api_openapi-ts/react-query/__generated__/petstore',
    },
    plugins: [
        '@hey-api/schemas',
        '@hey-api/sdk',
        {
            dates: true,
            name: '@hey-api/transformers',
        },
        {
            enums: 'javascript',
            name: '@hey-api/typescript',
        },
        '@tanstack/react-query',
    ],
});