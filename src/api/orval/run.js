import { execSync } from 'child_process';

const BASE = 'src/api/orval'
const configs = [
    '/axios/orval.config.ts',
    '/fetch/orval.config.ts',
    '/mock/orval.config.ts',
    '/multiple-config/orval.config.ts',
    '/react-query/orval.config.ts',
    '/split/orval.config.ts',
    '/zod/orval.config.ts',
];

try {
    configs.forEach(config => {
        console.log(`Running orval with config: ${BASE}${config}`);
        execSync(`orval --config ${BASE}${config}`, { stdio: 'inherit' });
    });
    console.log('All configurations processed successfully!');
} catch (error) {
    console.error('Error running orval:', error.message);
    process.exit(1);
}