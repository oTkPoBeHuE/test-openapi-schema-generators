import { defineConfig } from 'orval';

export default defineConfig({
    reactQuery: {
        input: '../../schemas/petstore/petstore.yaml',
        output: {
            target: './__generated__/petstore/schema.ts',
            headers: true,
            // prettier: true,
            mode: 'split',
            client: 'react-query',
        },
    },
    zod: {
        input: '../../schemas/petstore/petstore.yaml',
        output: {
            target: './__generated__/petstore/schema.ts',
            headers: true,
            // prettier: true,
            mode: 'split',
            client: 'zod',
            fileExtension: '.zod.ts',
            mock: true,
        },
    },
})