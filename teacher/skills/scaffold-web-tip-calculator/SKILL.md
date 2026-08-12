---
name: scaffold-web-tip-calculator
description: Генерирует или обновляет учебный Tip Calculator (Vite+React+TS) в projects/web-tip-calculator по полному ТЗ курса. Использовать на неделе 2+, фразы «создай tip calculator», «scaffold web calculator», «болванка tip calculator».
---

# Scaffold — Web Tip Calculator

Полное ТЗ для Agent. Stub: `.cursor/skills/scaffold-web-tip-calculator/`.

Spec curriculum: `weeks/02/spec/tip-calculator.md`.

## Контекст курса

- Workbook студента; код **только** в `projects/web-tip-calculator/`.
- QA: расчёт в `src/lib/calc.ts` — тестируемо отдельно от UI (Vitest с урока 2.2).
- Связь с модулем 1: tip % 0…30, split 1…20 — как в `tip-suites`.

## Стек

| Слой | Технология |
|------|------------|
| Bundler | Vite (latest stable) |
| UI | React 18+ |
| Язык | TypeScript strict |
| Стили | CSS modules или один `App.css` — без Tailwind/MUI на MVP |
| Тесты | не в фазе scaffold-only; Vitest добавляется уроком 2.2 |
| CI | не в фазе scaffold-only |

## Структура проекта (целевая)

```text
projects/web-tip-calculator/
  package.json
  vite.config.ts
  tsconfig.json
  index.html
  README.md                 # npm install, npm run dev, npm run build
  src/
    main.tsx
    App.tsx
    App.css
    lib/
      calc.ts               # чистая логика
      calc.types.ts         # опционально
    components/
      TipCalculatorForm.tsx # инпуты + результаты + Reset
```

## Функциональные требования

### Поля ввода

| ID | Поле | Тип | Валидация | Default UI |
|----|------|-----|-----------|------------|
| F1 | Bill amount | number | > 0 для расчёта; пусто/0 → показать placeholder или 0 results | пусто |
| F2 | Tip % | integer | 0…30 inclusive | 0 |
| F3 | Split | integer | 1…20 inclusive | 1 |

### Расчёт (`calc.ts`)

Экспорт минимум:

```typescript
export type CalcInput = {
  bill: number;
  tipPercent: number;
  split: number;
};

export type CalcResult = {
  tipAmount: number;
  total: number;
  perPerson: number;
};

export function calculateTip(input: CalcInput): CalcResult;
export function validateInput(input: CalcInput): { valid: boolean; errors: string[] };
```

Формулы:

```text
tipAmount = bill * (tipPercent / 100)
total = bill + tipAmount
perPerson = total / split
```

Округление **денег**: 2 знака после запятой (зафиксируй один способ в коде и комментарии — `Math.round(x*100)/100` или аналог).

### UI

- Labels понятные QA: Bill ($), Tip (%), Split (people).
- Вывод: Tip amount, Total, Per person — с 2 decimal places.
- **Reset**: bill → empty/0, tip → 0, split → 1.
- Invalid input (tip 31, split 0): показ errors **или** disable calculate — выбери один паттерн, опиши в README.

### Acceptance (smoke QA)

| # | bill | tip | split | total | perPerson |
|---|------|-----|-------|-------|-----------|
| A1 | 100 | 10 | 1 | 110.00 | 110.00 |
| A2 | 100 | 0 | 1 | 100.00 | 100.00 |
| A3 | 100 | 10 | 2 | 110.00 | 55.00 |

## Фазы (что включать по запросу студента)

| Фаза | Включить | Исключить |
|------|----------|-----------|
| **scaffold** (урок 2.1) | Vite app, calc.ts, UI, README, dev/build | Vitest, Playwright, CI, Share |
| **+tests** (урок 2.2) | Vitest, tests для calc.ts по tip-suites | e2e |
| **+ci** (урок 2.3) | `.github/workflows/` unit job | deploy |

Если фаза не названа — **scaffold**.

## Allowlist

```text
Разрешено: projects/web-tip-calculator/**
Запрещено: weeks/, teacher/, корневой COURSE.md, чужие projects/
```

## DoD scaffold (выдать студенту checklist)

1. `npm install && npm run dev` — без ошибок  
2. `src/lib/calc.ts` с `calculateTip` + `validateInput`  
3. UI: 3 поля, 3 результата, Reset  
4. A1 smoke проходит вручную  
5. README: install + dev + build  
6. `package.json` scripts: `dev`, `build`  

## Out of scope (не делать без явного урока)

- Share / clipboard  
- Routing, auth, API, DB  
- i18n, dark theme, animations  
- Компонентные библиотеки  

## Шаблон промпта для студента

```text
@scaffold-web-tip-calculator
Фаза: scaffold.
Создай projects/web-tip-calculator по skill.
DoD: пункты 1–6 из skill.
```
