import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
    client: '@hey-api/client-fetch',
    input: 'src/api/schemas/adyen/adyen.yaml',
    output: {
        format: 'prettier',
        lint: 'eslint',
        path: 'src/api/hey-api_openapi-ts/best/__generated__/adyen',
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