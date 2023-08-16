# Common
```
    Common - это npm пакет с общими компонентами для микросервисной архитектуры.
    Для сборки и публикации выполняем команду npm run go:publish, перед этим необходимо закомитить все изменения.
    Публикация проиходит на внутреннем npm сервере - Verdacia, настройки доступа к которой необходимо прописать в файле .npmrc, так же этот файл должен находидиться во всех сервисах использующих данный пакет
```
## Скрипты

- `npm run start` - Запуск storybook
- `npm run go:publish` - Сборка в прод режиме, обновление версии и `публикация`
- `npm run build-storybook` - Сборка в storybook
- `npm run build` - Сборка в prod режиме
- `npm run lint:ts` - Проверка ts файлов линтером
- `npm run lint:ts:fix` - Исправление ts файлов линтером
- `npm run lint:scss` - Проверка scss файлов style линтером
- `npm run lint:scss:fix` - Исправление scss файлов style линтером
- `npm run test` - Хапуск unit тестов с jest
## UI компоненты

- [CustomButton](/src/ui/CustomButton/)
- [Icon](/src/ui/Icon/)
- [Loader](/src/ui/Loader/)
- [PageLoader](/src/ui/PageLoader/)
- [Stack](/src/ui/Stack/)
## Global types

- [Types](/src/types/)
## Global styles

- [Global scss](/src/styles/scss/)
- [Global theme](/src/styles/themes/)
## Переводы

- [Английский](/src/config/i18/locales/en.ts)
- [Русский](/src/config/i18/locales/ru.ts)
- [Китайский](/src/config/i18/locales/zh.ts)
## Маршрутизация

- [Global router](/src/const/globalRouter.ts)
## Библиотеки / Утилиты

- [ClassNames](/src/lib/classNames/) для формирования строк в className
- [Utils](/src/lib/utils/)
## Хуки

- [Конвертация](/src/lib/hooks/convert/convertBase64.ts) base64
- [Конвертация](/src/lib/hooks/removeLicenseKey/removeLicenseKey.ts) удаление водного знака лицензированного пакета
- [Добавление Query Params](/src/lib/hooks/url/addQueryParams/addQueryParams.test.ts)
- [Копирование](/src/lib/hooks/useCopy/useCopy.ts)
- [useDebounce](/src/lib/hooks/useDebounce/)
- [useHover](/src/lib/hooks/useHover/)
- [useMatchMedia](/src/lib/hooks/useMatchMedia/)