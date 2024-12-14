#!/usr/bin/env node

import fs from 'fs/promises';

const URL = 'https://petstore3.swagger.io/api/v3/openapi.yaml';
const FOLDER = './src/api/schemas/downloads/';
// const FOLDER = '';
const FILE_NAME = 'openapi.yaml';

console.log('Шаг 1: Отправка запроса к', URL);

try {
    const response = await fetch(URL);
    if (!response.ok) {
        throw new Error(`Ошибка загрузки: статус ${response.status} (${response.statusText})`);
    }

    console.log('Шаг 2: Ответ успешно получен. Чтение данных...');
    const data = await response.text();

    console.log(`Шаг 3: Сохранение данных в файл "${FOLDER}${FILE_NAME}"...`);
    await fs.writeFile(FOLDER + FILE_NAME, data, 'utf8');

    console.log('Шаг 4: Данные успешно сохранены.');

    const fileStats = await fs.stat(FOLDER + FILE_NAME);

    console.log('--- Метаданные файла ---');
    console.log('Размер файла:', fileStats.size, 'байт');
    console.log('Дата последнего изменения:', fileStats.mtime);
    console.log('Дата создания:', fileStats.birthtime);
    console.log('------------------------');

} catch (err) {
    console.error('Произошла ошибка при загрузке или сохранении файла:');
    console.error(err.message);
    process.exit(1);
}