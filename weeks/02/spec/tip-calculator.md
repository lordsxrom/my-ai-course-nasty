# Tip Calculator — учебная спецификация

Версия для **недели 2**. Код живёт в `projects/web-tip-calculator/` **в workbook студента**, не в curriculum.

Связь с модулем 1: кейсы из `weeks/01/practice/tip-suites.md` — вход для unit-тестов (урок 2.2).

---

## MVP (урок 2.1)

Один экран, без роутинга и бэкенда.

### Поля

| Поле | Тип | Правила |
|------|-----|---------|
| Bill amount | number | > 0, два знака после запятой в отображении |
| Tip % | integer | 0…30 |
| Split | integer | 1…20 |

### Расчёт (чистая логика — вынести в отдельный модуль)

```text
tipAmount = bill * (tipPercent / 100)
total = bill + tipAmount
perPerson = total / split
```

Округление для UI: **2 decimal places** (банковское или `toFixed(2)` — зафиксируй в коде и тестах).

### UI (минимум)

- три инпута + labels
- строки результата: Tip, Total, Per person
- кнопка **Reset** (сброс к дефолтам: bill пустой/0?, tip 0, split 1 — зафиксируй в DoD урока)

### Вне скоупа урока 2.1

- Share / clipboard (модуль 1 — только на бумаге)
- e2e Playwright (урок 2.4)
- красота, i18n, persistence

---

## Критерии приёмки продукта (для QA)

1. При bill=100, tip=10, split=1 → total=110, per person=110  
2. При tip=0 → tip amount=0  
3. При split=2 → per person = total/2  
4. tip=-1 или 31 → валидация / ошибка (negative из tip-suites)  
5. split=0 или 21 → валидация / ошибка  

---

## Стек

- Vite + React + TypeScript  
- Тесты (с 2.2): Vitest  
- CI (с 2.3): GitHub Actions  
