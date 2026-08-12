# Модуль 1 — Cursor и основы QA

**Время:** примерно 4–8 часов  
**Результат:** умеешь заказывать работу у Agent, принимать diff, оформлять баги и сьюты; есть шаблоны и зачаток харнеса.

Кода приложений в этом модуле нет — только навыки, которые понадобятся со **2-й недели**.

---

## Чему научишься

- Формулировать запрос с **DoD** (критерии приёмки)  
- Различать **Chat** и **Agent**, читать diff, делать Reject  
- Понимать **STLC** и почему Fixed ≠ Closed  
- Различать smoke, regression, negative, boundary; набросать **EP/BVA**  
- Сдавать домашку и получать вердикт **Pass / Rework** от Teacher  

---

## Уроки

| # | Тема | Файл | Время |
|---|------|------|-------|
| 1 | DoD и заказ артефакта | [01-agent-language-and-dod.md](lessons/01-agent-language-and-dod.md) | ~1 ч |
| 2 | Chat, Agent, diff | [02-chat-agent-diff.md](lessons/02-chat-agent-diff.md) | ~1 ч |
| 3 | STLC и баг | [03-stlc-and-bug-lifecycle.md](lessons/03-stlc-and-bug-lifecycle.md) | ~1.5 ч |
| 4 | Типы тестов, EP/BVA | [04-testing-types-and-design.md](lessons/04-testing-types-and-design.md) | ~1.5 ч |
| ✓ | **Checkpoint** | [CHECKPOINT.md](CHECKPOINT.md) | ~1 ч |

---

## Как проходить урок

1. Прочитай урок  
2. Сделай мини-практику в Cursor  
3. Заполни `submissions/lesson-NN.md` (из `lesson-NN.template.md`)  
4. Напиши: `проверь домашку недели 1, урок N`  
5. Доведи до Pass  

После уроков 1–4: `проверь checkpoint недели 1`

---

## Что появится в workbook

| Артефакт | Урок |
|----------|------|
| `templates/test-case.md` | 1 |
| `weeks/01/practice/cursor-controls.md` | 2 |
| `templates/bug-report.md`, `stlc-mini.md` | 3 |
| `templates/test-suite.md`, `tip-suites.md` | 4 |
| `docs/prompting.md` | checkpoint |

Все ответы — в **твоём** GitHub. Как устроено: [STUDENT.md](../STUDENT.md).

Харнес курса: **`student/`** (пока пустой) · Teacher **`teacher/`** · [схема](../docs/cursor-layout.md).

---

## Метки HAND / AI / MIX

- **HAND** — теория, таблицы, выводы  
- **AI** — шаблоны, баг-репорты, сьюты через Agent  
- **MIX** — промпт руками, генерация AI, приёмка руками  

---

## Дальше

Модуль 2: первое приложение — [Tip Calculator](../02/README.md).
