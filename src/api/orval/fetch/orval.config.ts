import { defineConfig } from 'orval';

export default defineConfig({
    base: {
        input: {
            target: '../../schemas/petstore/petstore.yaml',

        },
        output: {
            target: './__generated__/petstore/schema.ts',
            headers: true,
            // prettier: true,
            client: 'fetch',
            mode: 'split',
        },
    },
})