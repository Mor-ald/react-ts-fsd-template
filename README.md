# Шаблон для React+Redux+Typescript+FSD

## Используемые технологии и библиотеки

- Создание пользовательского интерфейса: `React`
- Управление состоянием: `Redux, Redux Toolkit`
- Управление асинхронным состоянием: `RTK Query`
- Типизация: `TypeScript`
- Стилизация: `CSS`
- Тестирование: `Jest`, `React testing library`
- Линтинг и форматирование: `Eslint`, `Stylelint`, `Prettier`, `Steiger`
- Сборка: `Vite`
- Стандартизация коммитов: `Commitlint`, `Commitizen`
- Методолгогия структуры проекта: `FSD` ([_подробнее_]("https://feature-sliced.design/ru/"))

## Структура проекта

### Слои

Слои стандартизированы во всех проектах FSD. Вам не обязательно использовать все слои, но их названия важны. На данный момент их семь (сверху вниз):

- `App*` — всё, благодаря чему приложение запускается — роутинг, точки входа, глобальные стили, провайдеры и т. д.
- `Pages` (страницы) — полные страницы или большие части страницы при вложенном роутинге.
- `Widgets` (виджеты) — большие самодостаточные куски функциональности или интерфейса, обычно реализующие целый пользовательский сценарий.
- `Features` (фичи) — повторно используемые реализации целых фич продукта, то есть действий, приносящих бизнес-ценность пользователю.
- `Entities` (сущности) — бизнес-сущности, с которыми работает проект.
- `Shared*` — переиспользуемый код, особенно когда он отделён от специфики проекта/бизнеса, хотя это не обязательно.

* — эти слои, `App` и `Shared`, в отличие от других слоев, не имеют слайсов и состоят из сегментов напрямую.

_**Модули на одном слое могут знать только о модулях со слоев строго ниже, и как следствие, импортировать только с них.**_

### Слайсы

Слайсы делят слой по предметной области. Можно называть слайсы как угодно, и создавать их сколько угодно. Слайсы помогают не теряться в проекте, потому что группируют тесно связанный по смыслу код.

Слайсы не могут использовать другие слайсы на том же слое, и это обеспечивает сильную связанность кода внутри слайса и слабую сцепленность между слайсами.

### Сегменты

Слайсы, а также слои `App` и `Shared`, состоят из сегментов, а сегменты группируют код по его назначению. Имена сегментов не зафиксированы, но существует несколько общепринятых имен для наиболее распространенных целей:

- `ui` — всё, что связано с отображением: UI-компоненты, форматтеры дат, стили и т.д.
- `api` — взаимодействие с бэкендом: функции запросов, типы данных, мапперы.
- `model` — модель данных: схемы валидации, интерфейсы, хранилища и бизнес-логика.
- `lib` — библиотечный код, который нужен другим модулям этого слайса.
- `config` — файлы конфигурации и фиче-флаги.

## Стандарт коммитов

```
<type>(optional scope): <short description>

[optional body]

[optional footer]
```

1. **build:** Выпуск новой версии
2. **chore:** Изменение зависимостей проекта или конфигурационных файлов
3. **ci:** Настройка CI и работа с скриптами
4. **docs:** Обновление документации
5. **feat:** Добавление нового функционала
6. **fix**: Исправление ошибок
7. **perf:** Изменения, направленные на улучшение производительности
8. **refactor:** Правки кода без исправления ошибок или добавления новых функций
9. **revert:** Откат изменений
10. **style:** Правки по кодстайлу (табы, отступы, точки, запятые и т.д.)
11. **test:** Добавление недостающих тестов, рефакторинг тестов

## Команды

- Установка зависимостей

```
npm install
```

- Запуск проекта локально

```
npm run dev
```

- Сборка проекта

```
npm run build
```

- Проверка на обновление зависимостей

```
npm run check-updates
```

- Запуск Eslint

```
npm run lint
```

- Запуск Prettier

```
npm run format
```

- Запуск Steiger (линтер FSD)

```
npm run lint-fsd
```
