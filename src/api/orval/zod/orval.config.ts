import { defineConfig } from 'orval';

export default defineConfig({
    base: {
        input: '../../schemas/petstore/petstore.yaml',
        output: {
            target: './__generated__/petstore/schema.ts',
            headers: true,
            // prettier: true,
            mode: 'split',
            client: 'zod',
        },
    },
})