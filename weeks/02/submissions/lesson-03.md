# Сдача — Урок 2.3

## A — GitHub Actions (HAND)

- Run URL: [https://github.com/lordsxrom/my-ai-course-nasty/actions/runs/42998065462](https://github.com/lordsxrom/my-ai-course-nasty/actions/runs/42998065462)
- Workflow: `web-tip-calculator` · job `test` · conclusion: **success**
- Commit: `b06d625` — `week2 lesson3: add CI workflow and student web-testing rule`
- Лог: checkout → setup-node (20) → `npm ci` (200 packages) → `npm test` / `vitest run` → `src/lib/calc.test.ts` — Test Files 1 passed, Tests **11 passed** · Duration ~164ms. Fail→fix не понадобился: run сразу зелёный.

## B — Workflow (AI)

Путь: `.github/workflows/web-tip-calculator.yml`

## C — Rule (MIX)

Путь: `student/rules/web-testing.mdc`

Смысл правил своими словами: сначала проверяю логику unit-тестами, UI — после. Без зелёного `npm test` и зелёного CI работу не считаю готовой. В проекте должен быть `test` script — иначе коммитить нельзя. Rule лежит в `student/`, чтобы его можно было унести в другие проекты.

## D — Self-check + CI vs local


| ID  | Критерий        | Pass если | Улика                                                                                                                                                  |
| --- | --------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| C1  | Сдача           | `pass`    | `esson-03.md`                                                                                                                                          |
| C2  | Workflow AI     | pass      | `.github/workflows/web-tip-calculator.yml существует`                                                                                                  |
| C3  | Workflow sanity | pass      | npm ci|/test                                                                                                                                           |
| C4  | Rule MIX        | pass      | `student/rules/web-testing.mdc` с description + правилами про тесты/DoD                                                                                |
| C5  | Actions HAND    | pass      | - [https://github.com/lordsxrom/my-ai-course-nasty/actions/runs/42998065462](https://github.com/lordsxrom/my-ai-course-nasty/actions/runs/42998065462) |
| C6  | Git             | pass      | commit + push                                                                                                                                          |

### CI vs local

Локальный `npm test` зависит от моей машины, версии Node и того, «помню ли я прогнать». CI гоняет те же шаги на чистом runner после каждого push/PR — без моей памяти. Зелёный Actions даёт уверенность для merge: судья общий, а не «у меня прошло».

## E — Git

- Repo URL: [https://github.com/lordsxrom/my-ai-course-nasty](https://github.com/lordsxrom/my-ai-course-nasty)
- Commit: `b06d6250e055a26b06f7ade65b342614013c5212`
- Branch: main
- Commit URL: [https://github.com/lordsxrom/my-ai-course-nasty/commit/b06d6250e055a26b06f7ade65b342614013c5212](https://github.com/lordsxrom/my-ai-course-nasty/commit/b06d6250e055a26b06f7ade65b342614013c5212)
- Workflow / CI run: [https://github.com/lordsxrom/my-ai-course-nasty/actions/runs/42998065462](https://github.com/lordsxrom/my-ai-course-nasty/actions/runs/42998065462)

