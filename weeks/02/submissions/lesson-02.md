# Сдача — Урок 2.2

## How I worked

- A, B, D, E: HAND
- C: AI

## A — Трассировка (HAND)


| Case / Requirement                   | Test name                       |
| ------------------------------------ | ------------------------------- |
| bill: 100, tipPercent: 10, split: 1  | functional_bill100_tip10_split1 |
| bill: 100, tipPercent: 0, split: 1   | boundary_tip0                   |
| bill: 100, tipPercent: 30, split: 1  | boundary_tip30                  |
| bill: 100, tipPercent: 10, split: 2  | functional_split2               |
| bill: 100, tipPercent: 10, split: 1  | accepts_bill100_tip10_split1    |
| bill: 100, tipPercent: 0, split: 1   | accepts_boundary_tip0           |
| bill: 100, tipPercent: 30, split: 1  | accepts_boundary_tip30          |
| bill: 100, tipPercent: 31, split: 1  | negative_tip31                  |
| bill: 100, tipPercent: -1, split: 1  | negative_tip_minus1             |
| bill: 100, tipPercent: 10, split: 0  | negative_split0                 |
| bill: 100, tipPercent: 10, split: 21 | negative_split21                |


## B — npm test (HAND)

```text
npm test → exit 0: 11 passed.
```

## C — Vitest

`artifact_via: agent`

## D — Self-check + мета


| ID  | Пункт                                              | Статус | Улика                                                                                                                |
| --- | -------------------------------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------- |
| 1   | `npm test` → exit 0                                | Pass   | В B: `npm test → exit 0: 11 passed`; локально Vitest: Test Files 1 passed, Tests 11 passed                           |
| 2   | ≥6 test cases                                      | Pass   | В `projects/web-tip-calculator/src/lib/calc.test.ts` 11 кейсов (`it.each` / `testName`); в A 11 строк трассировки    |
| 3   | Unit только calc / validateInput, без React render | Pass   | `calc.test.ts` импортирует только `calculateTip`, `validateInput` из `./calc`; нет `@testing-library` / render       |
| 4   | Vitest + script `test` в проекте                   | Pass   | `package.json`: `"test": "vitest run"`, devDependency `vitest`; файл `src/lib/calc.test.ts`                          |
| 5   | Трассировка HAND ≥6                                | Pass   | Часть A: 11 строк Case / Requirement → test name                                                                     |
| 6   | Commit + push                                      | Pass   | Часть E: `31a4291a2f47511ee1cce7e800d322f16971962b` в [repo](https://github.com/lordsxrom/my-ai-course-nasty) (main) |
| 7   | AI-артефакт через Agent                            | Pass   | Часть C: `artifact_via: agent`                                                                                       |


Мета (сложный тип теста): сложнее автоматизировать **negative**, чем boundary. Boundary (tip=0 / tip=30) — прямые assert'ы на расчёт. Negative (tip=31, tip=-1, split=0/21) требует отдельно проверять `validateInput` (`valid: false` + текст ошибки), а не только `calculateTip`.

## E — Git

- Repo URL: [https://github.com/lordsxrom/my-ai-course-nasty](https://github.com/lordsxrom/my-ai-course-nasty)
- Commit: `31a4291a2f47511ee1cce7e800d322f16971962b`
- Branch: main
- Commit URL: [https://github.com/lordsxrom/my-ai-course-nasty/commit/31a4291a2f47511ee1cce7e800d322f16971962b](https://github.com/lordsxrom/my-ai-course-nasty/commit/31a4291a2f47511ee1cce7e800d322f16971962b)
- Tests commit: `ae4fbbf538680d8a7418a1ca7ec99f1916544a0f`

## F — Промпт + Git-команды (этот коммит сдачи)

Промпт:

```text
выполни коммит и пуш обновленного weeks/02/submissions/lesson-02.md.
запиши какой промт для этого использовался
```

Команды:

```bash
git add -f weeks/02/submissions/lesson-02.md
git commit -m "week2 lesson2: update submission after rework"
git push

git add -f weeks/02/submissions/lesson-02.md
git commit -m "week2 lesson2: fill git hash in submission"
git push
```

