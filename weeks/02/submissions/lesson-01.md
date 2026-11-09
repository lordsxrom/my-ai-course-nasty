# Сдача — Урок 2.1

> Template → `lesson-01.md`

## How I worked

- Smoke, git, self-check: HAND
- Scaffold: AI (`artifact_via: agent`)

## A — Smoke (HAND)


| Шаг                       | Ожидаемый результат             | Фактический результат                  |
| ------------------------- | ------------------------------- | -------------------------------------- |
| bill=100, tip=10, split=1 | total=110.00, per person=110.00 | total=110.00, per person=110.00 — Pass |
| bill=100, tip=0, split=1  | total=100.00, tip amount=0.00   | total=100.00, tip amount=0.00 — Pass   |
| bill=100, tip=10, split=5 | total=110.00, per person=22.00  | total=110.00, per person=22.00 — Pass  |




## B — Ручная проверка UI (HAND)

1.После `npm run dev` открыла [http://localhost:5173/](http://localhost:5173/).  
Результат:На экране три поля (Bill, Tip %, Split), три результата (Tip amount, Total, Per person) и кнопка Reset.  
2.Ввела bill=100, tip=10, split=1 — total и per person = 110.00.   
Результат: 110.00  
3. Нажала на Reset   
Результат: Калькулятор сбрасывает bill в пустое, tip в 0, split в 1.   
4. Ввела tip=31  
Результат:  При tip>=31 появляются ошибки валидации, результаты остаются 0.00.

## C — Проект

Путь: `projects/web-tip-calculator/`

`artifact_via: agent`

## D — Git (HAND)

- Repo URL: [https://github.com/lordsxrom/my-ai-course-nasty](https://github.com/lordsxrom/my-ai-course-nasty)
- Commit: `f9a4d4a191dbd8f7032a1b25025fbf28d7b20148`
- Branch: main



## E — Промпт (MIX)



### Промпт

```text
Режим: Agent.

Контекст: курс ai-course, неделя 2. Spec: weeks/02/spec/tip-calculator.md (@ файл).

Создай projects/web-tip-calculator:
- Vite + React + TypeScript
- Структура: src/components/, src/lib/calc.ts (чистая логика), App.tsx
- Поля: bill, tip %, split — по spec
- Отображение: tip amount, total, per person (2 знака)
- Кнопка Reset
- Минимальные стили, без UI-библиотек

Ограничения:
- только projects/web-tip-calculator/**
- без тестов (урок 2.2) и CI (урок 2.3)

DoD:
1. npm install && npm run dev стартует без ошибок
2. calc.ts экспортирует функции расчёта (bill, tipPercent, split)
3. UI показывает tip, total, per person
4. README.md в проекте: как запустить (2 команды)
5. package.json scripts: dev, build
```



### Reject / rework

Первый scaffold через latest Vite (create-vite 9 / Vite 8) не стартовал на Node v20.17 — ошибка native binding / engine. Rework: пересоздать на Vite 6 + React+TS, затем дописать calc.ts, TipCalculatorForm, README. Diff принимала только внутри `projects/web-tip-calculator/`.

## F — Self-check + мета


| ID  | Пункт              | Статус | Улика                                                                           |
| --- | ------------------ | ------ | ------------------------------------------------------------------------------- |
| 1   | Проект + calc.ts   | Pass   | `projects/web-tip-calculator/src/lib/calc.ts` — `calculateTip`, `validateInput` |
| 2   | Smoke таблица      | Pass   | Часть A: 3 строки, A1 expected total=110                                        |
| 3   | Push в свой GitHub | Pass   | Commit `f9a4d4a` запушен в https://github.com/lordsxrom/my-ai-course-nasty (main) |
| 4   | via agent          | Pass   | `artifact_via: agent` в How I worked / C                                        |
| 5   | npm run dev ок     | Pass   | Vite ready → [http://localhost:5173/](http://localhost:5173/)                   |




### Мета

На практике увидела разницу «бумажный» QA (модуль 1) vs артефакт = код + smoke в браузере. Важно принимать diff только в allowlist и проверять `npm run dev` руками, а не доверять Agent на слово. Commit и push в свой remote сделаны (часть D).