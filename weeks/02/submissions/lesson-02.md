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
| bill: 100, tipPercent: 30, split: 1  | accepts_boundary_tip0           |
| bill: 100, tipPercent: 31, split: 1  | negative_tip31'                 |
| bill: 100, tipPercent: -1, split: 1  | negative_tip_minus1             |
| bill: 100, tipPercent: 10, split: 0  | negative_split0                 |
| bill: 100, tipPercent: 10, split: 21 | negative_split21                |




## B — npm test (HAND)

```text
npm test → exit 0: 10 passed.
```



## C — Vitest

`artifact_via: agent`

## D — Self-check + мета


| ID  | Пункт | Статус | Улика |
| --- | ----- | ------ | ----- |
|     |       |        |       |


Мета (сложный тип теста): …

## E — Git

Commit: …  
Repo: …