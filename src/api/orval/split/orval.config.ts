import { defineConfig } from 'orval';

export default defineConfig({
    petstore_reactQuery: {
        input: '../../schemas/petstore/petstore.yaml',
        output: {
            target: './__generated__/petstore/endpoints',
            schemas: './__generated__/petstore/model',
            headers: true,
            // prettier: true,
            mode: 'tags-split',
            client: 'react-query',
            mock: {
                type: 'msw',
                useExamples: true
            },
            indexFiles: false,
            httpClient: 'fetch',
            baseUrl: "https://petstore3.swagger.io/api/v3"
        },
    },
    petstore_zod: {
        input: '../../schemas/petstore/petstore.yaml',
        output: {
            target: './__generated__/petstore/endpoints',
            headers: true,
            // prettier: true,
            mode: 'tags-split',
            client: 'zod',
            fileExtension: '.zod.ts',
            httpClient: 'fetch',
            baseUrl: "https://petstore3.swagger.io/api/v3"
        },
    },
    akeneo_reactQuery: {
        input: '../../schemas/akeneo/akeneo.yaml',
        output: {
            target: './__generated__/akeneo/endpoints',
            schemas: './__generated__/akeneo/model',
            headers: true,
            // prettier: true,
            mode: 'tags-split',
            client: 'react-query',
            mock: {
                type: 'msw',
                useExamples: true
            },
            indexFiles: false,
            httpClient: 'fetch'
        },
    },
    akeneo_zod: {
        input: '../../schemas/akeneo/akeneo.yaml',
        output: {
            target: './__generated__/akeneo/endpoints',
            headers: true,
            // prettier: true,
            mode: 'tags-split',
            client: 'zod',
            fileExtension: '.zod.ts',
        },
    },
    adyen_reactQuery: {
        input: '../../schemas/adyen/adyen.yaml',
        output: {
            target: './__generated__/adyen/endpoints',
            schemas: './__generated__/adyen/model',
            headers: true,
            // prettier: true,
            mode: 'tags-split',
            client: 'react-query',
            mock: {
                type: 'msw',
                useExamples: true
            },
            indexFiles: false,
        },
    },
    adyen_zod: {
        input: '../../schemas/adyen/adyen.yaml',
        output: {
            target: './__generated__/adyen/endpoints',
            headers: true,
            // prettier: true,
            mode: 'tags-split',
            client: 'zod',
            fileExtension: '.zod.ts',
        },
    },
})