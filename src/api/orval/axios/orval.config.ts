import { defineConfig } from 'orval';

export default defineConfig({
    petstore: {
        input: {
            target: '../../schemas/petstore/petstore.yaml',

        },
        output: {
            target: './__generated__/petstore/schema.ts',
            headers: true,
            // prettier: true,
            mode: 'single'
        },
    },
    akeneo: {
        input: {
            target: '../../schemas/akeneo/akeneo.yaml',

        },
        output: {
            target: './__generated__/akeneo/schema.ts',
            headers: true,
            // prettier: true,
            mode: 'single'
        },
    },
    adyen: {
        input: {
            target: '../../schemas/adyen/adyen.yaml',

        },
        output: {
            target: './__generated__/adyen/schema.ts',
            headers: true,
            // prettier: true,
            mode: 'single'
        },
    },
})