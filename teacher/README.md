# Teacher harness

Проверка домашки и **scaffold-ТЗ** приложений. Часть curriculum; в workbook нужен для `проверь домашку`.

| | |
|---|---|
| Роль | `teacher/rules/teacher.mdc` |
| Проверка ДЗ | `teacher/skills/grade-homework/SKILL.md` |
| Болванки apps | [scaffold-apps/](skills/scaffold-apps/README.md) |
| Вызов | stub в `.cursor/skills/` → читает `teacher/` |

**Не путать:**

| Teacher | Student | Author |
|---------|---------|--------|
| `teacher/` | `student/` | `author/` |
| проверяет ученика | харнес ученика | ведёт curriculum |

**Не копируй** `teacher/` в portable-харнес и в `projects/`.

Entrypoint: [`.cursor/README.md`](../.cursor/README.md) · схема: [docs/cursor-layout.md](../docs/cursor-layout.md)
