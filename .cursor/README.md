# `.cursor/` — entrypoint курса (не student harness)

Cursor читает **только эту папку** автоматически. Здесь лежит **проводка**, а не твой рабочий QA-харнес.

## Что здесь

| | |
|---|---|
| `rules/course-workspace.mdc` | Роутинг Teacher / Student / Author |
| `skills/grade-homework/` | stub → `teacher/` |
| `skills/scaffold-*/` | stub → `teacher/skills/scaffold-*` |
| `COURSE_ONLY.md` | Что не экспортировать |

## Чего здесь нет

- Учебных skills (`write-e2e`, `bug-to-test`) → [`student/`](../student/README.md)  
- Полной логики Teacher → [`teacher/`](../teacher/README.md)  
- Инструментов автора → [`author/`](../author/README.md)

## Экспорт

При переносе «своего» харнеса в другой проект **не копируй** `.cursor/` целиком — только содержимое [`student/`](../student/README.md) минус course-only.

Полная схема: [docs/cursor-layout.md](../docs/cursor-layout.md).
