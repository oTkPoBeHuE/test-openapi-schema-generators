import { execSync } from 'child_process';

const BASE = 'src/api/hey-api_openapi-ts'
const configs = [
    '/base/openapi-ts.config.ts',
    '/react-query/openapi-ts.config.ts',
    '/best/openapi-ts.config.ts',
    '/best/adyen.openapi-ts.config.ts',
    '/best/akeneo.openapi-ts.config.ts',
    '/best/openapi-ts.config.ts',
];

try {
    configs.forEach(config => {
        console.log(`Running openapi-ts with config: ${BASE}${config}`);
        execSync(`openapi-ts -f ${BASE}${config}`, { stdio: 'inherit' });
    });
    console.log('All configurations processed successfully!');
} catch (error) {
    console.error('Error running openapi-ts:', error.message);
    process.exit(1);
}