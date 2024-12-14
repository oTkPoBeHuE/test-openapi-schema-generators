# Overview and Testing of TypeScript API Generators Based on OpenAPI

This example explores libraries for generating APIs from `OpenAPI` schemas, as well as generating hooks for `TanStack Query`.

## Conclusion

As of December 14, 2024, the `Orval` library appears to be more robust and well-developed.

#### Reviewed Libraries:
1. [orval](https://orval.dev/) - A popular library for API generation, released in 2019.
2. [@hey-api/openapi-ts](https://heyapi.dev/openapi-ts/tanstack-query.html) - Released in 2024, this library is a fork of an older [project](https://github.com/ferdikoomen/openapi-typescript-codegen). An online [example](https://stackblitz.com/edit/hey-api-example?file=openapi-ts.config.ts,src%2Fclient%2Fschemas.gen.ts,src%2Fclient%2Fsdk.gen.ts,src%2FApp.tsx) is available.


#### Basic Generation Tools:
1. [openapi-ts/openapi-typescript](https://openapi-ts.dev/) - Quick setup was challenging.

#### Libraries Not Covered in This Example:
1. [openapi-codegen](https://github.com/fabien0102/openapi-codegen) — The author of this library also developed a [tool for generating Zod schemas](https://github.com/fabien0102/ts-to-zod))
2. [openapi-generator](https://github.com/OpenAPITools/openapi-generator?tab=readme-ov-file) и [openapi-generator-cli](https://github.com/openapitools/openapi-generator-cli) — Low-level tools. It’s unclear if they natively support`TanStack Query` из коробки. из коробки. **Requires `Java` installation**.

#### Commands
- `download-schema` — an example command to download a remote file into the project folder s`rc/api/schema/downloads`.
- `clean` — deletes all generated files in the `__generated__` folders.
- `openapi-ts:generate` — runs code generation using OpenAPI TS and saves the result in `src/api/hey-api_openapi-ts/*/__generated__`.
- `orval:generate` — runs code generation using Orval and saves the result in `src/api/hey-api_openapi-ts/*/__generated__`.
- 
## Where to Download Schemas
You can find and download `OpenAPI` schemas on the website [apis.guru](https://apis.guru/).

## Results Table

| Left-aligned               |    orval    | @hey-api/openapi-ts  |
|:---------------------------|:-----------:|:--------------------:|
| ⭐ GitHub Stars             |    3.3k     |         1.5к         |
| 📦 npm Weekly Downloads    |    168k     |         170к         |
| License                    | FSL-1.1-MIT |     FSL-1.1-MIT      |
| TanStack query support     |      ✅      |          ✅           |
| First Release Year         |    2019     |         2024         |
| npm Release Frequency      |   Monthly   | Several times a week |
| Zod Support                |      ✅      |          ✅           |
| Model Splitting into Files |      ✅      |          ❌           |
| Performance                |    fast     |         fast         |
| Documentation              |    Good     |       Average        |

----

# Обзор и тестирование генераторов API на typescript на основе openAPI 

В данном примере рассматриваются библиотеки для генерации API на основе схем OpenAPI, а также для генерации хуков для `TanStack query`.

## Вывод

На 14 декабря 2024 года библиотека `Orval` выглядит более проработанной.

#### Разобранные библиотеки:
1. [orval](https://orval.dev/) - Популярная библиотека для генерации, вышла в 2019 году.
2. [@hey-api/openapi-ts](https://heyapi.dev/openapi-ts/tanstack-query.html) - Вышла в 2024 году, является форком более старой [библиотеки](https://github.com/ferdikoomen/openapi-typescript-codegen). Доступен онлайн [пример](https://stackblitz.com/edit/hey-api-example?file=openapi-ts.config.ts,src%2Fclient%2Fschemas.gen.ts,src%2Fclient%2Fsdk.gen.ts,src%2FApp.tsx)


#### Так же есть базовая генерация:
1. [openapi-ts/openapi-typescript](https://openapi-ts.dev/) - Быстро настроить не получилось. Генерирует самый минимум

#### Библиотеки, не рассмотренные в данном примере:
1. [openapi-codegen](https://github.com/fabien0102/openapi-codegen) — Автор этой библиотеки также создал [инструмент для генерации zod генерирует](https://github.com/fabien0102/ts-to-zod))
2. [openapi-generator](https://github.com/OpenAPITools/openapi-generator?tab=readme-ov-file) и [openapi-generator-cli](https://github.com/openapitools/openapi-generator-cli) — Это низкоуровневые инструменты. Неясно, поддерживают ли они `TanStack Query` из коробки. из коробки. **Для работы требуется установленная `Java`**.

#### Commands
- `download-schema` - Пример, как загрузить удалённый файл в проект:  `src/api/schema/downloads`
- `clean` - Удаляет все сгенерированные файлы в папках `__generated__`
- `openapi-ts:generate` - Генерация с помощью `openapi-ts` в папки `src/api/hey-api_openapi-ts/*/__generated__`
- `orval:generate`- Запуск генерации`orval` в папки `src/api/hey-api_openapi-ts/*/__generated__`


#### Где скачать схемы

На сайте [apis.guru](https://apis.guru/) можно найти и скачать схемы `OpenAPI`.

## Таблица результатов

| Left-aligned               |    orval    | @hey-api/openapi-ts  |
|:---------------------------|:-----------:|:--------------------:|
| ⭐ GitHub Stars             |    3.3k     |         1.5к         |
| 📦 npm Weekly Downloads    |    168k     |         170к         |
| License                    | FSL-1.1-MIT |     FSL-1.1-MIT      |
| TanStack query support     |      ✅      |          ✅           |
| First Release Year         |    2019     |         2024         |
| npm Release Frequency      |   Monthly   | Several times a week |
| Zod Support                |      ✅      |          ✅           |
| Model Splitting into Files |      ✅      |          ❌           |
| Performance                |    fast     |         fast         |
| Documentation              |    Good     |       Average        |
