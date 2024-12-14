import { defineConfig } from 'orval';

export default defineConfig({
    base: {
        input: '../../schemas/petstore/petstore.yaml',
        output: {
            target: './__generated__/petstore/schema.ts',
            headers: true,
            // prettier: true,
            mode: 'split',
            mock: {
                type: 'msw',
                useExamples: true // Включает примеры example из схемы openAPI. Почему-то не работает
            },
        },
    },
})