# Tip Calculator

Учебный MVP (Vite + React + TypeScript) для недели 2 курса.

CI: см. Actions

## Запуск

```bash
npm install
npm run dev
```

Открой URL из терминала (обычно http://localhost:5173).

## Сборка

```bash
npm run build
```

## Что внутри

- `src/lib/calc.ts` — чистая логика (`calculateTip`, `validateInput`)
- `src/components/TipCalculatorForm.tsx` — поля, результаты, Reset
- Округление денег: `Math.round(x * 100) / 100` (2 знака)

## Валидация

При невалидных значениях (tip вне 0…30, split вне 1…20, bill ≤ 0) форма показывает ошибки, а результаты остаются `0.00`.

## Defaults после Reset

- Bill — пусто
- Tip % — `0`
- Split — `1`
