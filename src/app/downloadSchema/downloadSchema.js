import fs from 'fs/promises';

const URL = 'https://petstore3.swagger.io/api/v3/openapi.yaml';
const FOLDER = './src/api/schemas/downloads/';
// const FOLDER = '';
const FILE_NAME = 'openapi.yaml';

console.log('Step 1: Sending request to', URL);

try {
    const response = await fetch(URL);
    if (!response.ok) {
        throw new Error(`Error loading: status ${response.status} (${response.statusText})`);
    }

    console.log('Step 2: Response received successfully. Reading data...');
    const data = await response.text();

    console.log(`Step 3: Saving data to file "${FOLDER}${FILE_NAME}"...`);
    await fs.writeFile(FOLDER + FILE_NAME, data, 'utf8');

    console.log('Step 4: Data saved successfully.');

    const fileStats = await fs.stat(FOLDER + FILE_NAME);

    console.log('--- File Metadata ---');
    console.log('File size:', fileStats.size, 'bytes');
    console.log('Last modified date:', fileStats.mtime);
    console.log('Creation date:', fileStats.birthtime);
    console.log('---------------------');

} catch (err) {
    console.error('An error occurred while downloading or saving the file:');
    console.error(err.message);
    process.exit(1);
}